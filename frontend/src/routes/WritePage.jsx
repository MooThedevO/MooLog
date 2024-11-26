import { useUser } from "@clerk/clerk-react"
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from "react-quill-new"

const WritePage = () => {

    const {isLoaded, isSignedIn} = useUser()

    if (!isLoaded){
        return <div className="">Loading...</div>
    }
    if (!isLoaded && !isSignedIn){
        return <div className="">You should Login!</div>
    }

    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6" >
            <h1 className="text-cl font-light">Create New Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6">
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-yellow-500 bg-red-900">Add cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="Your Title goes here..." />
                <div className="flex items-center gap-4">
                    <label htmlFor="" className="text-sm">Choose a category:</label>
                    <select name="cat" id="" className="p-2 rounded-xl bg-rose-950 shadow-md">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea className="p-4 rounded-xl bg-rose-950 shadow-md" name="desc" placeholder="Enter a short description..." />
                <ReactQuill theme="snow" className="flex-1 rounded-xl bg-rose-950 shadow-md"/>
                <button className="text-yellow-500 bg-red-900 font-medium rounded-xl mt-4 p-2 w-36">Send</button>
            </form>
        </div>
    )
}

export default WritePage