"use client"
import Image from 'next/image'
import profilepicture from "../assets/img.jpg"
import { motion } from 'framer-motion'
import style from './page.module.css'
export default function Home() {
  return (
    <>





<div className="main">

<motion.div 

initial={{opacity:"0.01"}}
animate={{opacity:"1"}}

className={style.CDR}>
    <Image width="200" height="200" src={profilepicture} alt="profileimg"/>

</motion.div>



<div className={style.wrapper}>
    <h1 className={style.typingdemo}>
      Utkarsh Verma  
    </h1>
    <h1 className={style.typingdemo2}>
        WEB DEVELOPER  
      </h1>
  </div>


</div>








    </>
  )
}
