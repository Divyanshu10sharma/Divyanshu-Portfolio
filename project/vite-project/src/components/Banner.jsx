import bannerImage from "../assets/arpit4.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner=()=>{

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Script Developer", "Frontend Developer", ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


    return(

        <div style={
          {
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize: "cover",
          }
        }
        className="main-container flex items-center" >{ /*first dabba*/}
        
             <div
          
             className=" w-full flex justify-center">  {/*text*/}
             <div className="w-2/3  spave-y-2 ms-10">
               <h3 className=" text-3xl font-semibold">Hi, I am</h3>
               <h1 className=" text-5xl font-bold">Divyanshu Sharma</h1>
               <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
              
               <p className="mt-3">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolorum vero quaerat obcaecati quis nesciunt vitae eos in deleniti sit provident nam labore reprehenderit explicabo fuga reiciendis iste nihil natus impedit quas recusandae unde? Nesciunt debitis repellendus dolorum amet nam aliquid nobis omnis illo distinctio iste? Maiores, dolore? Facilis, aspernatur.</p>
               <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-2 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl   text-white fa-facebook"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-2 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl text-white fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-2 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl   text-white fa-youtube"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-2 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl text-white  fa-linkedin-in"></i>
            </a>
          </div>
               <br />
               <a className = " text = 2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg" href="/contact">Contact me</a>
     
               </div>
             </div>
             <div className=" w-full flex justify-center">
                {/*image*/}
                <img className="rounded-full my-2 shadow-lg w-3/5 "   src={bannerImage} />
             </div>

        </div>
   
    );
};

export default Banner;