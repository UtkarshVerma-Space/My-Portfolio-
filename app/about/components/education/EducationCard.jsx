import { useEffect } from "react"
import style from "./eduCard.module.css"
import { motion } from "framer-motion"
export default function EducationCard(props) {
   return (
     <>

    <motion.div 
    className={style.ed}>

    <h1>{props.InstituteName}</h1>
        <p>{props.CorseName}</p>
        <p>{props.Year}</p>
        <p>{props.Extra}</p>
        
        <div className={style.hr}>

        </div>
    </motion.div>
        </>
  )
}
