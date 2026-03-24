import { blue } from "@mui/material/colors";
import { motion } from "motion/react"


import { useAnimationFrame } from "motion/react"
import { useRef } from "react"
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
function Motion(){
    var[loading,setloader]=useState(true)
    setTimeout(()=>{
        setloader(false)
    },3000); const ref = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })
return(
    <>
<motion.div
style={{backgroundColor:"blue", height:80, width:80,borderRadius:50}}
animate={{x:600,y:600,scale:0.6,rotate:360,}}
transition={{duration:4,delay:1,repeat:Infinity,repeatType:"reverse",ease:"easeOut"}}
>

</motion.div>
<div className="container">
<div className="row">
    <div className="col-lg-4">
       <motion.h1
        initial={{opacity:0}}
        animate={{opacity:60}}
        transition={{delay:0.7}}
        >20</motion.h1>
        <motion.h3
         initial={{opacity:0}}
        animate={{opacity:60}}
        transition={{delay:0.8}}
        >students</motion.h3>
    </div>
     <div className="col-lg-4"><motion.h1 initial={{opacity:0}}
        animate={{opacity:60}}
        transition={{delay:0.9}}>4</motion.h1>
        <motion.h3 initial={{opacity:0}}
        animate={{opacity:60}}
        transition={{delay:1}}>awards</motion.h3></div>
      <div className="col-lg-4">
        <motion.h1 initial={{opacity:0}}
        animate={{opacity:60}}
        transition={{delay:1.1}}>10</motion.h1>
        <motion.h3 initial={{opacity:0}}
        animate={{opacity:60}}
        transition={{delay:1.2}}>projects</motion.h3></div>
</div>
</div>
{loading ? <Skeleton height={500} width={700}/>: <img src="images/bowl-3.png"/>}
    </>
)
}
export default Motion;