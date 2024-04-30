import React, { useState } from 'react'
import bannerImage from "../assets/arpit2.jpg"

const Header = () => {
    const[brandName, setBrandName] = useState("Divyanshu sharma");
    const [menuLinks, setMenuLinks]=useState([
        {
            titile:"Home",
            link: "/home",
            id: 1,
        },
        {
            titile:"About",
            link: "/about",
            id: 2,
        },
        {
            titile:"skills",
            link: "/skills",
            id: 3,
        },
        {
            titile:"Portfolio",
            link: "/portfolio",
            id: 4,
        },
        {
            titile:"Contact",
            link: "/contact",
            id: 5,
        },
    ])

    const [actionButton,setActionButton]= useState({
        title:"Hire me",
        link: "/hire me"
    })
  return (
<>


<div className=' h-20  border main flex justify-between items-center px-16 bg-gray-100'>

<div>{/* brand logo*/}

<h1 className='text-2xl font-bold px-16'>{brandName}</h1>

</div>

<div className='space-x-3'> {/*main menu*/}
{menuLinks.map((link) => (
    <a  key={link.id} href="{link.link}" className='hover: text-orange-600'>{link.titile}</a>
))}

{/*
<a href="/about" className='hover: text-orange-600'>About</a>
<a href="/skills" className='hover: text-orange-600'>Skills</a>
<a href="/portfolio" className='hover: text-orange-600'>Portfolio</a>
<a href="/Contact" className='hover: text-orange-600'>Contact</a>
  */}
</div>
<div>{/*buttons*/}

<a href='{actionButton.link}' className='px-4 py-3 bg-orange-500 shadow rounded-full text-1xl'>{actionButton.title}</a>

</div>
</div>
</>
  )
}

export default Header