import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
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
        <div className="absolute bottom-0">User</div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation mb-3 w-11 h-11 xl:w-auto xl:justify-start xl:h-auto flex justify-center items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
