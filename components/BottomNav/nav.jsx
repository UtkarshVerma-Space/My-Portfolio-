import style from "./nav.module.css"
import Link from "next/link"
import Image from "next/image"
import Home from "./assets/home.png"
import About from "./assets/about.png"
import Skills from "./assets/skills.png"


export default function Nav() {
    
    return (
        <div className={style.BottomNavbar}>
            {/* About Button */}
            <div id={style.option} className={style.options}>
                <Link prefetch={false} className={style.link} href="/about">
                <Image className={style.homeimage} src={About} alt="home"/>

                </Link>
                {/* Text Under Icon */}
                <p className={style.optionsubhead}>About</p>
            </div>
            {/* Home Button */}
            <div id={style.option} className={style.options}>
                <Link prefetch={false} className={style.link} href="/" >
                <Image className={style.homeimage} src={Home} alt="home"/>
                </Link>
                {/* Text Under Icon */}
                <p className={style.optionsubhead}>
                    Home
                </p>
                </div>



            <div id={style.option} className={style.options}>
                {/* Icon */}
              
                <Link prefetch={false} className={style.link} href="/skills">
                <Image className={style.homeimage} src={Skills} alt="home"/>

                </Link>
                {/* Text Under Icon */}
            <p className={style.optionsubhead}>Freelance</p>
            </div>
            
        </div>

    )
}
