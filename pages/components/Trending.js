import {
  BadgeCheckIcon,
  DotsHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div
        className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
                focus:outline-none
                placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold p-3 text-xl">What's Happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">US</h1>
          <p className="text-cs text-gray-500">340k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in China</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-cs text-gray-500">140k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in AU</p>
          <h1 className="text-[15px] font-bold">Australia</h1>
          <p className="text-cs text-gray-500">280k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-cs text-gray-500">340k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-cs text-gray-500">340k Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to Follow</h1>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/profile_pic.jpg"
              className="w-11 h-11 object-cover rounded-full"
            ></img>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">David Bragg</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@davidbragg</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8">Follow</button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/profile_pic.jpg"
              className="w-11 h-11 object-cover rounded-full"
            ></img>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">David Bragg</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@davidbragg</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8">Follow</button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/profile_pic.jpg"
              className="w-11 h-11 object-cover rounded-full"
            ></img>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">David Bragg</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@davidbragg</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold h-8">Follow</button>
        </div>
      </div>
    </div>
  );
}
