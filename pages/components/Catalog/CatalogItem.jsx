import React, {useEffect, useState} from 'react'

import Option from './CatalogOption/Option'
import Carousel from "../Carousel/Carousel";
import ChooseTime from "./ChooseTime/ChooseTime";
import LazyLoad from 'react-lazyload'

import style from '/styles/Catalog/CatalogItem.module.scss'

const CatalogItem = ({setItemInModal, setIsModalActive, setNewData, data}) => {

    const [itemData, setItemData] = useState(data)

    const setNewItemOptions = item => {
        setItemData(pre => ({...pre, options: item}))
    }

    const setNewTime = (time) => {
        if (time === itemData.totalTime) return

        const prevTime = itemData.totalTime
        const activeOptions = itemData.options.filter(item => item.isChecked)
        let endPrice = itemData.initialPrice * time
        let activeOptionsPrice = 0

        activeOptions.length > 0 ? activeOptions.map(el => activeOptionsPrice += el.price) : 0

        if (time > prevTime) {
            setItemData(prev => ({...prev, price: endPrice + activeOptionsPrice, totalTime: time}))
        } else {
            endPrice = (+itemData.initialPrice * +time) + +activeOptionsPrice
            setItemData(prev => ({...prev, price: endPrice, totalTime: time}))
        }
    }

    const calcNewPrice = (price, operation) => {
        const result = operation ? itemData.price + price : itemData.price - price
        setItemData(prev => ({...prev, price: result}))
    }

    useEffect(() => {
        if (JSON.stringify(itemData) !== JSON.stringify(data)) {
            setNewData(itemData)
        }
    }, [itemData])

    if (data) {
        return (
            <>
                <LazyLoad className={style.item} once>

                    <Carousel height={220} width={300} data={data.images}/>

                    <h3 className={style.title}>{itemData.title}</h3>
                    <h5
                        className={style.subtitle}>Размер: <span>{itemData.subtitle}</span>
                    </h5>
                    <Option calcPrice={calcNewPrice} setChecked={setNewItemOptions} options={itemData.options}/>
                    <ChooseTime chooseTime={setNewTime} time={itemData.totalTime}/>
                    <div className={style.order}>
                        <p className={style.price}>{itemData.price} &#8381;</p>
                        <button
                            className={style.btn}
                            onClick={() => {
                                setItemInModal(itemData)
                                setIsModalActive(true)
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </LazyLoad>
            </>
        )
    } else {
        return null
    }
}

export default CatalogItem