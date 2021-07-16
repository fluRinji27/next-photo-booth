import React from 'react';
import Carousel from "../Carousel/Carousel";
import style from '/styles/NewsModal.module.scss'

const NewsModal = ({data, toDate}) => {
    const {category, date, title, text, images} = data ? data : []
    return (
        <div className={style.main}>
            <Carousel height={320} width={320} data={images}/>
            <div className={style.header}>
                <div className={style.preTitle}>
                    <h4 className={style.category}>
                        {category}
                        <strong className={style.date}>
                            {toDate && toDate(date)}
                        </strong>
                    </h4>
                </div>
                <h2 className='title title__h2'>{title}</h2>
            </div>
            <p className={style.text}>{text}</p>
        </div>
    );
};

export default NewsModal;