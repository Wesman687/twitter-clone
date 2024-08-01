
import { Inter } from '@next/font/google'
import Sidebar from './components/Sidebar'
import PostFeed from './components/PostFeed'
import Trending from './components/Trending'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-[#e7e9ea] max-w-[1400px] mx-auto flex'>
      <Sidebar />
      <PostFeed />
      <Trending />
      </div>
  )
}
