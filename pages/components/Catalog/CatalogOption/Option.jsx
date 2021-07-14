import React, {useEffect, useState} from 'react'
import {List} from "react-virtualized";
import OptionsItem from './OptionsItem'

import style from '/styles/Catalog/CatalogOptions.module.scss'


const Option = ({options, setChecked}) => {
    const [optionsData, setOptionsData] = useState(options)
    const [isLoaded, setLoaded] = useState(false)

    const checkedHandler = item => {
        setOptionsData(() => optionsData.map(el => {
            if (item === el) {
                return {...el, isChecked: !el.isChecked}
            }
            return el
        }))
    }

    const Row = ({index, isScrolling, key, style}) => (
        <OptionsItem
            key={key} styles={style}
            handler={checkedHandler}
            option={optionsData[index]}
        />
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
        <div className={style.options}>
            <h6 className={style.options__title}>Доп.опции</h6>
            {optionsData &&

            <List
                className={style.options__list}
                rowCount={20}
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