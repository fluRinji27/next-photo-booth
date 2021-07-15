import React from "react";
import Image from "next/image";

import style from '/styles/Contact.module.scss'

const Contact = () => {
    return (
        <div className={style.contact}>
            <h4 className='preTitle'>Мы всегда достпну для вас</h4>
            <h2 className="title title__h2">Контакты</h2>
            <div className={style.item}>
                <div>
                    <Image
                        src='/img/phone.svg'
                        alt="Телефон"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={style.info}>
                    <h4 className={style.title}>Телефон</h4>
                    <h4 className={style.text}>+7 495 123 45 67</h4>
                </div>
            </div>

            <div className={style.item}>
                <div>
                    <Image
                        src='/img/mapMark.svg'
                        alt="Адресс"
                        width={25}
                        height={30}
                    />
                </div>
                <div className={style.info}>
                    <h4 className={style.title}>Адрес</h4>
                    <h4 className={style.text}>
                        109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская
                    </h4>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.empty}/>
                <div className={style.info}>
                    <h4 className={style.title}>Почта</h4>
                    <h4 className={style.text}>Info@test.ru</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;