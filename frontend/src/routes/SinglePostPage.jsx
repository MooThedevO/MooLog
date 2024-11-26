import { Link } from "react-router-dom"
import Image from "../components/Image"
import PostMenuAction from "../components/PostMenuAction"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8" >
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                    <div className="flex items-center gap-2 text-yellow-900 text-sm">
                        <span>Written by</span>
                        <Link className="text-yellow-700">John Doe</Link>
                        <span>on</span>
                        <Link className="text-yellow-700">Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-yellow-800 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio consectetur 
                        rerum repellat laborum illo et, iste blanditiis ducimus. Doloribus maxime animi 
                        hic expedita commodi recusandae, ad possimus pariatur laborum?
                    </p> 
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="postImg.jpeg" w="600" className="rounded-2xl"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                         m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat
                         m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaeratdolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis 
                         m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaeratid quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                         m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat
                         m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaeratdolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis 
                         m ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus
                         mollitia dolores recusandae veritatis possimus rem perspiciatis id quis pariatur 
                         aspernatur consectetur quaeratid quis pariatur 
                         aspernatur consectetur quaerat sit voluptatem magnam, dolorem nihil optio! Voluptas?
                    </p>
                </div>
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <Image src="userImg.jpeg" className="w-12 h12 rounded-full object-cover" w="48" h="48"/>
                            <Link className="text-yellow-500">John Doe</Link>
                        </div>
                        <p className="text-sm text-yellow-700">Lorem ipsum dolor ndi </p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg"/>
                            </Link>
                            <Link>
                                <Image src="instagram.svg"/>
                            </Link>
                        </div>
                    </div>
                    <PostMenuAction />
                    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link className="underline" to="/">Develpment</Link>
                        <Link className="underline" to="/">Databases</Link>
                        <Link className="underline" to="/">Search Engines</Link>
                        <Link className="underline" to="/">Marketing</Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default SinglePostPage