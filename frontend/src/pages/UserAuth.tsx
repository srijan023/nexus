import { ToastContainer } from "react-toastify";
import Quotes from "../components/Quotes";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";

export default function UserAuth({ type }: { type: "signin" | "signup" }) {

  const text = "The customer service I received was exceptional. The support team went above and beyond to address my concerns";
  const person = "Jules Winnfeild";
  const position = "CEO, Amce Inc.";

  return <>
    <div className="flex font-roboto">
      <div className="w-full">
        {
          type == "signin" ?
            <SigninForm /> :
            <SignupForm />
        }
      </div>
      <div className="hidden lg:block w-full">
        <Quotes text={text} person={person} position={position} />
      </div>
    </div>
  </>
}
