import style from "./nav.module.css"
import Link from "next/link"
export default function Nav() {
    
    return (
        <div className={style.BottomNavbar}>
            {/* About Button */}
            <div id={style.option} className={style.options}>
                <Link className={style.link} href="/about">
                    😶‍🌫️
                </Link>
                {/* Text Under Icon */}
                <p className={style.optionsubhead}>About</p>
            </div>
            {/* Home Button */}
            <div id={style.option} className={style.options}>
                <Link className={style.link} href="/" >
                🏡
                </Link>
                {/* Text Under Icon */}
                <p className={style.optionsubhead}>
                    Home
                </p>
                </div>



            <div id={style.option} className={style.options}>
                {/* Icon */}
              
                <Link className={style.link} href="/skills">
                🖥️
                </Link>
                {/* Text Under Icon */}
            <p className={style.optionsubhead}>Skills</p>
            </div>
            
        </div>

    )
}
