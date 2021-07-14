import React, {useEffect, useState} from 'react'
import Option from '../CatalogOption/Option'
import Carousel from "../../Carousel/Carousel";
import ChooseTime from "../ChooseTime/ChooseTime";

import style from '/styles/Catalog/CatalogItem.module.scss'

const CatalogItem = ({setNewData, data}) => {

    const [itemData, setItemData] = useState(data)

    const setNewItemOptions = item => {
        setItemData(pre => ({...pre, options: item}))
    }

    const setNewTime = (time) => {
        setItemData(prev => ({...prev, totalTime: time}))
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
            <li className={style.item}>
                <div className="wrapper">
                    <Carousel height={220} width={300} data={data.images}/>

                    <h3 className={style.title}>{itemData.title}</h3>
                    <h5
                        className={style.subtitle}>Размер: <span>{itemData.subtitle}</span>
                    </h5>
                    <Option calcPrice={calcNewPrice} setChecked={setNewItemOptions} options={itemData.options}/>
                    <ChooseTime chooseTime={setNewTime} time={itemData.totalTime}/>
                    <div className={style.order}>
                        <p className={style.price}>{itemData.price} &#8381;</p>
                        <button className={style.btn}>Оставить заявку</button>
                    </div>
                </div>
            </li>
        )
    } else {
        return null
    }


}

export default CatalogItem