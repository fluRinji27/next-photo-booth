import React, {useEffect, useState} from 'react';
import PhoneInput from 'react-phone-number-input/input'

import 'react-phone-number-input/style.css'
import style from '/styles/CatalogSubmitModal.module.scss'

function CatalogSubmitModal({data, closeModal}) {
    const {title, subtitle, options, totalTime, initialPrice} = data ? data : []

    const [inputValue, setInputValue] = useState('')
    const [optionsPrice, setOptionsPrice] = useState(0)
    const [currentTime, setCurrentTIme] = useState(totalTime)

    const changeEndPrice = value => setCurrentTIme(value)

    useEffect(() => {
        const filteredOptions = options.filter(el => el.isChecked)
        filteredOptions.length > 0 ? filteredOptions.map(el => setOptionsPrice(prev => prev + el.price)) : 0
    }, [])

    return (
        <div className={style.catalogItemModal}>
            <h2 className={style.title}>Ваша заявка</h2>
            <div className={style.itemParams}>
                <div className={style.itemParams__info}>
                    <div>
                        <h4 className={style.itemParams__title}>{title}</h4>
                        <h5 className={style.itemParams__subtitle}>Размер: <span>{subtitle}</span></h5>
                    </div>
                    <h4 className={style.itemParams__price}>{initialPrice * currentTime} &#8381;</h4>
                </div>
                <select className={style.sort__list} onChange={e => changeEndPrice(e.target.value)}>
                    <option
                        className={style.sort__item}
                        selected={totalTime === 1}
                        value="1"
                    >
                        1 час
                    </option>
                    <option
                        className={style.sort__item}
                        selected={totalTime === 2}
                        value="2"
                    >
                        2 часа
                    </option>
                    <option
                        className={style.sort__item}
                        selected={totalTime === 3}
                        value="3"
                    >
                        3 часа
                    </option>
                    <option
                        className={style.sort__item}
                        value="5"
                        selected={totalTime === 5}
                    >
                        5 часов
                    </option>
                    <option
                        className={style.sort__item}
                        value="48"
                        selected={totalTime === 48}
                    >
                        2 дня
                    </option>
                    <option
                        className={style.sort__item}
                        value="72"
                        selected={totalTime === 72}
                    >
                        3 дня
                    </option>
                </select>
            </div>
            <div className={style.options}>
                {options && options.filter(el => el.isChecked).map(el => (
                    <div key={el.id} className={style.option}>
                        <h4 className={style.itemParams__title}>{el.title}</h4>
                        <h4 className={style.itemParams__price}>{el.price} &#8381;</h4>
                    </div>))}
            </div>
            <h2 className={style.totalPrice}>Итого: <span>{(initialPrice * currentTime) + optionsPrice} &#8381;</span>
            </h2>
            <div className={style.input__wrapper}>
                <PhoneInput
                    className={style.input}
                    value={inputValue}
                    onChange={setInputValue}
                    placeholder={'+7 (000) 000 00 00'}
                />
                <select className={style.chooseCallbackMethod}>
                    <option className={style.sort__item} value="1">
                        Позвоните мне
                    </option>
                    <option className={style.sort__item} value="0">
                        Напишите мне
                    </option>
                </select>
            </div>

            <button
                className={style.submit}
                onClick={() => closeModal(false)}
            >
                Отправить заявку
            </button>
        </div>
    );
};

export default CatalogSubmitModal;