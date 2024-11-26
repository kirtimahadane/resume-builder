import {useState, useEffect} from 'react'
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
const DarkMode = () => {
    const[theme, setTheme]= useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
  const element= document.documentElement;
  useEffect(()=>{
    if(theme ==="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark")
    }else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

    }
  },[theme])
    return (
    <div className='relative'>
        <div className={`w-20 cursor-pointer 
      drop-shadow-sm trasition-all duration-300 absolute right-0 z-10 text-2xl ${theme==="dark"?"opacity-0":"opacity-100"}`}>
            <IoSunny onClick={()=>theme==="light"?setTheme("dark"):setTheme("light")} />

        </div>
        <div className={`w-20 cursor-pointer 
      drop-shadow-sm trasition-all duration-300 absolute right-0 z-10 text-2xl ${theme==="dark"?"opacity-100":"opacity-0"}`}>
            <FaMoon onClick={()=>theme==="light"?setTheme("dark"):setTheme("light")} />
        </div>

    </div>
  )
}

export default DarkMode