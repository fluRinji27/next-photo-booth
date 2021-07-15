import React, {useEffect, useState} from 'react'
import Sort from '../Sort/Sort'
import CatalogItem from './CatalogItem/CatalogItem'

import style from '/styles/Catalog/Catalog.module.scss'
import {InfiniteLoader, List} from "react-virtualized";

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
    const rowRender = ({index}) => {
        return (<CatalogItem key={data[index].id} setNewData={setNewData} data={data[index]}/>)

    }

    function isRowLoaded({index}) {
        return !!data[index];
    }

    const loadMoreRows = ({startIndex, stopIndex}) => {
        return new Promise();
    }

    return (
        <div className={style.catalog}>
            <h2 className="title title__h2 ">Фотобудки</h2>
            <Sort sortHandler={sortData}/>

            {data &&
            <InfiniteLoader
                isRowLoaded={isRowLoaded}
                rowCount={data.length}
                loadMoreRows={loadMoreRows}>
                {({onRowsRendered, registerChild}) => (
                    <List
                        ref={registerChild}
                        height={780 * data.length}
                        onRowsRendered={onRowsRendered}
                        rowCount={data.length}
                        rowHeight={780}
                        rowRenderer={rowRender}
                        width={330}
                    />
                )}
            </InfiniteLoader>
            }
        </div>
    )
}

export default Catalog
