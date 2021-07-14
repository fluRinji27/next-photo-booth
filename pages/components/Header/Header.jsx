import Image from "next/image";
import style from '/styles/Header.module.scss'

export default function Header() {
    return (
        <header className={'wrapper' + ' ' + style.header}>
            <div className={style.logo}>
                <Image src='/img/logo.svg' width={63} height={60}/>
            </div>
        </header>
    )
}

