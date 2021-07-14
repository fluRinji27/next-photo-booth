import React, {useState} from 'react'
import Sort from '../Sort/Sort'
import CatalogItem from './CatalogItem/CatalogItem'

import style from '/styles/Catalog/Catalog.module.scss'

const Catalog = ({initialData}) => {

    const [data, setData] = useState(initialData)

    const setNewData = item => {
        data.map(el => {
            if (el.id === item.id) {

            }
        })
    }

    return (
        <div className={'wrapper ' + style.catalog}>
            <h2 className="title title__h2 ">Фотобудки</h2>
            <Sort/>
            <ul>
                {data && data.map(item => (
                    <CatalogItem key={item.id} setNewData={setNewData} data={item}/>
                ))}
            </ul>
        </div>
    )
}

export default Catalog
