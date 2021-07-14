import React, {useEffect, useState} from 'react'
import Sort from '../Sort/Sort'
import CatalogItem from './CatalogItem/CatalogItem'

import style from '/styles/Catalog/Catalog.module.scss'

const Catalog = ({initialData}) => {

    const [data, setData] = useState([])

    const setNewData = item => {
        setData(data.map(el => {
            if (el.id === item.id) {
                return item
            }
            return el
        }))
    }

    const sortData = (type) => {
        switch (type) {
            case 'def':
                setData(prev => [...prev.sort((a, b) => +a.id - +b.id)])
                break;
            case 'min':
                setData(prev => [...prev.sort((a, b) => +a.price - +b.price).reverse()])
                break;
            case 'max':
                setData(prev => [...prev.sort((a, b) => +a.price - +b.price)])
                break
        }
    }

    useEffect(() => {
        setData(initialData)
    }, [])

    return (
        <div className={'wrapper ' + style.catalog}>
            <h2 className="title title__h2 ">Фотобудки</h2>
            <Sort sortHandler={sortData}/>
            <ul>
                {data && data.map(item => (
                    <CatalogItem key={item.id} setNewData={setNewData} data={item}/>
                ))}
            </ul>
        </div>
    )
}

export default Catalog
