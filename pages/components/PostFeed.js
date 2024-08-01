import Tweet from "./Tweet";
import TweetInput from "./TweetInput";

export default function PostFeed() {

    return (
        <div className="sm:ml-16 xl:ml-80 max-w-2xl border-gray-700 border-x flex-grow">
        <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
            Home
        </div>
        Feed
        <TweetInput />
        <Tweet />
        </div>
    )
}