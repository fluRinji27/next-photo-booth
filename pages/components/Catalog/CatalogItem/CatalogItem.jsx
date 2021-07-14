import React, {useState} from 'react'
import Option from '../CatalogOption/Option'
import Carousel from "../../Carousel/Carousel";

import style from '/styles/Catalog/CatalogItem.module.scss'

const CatalogItem = ({setNewData, data}) => {

    const [itemData, setItemData] = useState(data)

    const setNewItemData = item => {
        setItemData(pre => ({...pre, options: item}))
    }



    if (data) {
        return (
            <li className={'wrapper ' + style.item}>
                <Carousel height={220} width={300} data={data.images}/>

                <h3 className={style.item__title}>{itemData.title}</h3>
                <h5
                    className={style.item__subtitle}>Размер: <span>{itemData.subtitle}</span>
                </h5>

                <div className={style.item__timeChoice}>
                    <p className={style.item__time}></p>
                </div>
                <Option setChecked={setNewItemData} options={itemData.options}/>
                <div className={style.item__order}>
                    <p className={style.item__price}>{itemData.price} &#8381;</p>
                    <button className={style.item__btn}>Оставить заявку</button>
                </div>
            </li>
        )
    } else {
        return null
    }


}

export default React.memo(CatalogItem)