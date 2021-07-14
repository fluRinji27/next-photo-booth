import Image from "next/image";
import React, {useEffect, useState} from 'react'

import style from '/styles/Modal.module.scss'

export default function Modal({isActive, modalHandler, children}) {
    const [isModalActive, setIsModalActive] = useState(false)

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        }
        return () => document.body.style.overflow = 'unset'
    }, [isActive])

    useEffect(() => {
        setIsModalActive(isActive)
    }, [isActive])

    if (isModalActive) {
        return (
            <div className={style.Modal} onClick={() => {
                setIsModalActive(false)
                modalHandler(false)
            }}>
                <div className={style.Modal__button}>
                    <Image
                        src={'/img/close.svg'}
                        layout="fill"
                        objectFit="contain"/>
                </div>
                {children}
            </div>
        )
    }
    return null
}


