import { Link, useNavigate } from "react-router-dom";
import AuthenticationCard from "./AuthenticationCard";
import Button from "./Button";
import InputField from "./InputField";
import { loginInfo } from "@creatio_00/medium-common";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../config";
import { toast, ToastContainer } from 'react-toastify';


export default function SigninForm() {
  const [signinDetails, setSigninDetails] = useState<loginInfo>({
    email: "",
    password: ""
  })


  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/users/signin`, signinDetails);
      if (res.status != 200) {
        toast.error(res.data.msg);
      } else {
        const jwt = res.data.token;
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("token", jwt);
        toast.success(res.data.msg)
        navigate("/blogs");
      }
    } catch (e) {
      //TODO:  alert here the request failed
      toast.error("Sign in request failed");
    }
  }

  return <>
    <AuthenticationCard>
      <div className="text-center">
        <h1 className="font-bold text-3xl">Login to your account</h1>
      </div>
      <div className="flex flex-col gap-4">
        <InputField type={"email"} placeholder={"Enter your email"} label={"Email"} onChange={(e) => { setSigninDetails({ ...signinDetails, email: e.target.value }) }} />
        <InputField type={"password"} placeholder={""} label={"Password"} onChange={(e) => {
          setSigninDetails({ ...signinDetails, password: e.target.value })
        }} />
      </div>
      <div className="underline cursor-pointer text-center text-gray-500">
        Forgot Password
      </div>
      <div className="flex flex-col gap-2 text-center">
        <Button text={"Sign In"} onClick={handleOnClick} />
        <h2 className="text-gray-500">Don't have an account?  <span className="underline"><Link to="/signup">Create one</Link></span></h2>
      </div>
    </AuthenticationCard>
  </>
}
