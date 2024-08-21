import Avatar from "./Avatar";
import LightFullLogo from "/LightFullLogo.png"
import { GrHomeRounded } from "react-icons/gr";
import { GrSearch } from "react-icons/gr";
import { GrNotification } from "react-icons/gr";
import { BsPen } from "react-icons/bs";

import NavbarIcon from "./NavbarIcon";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PilledButton from "./PillButton";
import DropDownMenu from "./DropDownMenu";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const [username, setUserName] = useState<string>("");

  const handleSignOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUserName("");
    navigate("/signin");
  }

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setUserName(savedName);
    }
  }, [username])

  return <>
    <div className="absolute font-roboto">
      <div className="w-full fixed bottom-0 sm:top-0 h-fit">
        {
          //Nabvar for smaller displays

          // TODO: handle user sigin check and navigations from smaller navbar
        }
        <div className="sm:hidden mx-3 flex justify-between px-5 rounded-full relative bottom-2 items-center -pb-3 bg-gray-200">
          <NavbarIcon>
            <GrHomeRounded />
          </NavbarIcon>
          <NavbarIcon>
            <GrSearch />
          </NavbarIcon>
          <div className="px-5 py-5 font-serif text-2xl border-slate-500 border-2 rounded-full relative -top-2 bg-white text-gray-500">
            <BsPen />
          </div>
          <NavbarIcon>
            <GrNotification />
          </NavbarIcon>
          <div>
            <Avatar username={username} />
          </div>
        </div>
        {
          // Navbar for bigger displays
        }
        <div className="bg-white shadow-md shadow-gray-300 sm:flex hidden justify-between sm:py-3 border-b-gray-300 border-b px-2 sm:px-3">
          <div onClick={() => navigate("/blogs")} className="flex justify-center items-center cursor-pointer">
            <img src={LightFullLogo} className="h-[60px]" alt="Nexus full logo" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full border-gray-400 border px-4 py-2">
              <NavbarIcon>
                <GrSearch />
              </NavbarIcon>
              <input type="text" placeholder="Search..." className="outline-0 border-0 text-gray-500 px-2" />
            </div>
          </div>
          {
            username ?
              <div className="flex gap-8 justify-end items-center cursor-pointer">
                <div onClick={() => { navigate("/compose") }} className="flex gap-1 justify-center items-center border border-gray-300 rounded-full px-4 py-2">
                  <NavbarIcon>
                    <BsPen />
                  </NavbarIcon>
                  <p className="text-gray-500 font-normal">Compose</p>
                </div>
                <NavbarIcon>
                  <div>
                    <GrNotification />
                  </div>
                </NavbarIcon>
                <DropDownMenu positioning={"top-20 -left-12"} layout={"flex flex-col gap-2"} component={<Avatar username={username} size={"large"} />}>
                  <div onClick={handleSignOut} className="flex justify-center gap-2 hover:text-red-500">
                    <LogOut />
                    <span>Log out</span>
                  </div>
                  <div onClick={() => { console.log("Go to the user's profile") }} className="flex justify-center gap-2 hover:text-blue-500">
                    <User />
                    <span>Profile</span>
                  </div>
                </DropDownMenu>
              </div> :
              <div className="flex gap-3">
                <PilledButton text={"Sign in"} handleClick={() => { navigate('/signin') }} />
                <PilledButton text={"Sign up"} handleClick={() => { navigate("/signup") }} type={"secondary"} />
              </div>
          }
        </div>
      </div>
    </div>
  </>
}
