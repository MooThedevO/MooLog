import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
        </div>
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">Lorem, ipsum dolor sit amet </Link>
            <div className="flex items-center gap-2 text-yellow-900 text-sm">
                <span>Written By</span>
                <Link className="text-yellow-700">John doe</Link>
                <span>On</span>
                <Link className="text-yellow-700">Web Design</Link>
                <span>2 days ago</span>
            </div>
        </div>
    </div>
  )
}

export default PostListItem