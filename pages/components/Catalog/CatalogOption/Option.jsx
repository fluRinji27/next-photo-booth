import React, {useEffect, useState} from 'react'
import {List} from "react-virtualized";
import OptionsItem from './OptionsItem'

import styles from '/styles/Catalog/CatalogOptions.module.scss'


const Option = ({calcPrice, options, setChecked}) => {
    const [optionsData, setOptionsData] = useState(options)
    const [isLoaded, setLoaded] = useState(false)

    const checkedHandler = item => {
        setOptionsData(() => optionsData.map(el => {
            if (item === el) {
                calcPrice(el.price, !el.isChecked)
                return {...el, isChecked: !el.isChecked}
            }
            return el
        }))
    }

    const Row = ({index, key, style}) => (
        <div
            key={key}
            style={style}
            className={styles.item}
            onClick={() => checkedHandler(optionsData[index])}
        >
            <OptionsItem
                handler={checkedHandler}
                option={optionsData[index]}
            />
        </div>
    )

    useEffect(() => {
        setLoaded(true)
    }, [])

    useEffect(() => {
        if (isLoaded) {
            setChecked(optionsData)
        }
    }, [optionsData])

    return (
        <div className={styles.options}>
            <h6 className={styles.title}>Доп.опции</h6>
            {optionsData &&

            <List
                className={styles.list}
                rowCount={optionsData.length}
                width={300}
                height={180}
                rowHeight={90}
                rowRenderer={Row}
                overscanRowCount={3}
            />}
        </div>
    )
}

export default Option