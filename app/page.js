import Image from 'next/image'
import profilepic from './assets/imgaddress'
import style from './page.module.css'
export default function Home() {
  return (
    <>


<div className="main">

<div className={style.CDR}>
    <Image width="200" height="200" src={profilepic} alt="profileimg"/>

</div>



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
