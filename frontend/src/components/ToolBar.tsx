import { type Editor } from "@tiptap/react"
import { Bold, Code, Columns, Grip, Heading2, Heading3, Italic, List, ListOrdered, Quote, Redo, Rows, Save, Strikethrough, Table, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableRowsSplit, Underline, Undo, Upload } from "lucide-react";
import ToolbarButton from "./ToolbarButton";
import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
export default function Toolbar({ content, editor, handlePost }: { content: string, editor: Editor | null, handlePost: () => void }) {

  if (!editor) {
    return null
  }

  return <>
    <div className="grid grid-cols-7 sm:flex shadow-md rounded-md shadow-gray-400 sm:items-center sm:justify-between p-2">
      <div>
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run()
        }} stateName="bold" editor={editor}>
          <Bold className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div>
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run()
        }} stateName="italic" editor={editor}>
          <Italic className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div>
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run()
        }} stateName="underline" editor={editor}>
          <Underline className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run()
        }} stateName="strike" editor={editor}>
          <Strikethrough className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleCode().run()
        }} stateName="code" editor={editor}>
          <Code className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div>
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }} stateName="heading" headingLevel={2} editor={editor}>
          <Heading2 className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div>
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }} stateName="heading" headingLevel={3} editor={editor}>
          <Heading3 className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run()
        }} stateName="bulletList" editor={editor}>
          <List className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run()
        }} stateName="orderedList" editor={editor}>
          <ListOrdered className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().toggleBlockquote().run()
        }} stateName="blockquote" editor={editor}>
          <Quote className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().undo().run()
        }} stateName="undo" editor={editor}>
          <Undo className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div className="sm:block hidden">
        <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          editor.chain().focus().redo().run()
        }} stateName="redo" editor={editor}>
          <Redo className="w-5 h-5" />
        </ToolbarButton>
      </div>

      <div>
        <DropDownMenu positioning={"top-12 -left-3"} component={<span className="flex justify-center items-center"><Table /></span>} >
          <span><Table /></span>
          <span><Columns /></span>
          <span><Rows /></span>
          <span><TableColumnsSplit /></span>
          <span><TableRowsSplit /></span>
          <span><Table2 /></span>
          <span><TableCellsSplit /></span>
          <span><TableCellsMerge /></span>
        </DropDownMenu>
      </div>

      <div className="justify-center items-center text-gray-500 cursor-pointer sm:flex hidden">
        <Save />
      </div>

      <div className={`${content.length > 20 ? "visible" : "invisible"} sm:block hidden`}>
        <Button shadow={false} text={"Publish"} onClick={handlePost} />
      </div>

      <div className="sm:hidden flex justify-center items-center ">
        <DropDownMenu positioning={"top-12 -left-20"} component={<Grip />}>

          <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run()
          }} stateName="strike" editor={editor}>
            <Strikethrough className="w-5 h-5" />
          </ToolbarButton>

          <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            editor.chain().focus().toggleCode().run()
          }} stateName="code" editor={editor}>
            <Code className="w-5 h-5" />
          </ToolbarButton>

          <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run()
          }} stateName="bulletList" editor={editor}>
            <List className="w-5 h-5" />
          </ToolbarButton>

          <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run()
          }} stateName="orderedList" editor={editor}>
            <ListOrdered className="w-5 h-5" />
          </ToolbarButton>

          <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            editor.chain().focus().undo().run()
          }} stateName="undo" editor={editor}>
            <Undo className="w-5 h-5" />
          </ToolbarButton>

          <ToolbarButton handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            editor.chain().focus().redo().run()
          }} stateName="redo" editor={editor}>
            <Redo className="w-5 h-5" />
          </ToolbarButton>

          <Save className="w-5 h-5" />

          <Upload onClick={handlePost} className="w-5 h-5" />

        </DropDownMenu>
      </div>

    </div>
  </>

}
