import { type Editor } from "@tiptap/react"
interface ToolbarButtonProps {
  editor: Editor,
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  children: React.ReactNode,
  stateName: string,
  headingLevel?: number
}

export default function ToolbarButton(props: ToolbarButtonProps) {
  return <>
    <button
      onClick={props.handleOnClick}
      className={props.editor.isActive(`${props.stateName}`, { level: props.headingLevel }) ? 'bg-gray-300 px-1 py-1 text-white rounded-md' : 'text-gray-500 py-1 px-1'}
    >
      {props.children}
    </button>

  </>
}
