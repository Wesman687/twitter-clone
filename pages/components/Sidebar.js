import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  console.log(user)

  async function handleSignOut(){
    await signOut(auth)
    dispatch(signOutUser())
    dispatch(closeSignupModal())
    dispatch(closeLoginModal())
  }
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full xl:space-y-1.5 relative">
        <div className="flex justify-center xl:justify-start items-center py-3 xl:p-3 ">
          <Image
            className="text-white"
            src={"/assets/twitter-logo2.png"}
            width={50}
            height={44}
          />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"Morning"} />
        <button className="hidden text-lg font-bold bg-[#1d9bf0] rounded-full h-[52px] w-[200px] xl:inline">
          Tweet
        </button>
        <div 
        onClick={handleSignOut}
        className="w-full absolute flex justify-center items-center xl:p-3 xl:space-x-3 
        hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer bottom-0">
          <img className="w-10 h-10 rounded-full object-cover" 
          src={user.photoUrl || "/assets/profilePicture/pfp2.jpg"} />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation mb-3 w-11 h-11 xl:w-auto xl:justify-start xl:h-auto flex justify-center items-center text-xl text-[#1d9bf0] space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
