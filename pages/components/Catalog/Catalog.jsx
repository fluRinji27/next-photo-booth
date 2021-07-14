import React, {useEffect, useState} from 'react'
import Sort from '../Sort/Sort'
import CatalogItem from './CatalogItem/CatalogItem'

import style from '/styles/Catalog/Catalog.module.scss'
import {InfiniteLoader, List} from "react-virtualized";

const Catalog = ({initialData}) => {

    const [data, setData] = useState([])

    var [loadedRowsMap, loadingRowCount] = [{}, 0]

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
        console.log(startIndex, stopIndex)
        // const {loadedRowsMap, loadingRowCount} = this.state;
        const increment = stopIndex - startIndex + 1;

        for (var i = startIndex; i <= stopIndex; i++) {
            loadedRowsMap[i] = STATUS_LOADING;
        }

        this.setState({
            loadingRowCount: loadingRowCount + increment,
        });

        const timeoutId = setTimeout(() => {
            // const {loadedRowCount, loadingRowCount} = this.state;

            delete this._timeoutIdMap[timeoutId];

            for (var i = startIndex; i <= stopIndex; i++) {
                loadedRowsMap[i] = STATUS_LOADED;
            }

            this.setState({
                loadingRowCount: loadingRowCount - increment,
                loadedRowCount: loadedRowCount + increment,
            });

            promiseResolver();
        }, 1000 + Math.round(Math.random() * 2000));

        this._timeoutIdMap[timeoutId] = true;

        let promiseResolver;

        return new Promise(resolve => {
            promiseResolver = resolve;
        });
    }

    return (
        <div className={'wrapper ' + style.catalog}>
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
                        height={765 * data.length}
                        onRowsRendered={onRowsRendered}
                        rowCount={data.length}
                        rowHeight={765}
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
