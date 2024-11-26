import Image from './Image'

const Comment = () => {
  return (
    <div className="p-4 bg-rose-950 rounded-xl mb-8">
        <div className="flex items-center gap-4">
            <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
            <span className='font-medium text-yellow-500'>John Doe</span>
            <span className='text-sm text-yellow-700'>2 days ago</span>
        </div>
        <div className='mt-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dolorem, optio. Neque perferendis, quas nulla cum.
            </p>
        </div>
    </div>
  )
}

export default Comment