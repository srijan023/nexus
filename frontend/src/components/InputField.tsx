import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface InputFieldPropTypes {
  label: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type: string
}

export default function InputField({ label, placeholder, onChange, type }: InputFieldPropTypes) {
  const [passwordState, setPasswordState] = useState(true);
  return <>
    <div className="flex relative flex-col gap-3">
      <label htmlFor={label} className="font-medium">{label}</label>
      <input onChange={onChange} type={type == "password" ? passwordState ? "password" : "text" : type} id={label} className="outline-0 text-gray-500 border-gray-200 border-2 px-4 py-2 rounded-md placeholder-gray-500" placeholder={placeholder} />
      {
        type == "password" ?
          <div className="absolute right-5 bottom-3.5" onClick={() => {
            setPasswordState(!passwordState)
          }}>
            {
              !passwordState ? <IoEyeOutline /> : <IoEyeOffOutline />
            }
          </div>
          :
          ""
      }
    </div>
  </>
}
