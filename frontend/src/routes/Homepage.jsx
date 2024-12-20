import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostList from "../components/PostList"

const Homepage = () => {
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {/* breadcrumb */}
            <div className="flex gap-4">
                <Link to="/" className="text-yellow-700">Home</Link>
                <span>-</span>
                <span className="text-yellow-900">Blogs and Articles</span>
            </div>
            {/* intro */}
            <div className=" flex items-center justify-between">
                {/* titles */}
                <div className="">
                    <h1 className="text-biege text-2xl md:text:5xl lg:text-6xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt</h1>
                    <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio 
                        sit perspiciatis porro odio dolorum aliquid quis, doloremque ex vel consequatur 
                    </p>
                </div>
                {/* animated button */}
                <Link to="write" className="hidden md:block relative">
                    <svg
                        viewBox="0 0 200 200"
                        width="220"  // Increase the size of the circle
                        height="220" // Increase the size of the circle
                        className="text-lg tracking-widest animate-spin animatedButton"
                    >
                        <path
                            id="circlePath"
                            fill="none"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                        <text fill="#f5f5dc">
                            <textPath href="#circlePath" startOffset="0%">
                                Write a new post •
                            </textPath>
                            <textPath href="#circlePath" startOffset="50%">
                                Share your ideas •
                            </textPath>
                        </text>
                    </svg>
                    <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-28 h-28 bg-red-800 rounded-full flex items-center justify-center">
                        <svg 
                            viewBox="-3 -1 36 36" 
                            width="85"  // Increase icon size to fit nearly the circle
                            height="85" // Increase icon size to fit nearly the circle
                            version="1.1" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="#f5f5dc"  // Beige color
                        >
                            <g id="SVGRepo_bgCarrier"></g>
                            <g id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Page-1" stroke="none" fill="none">
                                    <g id="Icon-Set" transform="translate(-516.000000, -99.000000)" fill="#ffffff">
                                        <path d="M527.786,122.02 L522.414,125.273 C521.925,125.501 521.485,125.029 521.713,124.571 L524.965,119.195 L527.786,122.02 L527.786,122.02 Z M537.239,106.222 L540.776,109.712 L529.536,120.959 C528.22,119.641 526.397,117.817 526.024,117.444 L537.239,106.222 L537.239,106.222 Z M540.776,102.683 C541.164,102.294 541.793,102.294 542.182,102.683 L544.289,104.791 C544.677,105.18 544.677,105.809 544.289,106.197 L542.182,108.306 L538.719,104.74 L540.776,102.683 L540.776,102.683 Z M524.11,117.068 L519.81,125.773 C519.449,126.754 520.233,127.632 521.213,127.177 L529.912,122.874 C530.287,122.801 530.651,122.655 530.941,122.365 L546.396,106.899 C547.172,106.124 547.172,104.864 546.396,104.088 L542.884,100.573 C542.107,99.797 540.85,99.797 540.074,100.573 L524.619,116.038 C524.328,116.329 524.184,116.693 524.11,117.068 L524.11,117.068 Z M546,111 L546,127 C546,128.099 544.914,129.012 543.817,129.012 L519.974,129.012 C518.877,129.012 517.987,128.122 517.987,127.023 L517.987,103.165 C517.987,102.066 518.902,101 520,101 L536,101 L536,99 L520,99 C517.806,99 516,100.969 516,103.165 L516,127.023 C516,129.22 517.779,131 519.974,131 L543.817,131 C546.012,131 548,129.196 548,127 L548,111 L546,111 L546,111 Z" id="new"> </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                </Link>
            </div>
            {/* categories */}
            <MainCategories />
            {/* featured */}
            <FeaturedPosts />
            {/* post list */}
            <div className="">
                <h1 className="my-8 text-4xl font-bold text-yellow-200">Recent Posts</h1>
                <PostList />
            </div>
        </div>
    )
}

export default Homepage