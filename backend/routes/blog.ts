import { blogInfoSchema, updateBlogSchema } from "@creatio_00/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    UserId: string
  }

}>();

const authMiddleware = createMiddleware(async (c, next) => {
  try {
    const headers = c.req.header("authorization");
    const authHeader = headers?.split(" ")[1] ?? "";

    if (authHeader) {
      const decoded = await verify(authHeader, c.env.JWT_SECRET)

      c.set("UserId", decoded.id);

      await next();
    } else {
      return c.json({
        msg: "Unauthorized",
      }, 401)

    }
  } catch (e) {
    return c.json({
      msg: "You are not logged in" + e,
    }, 403)

  }
})

blog.use("/", authMiddleware);

blog.post("/", async (c) => {

  try {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.get("UserId");
    const body = await c.req.json();

    const parseInfo = blogInfoSchema.safeParse({
      title: body.title,
      content: body.content,
    });

    if (!parseInfo.success) {
      return c.json({
        msg: "Invalid data format provided"
      }, 400)
    }

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: id
      }
    })

    if (post) {
      return c.json({
        msg: "Post uploaded successfully",
        postId: post.id
      }, 201)
    } else {
      return c.json({
        msg: "Post upload failed",
      }, 500)
    }

  } catch (e) {
    c.json({
      msg: "Internal server error"
    }, 500)
  }

})

blog.put("/", async c => {
  try {
    //const id = c.get("UserId") ?? "invalid";
    const body = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const parseInfo = updateBlogSchema.safeParse({
      title: body.title,
      content: body.content,
      id: body.id
    })

    if (!parseInfo.success) {
      return c.json({
        msg: "Invalid data provided"
      }, 400)
    }

    const response = await prisma.post.update({
      data: {
        title: body.title,
        content: body.content,
      },
      where: {
        id: body.id
      }
    })

    return c.json({
      msg: "Post updated successfully",
      id: response.id
    }, 201)

  } catch (e) {
    return c.json({
      msg: "Internal server error",
    }, 500)
  }
})

// this is kept above .get("/:id") because the id one will accept everything that is after the / and treat it as id therefore if we place it above the bulk one will be handled separately.
blog.get("/bulk", async c => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const res = await prisma.post.findMany({
      select: {
        id: true,
        content: true,
        title: true,
        published: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return c.json({
      posts: res.reverse()
    }, 200)
  } catch (e) {
    return c.json({
      msg: "Internal server error"
    }, 500)
  }
})

blog.get("/:id", async c => {
  try {
    const postid = c.req.param("id");

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const res = await prisma.post.findFirst({
      where: {
        id: postid
      },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    if (res) {
      return c.json({
        post: res
      }, 200)
    } else {
      return c.json({
        msg: "Post not found"
      }, 404)
    }
  } catch (e) {
    return c.json({
      msg: "Internal server error"
    }, 500)
  }
})



export default blog;
