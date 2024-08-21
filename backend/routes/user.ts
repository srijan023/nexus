import { loginInfoSchema, userInfoSchema } from "@creatio_00/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

const user = new Hono<{
  // specifying the type of environment variables
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>();


user.post("/signup", async function(c) {

  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const userInfo = {
      name: body.name,
      email: body.email,
      password: body.password
    }

    const res = userInfoSchema.safeParse(userInfo);

    if (res.success) {

      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: body.password
        },
        select: {
          id: true,
          name: true
        }
      })

      const token = await sign({ id: user.id }, c.env.JWT_SECRET);

      return c.json({
        msg: "User creted successfully",
        token: token,
        username: user.name
      }, 201)

    } else {

      return c.json({
        msg: "Invalid input provided for user signup"
      }, 400)

    }
  } catch (e) {

    return c.json({
      msg: `Internal server error, ${e}`,
    }, 500)

  }

})


user.post("/signin", async function(c) {
  try {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const loginInfo = {
      email: body.email,
      password: body.password
    }

    const res = loginInfoSchema.safeParse(loginInfo)

    if (res.success) {

      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        },
        select: {
          id: true,
          name: true
        }
      })

      if (user) {

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
          msg: "Sign in successfull",
          token,
          username: user.name
        }, 200)

      } else {

        return c.json({
          msg: "Invalid credentials"
        }, 403)
      }

    } else {

      return c.json({
        msg: "Invalid data format"
      }, 400)
    }

  } catch (e) {

    return c.json({
      msg: "Internal server error"
    }, 500)
  }
})

export default user;
