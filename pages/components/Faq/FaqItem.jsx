import React, {useState} from 'react';
import style from "/styles/Faq.module.scss";

const FaqItem = ({title, text}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div
            className={style.question}
            onClick={() => setIsActive(!isActive)}
        >
            <h1 className={isActive ? style.question__title + ' ' + style.question_active : style.question__title}>
                {title}
                <span className="arrow"/>
            </h1>
            <div className={isActive ? style.question__body + ' ' + style.question__body_active : style.question__body}>
                <p className={style.question__text}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default FaqItem;