import { EditorContent, mergeAttributes, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./ToolBar";
import Underline from "@tiptap/extension-underline";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";

interface EditorContainerProps {
  content: string,
  onChange: (changedContent: string) => void,
  handlePost: () => void
}
export default function EditorContainer({ content, onChange, handlePost }: EditorContainerProps) {

  const handleChange = (newContent: string) => {
    onChange(newContent);
  }

  const editor = useEditor({
    injectCSS: false,

    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },

    extensions: [
      StarterKit.configure({
        // these would be imported twice so to prevent conflict
        heading: false,
        bulletList: false,
        orderedList: false,
        blockquote: false,
        listItem: false
      }),
      // setting up custom view type for headings
      Heading.extend({
        levels: [1, 2],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(node.attrs.level)
            ? node.attrs.level
            : this.options.levels[0];
          const classes: { [index: number]: string } = {
            2: 'text-2xl font-semibold',
            3: 'text-xl font-semibold'
          };
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ];
        },
      }).configure({ levels: [2, 3] }),

      // configure bullet list display
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc'
        }
      }),

      // configure order list display
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal'
        }
      }),

      // configure the display of blockquotes
      Blockquote.configure({
        HTMLAttributes: {
          class: 'border-l-2 border-l-gray-400 pl-3 py-1'
        }
      }),

      // underline requires separate dependency
      Underline,
      ListItem
    ],
    editorProps: {
      attributes: {
        class: "flex flex-col px-3 py-2 w-full h-[300px] outline-0"
      }
    }
  })


  return <>
    <div className="font-sans flex flex-col gap-5 w-full text-gray-600">
      <div className="">
        <Toolbar handlePost={handlePost} content={content} editor={editor} />
      </div>
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  </>
}
