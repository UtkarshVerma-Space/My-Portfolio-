import React from 'react'
import style from "./Lable.module.css"
export default function Lable(props) {
  return (
    <p style={{width: props.width}} className={style.lable}>
      {props.lable}
    </p>
  )
}
