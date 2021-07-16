import React, {useEffect, useState} from 'react'
import {InfiniteLoader, List} from "react-virtualized";
import LazyLoad from 'react-lazyload'

import Sort from '../Sort/Sort'
import CatalogItem from './CatalogItem'
import Modal from "../Modal/Modal";
import CatalogSubmitModal from "./CatalogSubmitModal";

import style from '/styles/Catalog/Catalog.module.scss'

const Catalog = ({initialData}) => {
    const [data, setData] = useState([])
    const [isModalActive, setIsModalActive] = useState(false)
    const [itemInModal, setItemInModal] = useState({})
////// INFINITY LOADER
    const rowRender = ({index}) => {
        return (<CatalogItem
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
            key={data[index].id}
            setNewData={setNewData}
            data={data[index]}
            setItemInModal={setItemInModal}
        />)
    }

    function isRowLoaded({index}) {
        return !!data[index];
    }

    const loadMoreRows = ({startIndex, stopIndex}) => {
        return new Promise();
    }
////// INFINITY LOADER

    const setNewData = item => setData(data.map(el => el.id === item.id ? item : el))

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
    }, [initialData])


    return (
        <LazyLoad>
            <div className={style.catalog}>
                <h2 className="title title__h2 ">Фотобудки</h2>
                <Sort sortHandler={sortData}/>
                {isModalActive &&
                <Modal
                    isActive={isModalActive}
                    modalHandler={setIsModalActive}
                    dataContext="submit"
                >
                    <CatalogSubmitModal data={itemInModal} closeModal={setIsModalActive}/>
                </Modal>}
                {data &&
                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    rowCount={data.length}
                    loadMoreRows={loadMoreRows}
                >
                    {({onRowsRendered, registerChild}) => (
                        <List
                            ref={registerChild}
                            height={760 * data.length}
                            onRowsRendered={onRowsRendered}
                            rowCount={data.length}
                            rowHeight={760}
                            rowRenderer={rowRender}
                            width={330}
                        />
                    )}
                </InfiniteLoader>
                }
            </div>
        </LazyLoad>
    )
}

export default Catalog
