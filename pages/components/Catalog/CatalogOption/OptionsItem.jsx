import React from 'react'
import Image from "next/image";
import style from '/styles/Catalog/CatalogOptions.module.scss'

const OptionsItem = ({key, styles, option, handler}) => {
    if (option) {
        return (
            <div key={key} style={styles} className={style.options__item}>
                <div className={style.options__img}>
                    <Image
                        src={`/img/catalog/${option.image}.png`}
                        alt={option.title}
                        width={60}
                        height={60}
                    />
                </div>
                <div className={style.options__info}>
                    <p className={style.options__infoItem + ' ' + style.options__text}>{option.title}</p>
                    <p className={style.options__infoItem + ' ' + style.options__price}>От {option.price} &#8381;</p>
                </div>
                <input
                    className={style.options__checkbox}
                    type="checkbox"
                    checked={option.isChecked}
                    onChange={() => handler(option)}
                />
            </div>
        )
    } else {
        return null
    }
}

export default OptionsItem