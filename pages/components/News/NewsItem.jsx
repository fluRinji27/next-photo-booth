import React from 'react';
import Image from "next/image";

import style from '/styles/News.module.scss'

const NewsItem = ({data}) => {
    const jsonDate = data && new Date(JSON.parse(data.date))
    const months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ]

    return (
        <>
            {data && (
                <>
                    <div className={style.image}>
                        <Image src={`/img/news/${data.images[0]}.png`} layout='fill'/>
                        {/*<Carousel height={220} width={300} data={images}/>*/}
                    </div>
                    <div className={style.info}>
                        <h4 className={style.preTitle}>{data.category}</h4>
                        <h2 className={style.title}>{data.title}</h2>
                        <h2 className={style.shortText}>{data.shortText}</h2>
                        <h4 className={style.date}>{jsonDate.getDate() + ' ' + months[jsonDate.getMonth()] + ' ' + jsonDate.getFullYear()}</h4>
                    </div>
                </>
            )}
        </>
    );
};

export default NewsItem;