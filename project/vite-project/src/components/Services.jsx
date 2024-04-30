

const Services = () => {
  return (
    <>
   <div className="main-container py-16">
    <h1 className="text-center text-5xl underline font-bold">My Services</h1>

    <div className="services-container space-x-5 px-10 flex mt-12">
       
        
        <div className="hover:bg-gray-100  bg-slate-200 p-5 text-center service1 space-y-4 shadow-lg rounded-xl">
        <i class="text-5xl cursor-pointer  fa-brands fa-aws"></i>

            <h1 className="text-4xl">Web dovelopment</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem dolores aut animi sit facilis vero accusantium doloremque nisi nesciunt?</p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">Check</button>
        </div>
        <div
        className=" hover:bg-gray-100  bg-slate-200 p-5 text-center shadow-lg rounded-xl">
            <i class="text-5xl cursor-pointer  fa-solid fa-mobile"></i>
        <h1 className="text-4xl">Android dovelopment</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem dolores aut animi sit facilis vero accusantium doloremque nisi nesciunt?</p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">Check</button>
        </div>
        <div className=" hover:bg-gray-100  bg-slate-200 p-5 text-center shadow-lg rounded-xl">
        <i class="text-5xl cursor-pointer fa-solid fa-server"></i>
        <h1 className="text-4xl">Backend dovelopment</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem dolores aut animi sit facilis vero accusantium doloremque nisi nesciunt?</p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">Check</button>
        </div>
    </div>
</div>
    </>
  )
}

export default Services