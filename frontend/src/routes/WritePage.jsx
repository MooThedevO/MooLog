import { useAuth, useUser } from "@clerk/clerk-react"
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from "react-quill-new"
import { useMutation } from "react-query"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const WritePage = () => {
    const [value, setValue] = useState('');
    const {isLoaded, isSignedIn} = useUser();
    
    const navigate = useNavigate();

    const {getToken} = useAuth();

    const mutation = useMutation({
        mutationFn: async (newPost) => {
            const token = await getToken();
            return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            });
        },
        onSuccess: (res) => {
            toast.success("Post has been added!");
            navigate(`/${res.data.slug}`);
        }
    });

    if (!isLoaded){
        return <div className="">Loading...</div>
    }
    if (!isLoaded && !isSignedIn){
        return <div className="">You should Login!</div>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        const data = {
            title:formData.get("title"),
            category:formData.get("category"),
            desc:formData.get("desc"),
            content:value,
        };
        mutation.mutate(data);
    }
    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6" >
            <h1 className="text-cl font-light">Create New Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-yellow-500 bg-red-900">Add cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="Your Title goes here..." name="title"/>
                <div className="flex items-center gap-4">
                    <label htmlFor="" className="text-sm">Choose a category:</label>
                    <select name="category" id="" className="p-2 rounded-xl bg-rose-950 shadow-md">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea className="p-4 rounded-xl bg-rose-950 shadow-md" name="desc" placeholder="Enter a short description..." />
                <div className="flex">
                    <div className="flex flex-col gap-2 mr-2">
                        <div className="cursor-pointer">📷</div>
                        <div className="cursor-pointer">🗄</div>
                    </div>
                    <ReactQuill theme="snow" className="flex-1 rounded-xl bg-rose-950 shadow-md" value={value} onChange={setValue}/>
                </div>
                <button 
                    disabled={mutation.isPending}
                    className="text-yellow-500 bg-red-900 font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-red-950 disabled:cursor-not-allowed">
                        {mutation.isPending ? "Loading..." : "Send"}
                </button>
                {mutation.isError && <span>{mutation.error.message}</span>}
            </form>
        </div>
    )
}

export default WritePage