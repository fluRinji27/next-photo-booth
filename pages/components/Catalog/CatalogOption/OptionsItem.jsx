import React from 'react'
import Image from "next/image";
import style from '/styles/Catalog/CatalogOptions.module.scss'

const OptionsItem = ({option, handler}) => {
    if (option) {
        return (
            <>
                <div className={style.img}>
                    <Image
                        src={`/img/catalog/${option.image}.png`}
                        alt={option.title}
                        width={60}
                        height={60}
                    />
                </div>
                <div className={style.info}>
                    <p className={style.text}>
                        {option.title}
                    </p>
                    <p className={style.price}>
                        От {option.price} &#8381;
                    </p>
                </div>
                <div className={style.input}>
                    <input
                        className={style.checkbox}
                        type="checkbox"
                        checked={option.isChecked}
                        onChange={() => handler(option)}
                    />
                    {option.isChecked &&
                    <div
                        className={style.checked}
                        onClick={() => handler(option)}
                    >
                        <Image
                            src='/img/checkMark.svg'
                            width={15}
                            height={15}
                            alt='checkMark'
                        />
                    </div>}
                </div>
            </>
        )
    } else {
        return null
    }
}

export default OptionsItem