"use client"
import React from 'react'
import { useEffect } from 'react'
import style from "./about.module.css"
import Lable from './components/Lable/lable'
import EducationCard from './components/education/EducationCard'






export default function Comp() {

    return (
      <>
    <div className={style.AboutBox}>

      {/* Card */}
      <div className={style.box}>

        {/* Lable */}
      <Lable width="100px" lable="About"/>

      <p className={style.about}>
      Hi, I'm <b>Utkarsh Verma</b>, a Web Developer with expertise in React and Node.js. I'm passionate about creating beautiful and functional websites that deliver a great user experience. I have experience in developing web applications using React, Node.js, and other popular frameworks and libraries. I enjoy staying up-to-date with the latest web technologies and applying them to create innovative solutions for clients.
      </p>
      </div>
    {/* Card End */}


      {/* Card */}
      <div className={style.box}>
      {/* Lable */}
      <Lable width="100px" lable="Education"/>  
      <p className={style.about}>
        <EducationCard
        InstituteName="Narayana Public School"
        CorseName="High School Diploma, School"
        Year="2020-2022"
        Extra="Grade 10"
        />
      </p>
      </div>
    {/* Card End */}



     {/* Card */}
     <div className={style.box}>
      
      {/* Lable */}
     <Lable width="220px" lable="Courses & Certification"/>


      <p className={style.about}>
        <EducationCard
        InstituteName="
        Google Digital Unlocked"
        CorseName="Fundamentals of digital marketing"
        Year="Issued Aug 2020"
        Extra="Credential ID 6JP2BLMPC"
        />
      </p>


      <p className={style.about}>
        <EducationCard
        InstituteName="
        Udemy"
        CorseName="Web Development"
        Year="Ongoing"
        Extra=""
        />
      </p>
      </div>
    {/* Card End */}

    </div>
    </>
  )
}
