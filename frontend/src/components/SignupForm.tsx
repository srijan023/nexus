import { userInfo } from "@creatio_00/medium-common"; import { useState } from "react"; import { Link, useNavigate } from "react-router-dom"; import Button from "./Button"; import InputField from "./InputField";
import AuthenticationCard from "./AuthenticationCard";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignupForm() {

  const [inputs, setInputs] = useState<userInfo>({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/users/signup`, inputs);
      const jwt = res.data.token;
      localStorage.setItem("token", jwt);
      localStorage.setItem("username", res.data.username);
      toast.success("Signed Up successfully")
      navigate("/blogs");
    } catch (e) {
      toast.error("Could not create a new user");
    }
  }

  return <>
    <AuthenticationCard>
      <div className="text-center flex flex-col gap-2">
        <h1 className=" font-bold text-3xl">Create an Account</h1>
        <h2 className="text-gray-500 font-roboto">Already have an account? <span className="underline"><Link to="/signin">Login</Link></span></h2>
      </div>
      <div className="flex flex-col gap-4">

        <InputField onChange={(e) => {
          setInputs({ ...inputs, name: e.target.value });
        }} label="Username" placeholder="Enter your username" type="text" />

        <InputField onChange={e => {
          setInputs({ ...inputs, email: e.target.value });
        }} label="Email" type="email" placeholder="m@example.com" />

        <InputField onChange={(e) => {
          setInputs({ ...inputs, password: e.target.value });
        }} label="Password" placeholder="" type="password" />

      </div>
      <div>
        <Button text={"Sign Up"} onClick={handleOnClick} />
      </div>
    </AuthenticationCard>
  </>;
}

