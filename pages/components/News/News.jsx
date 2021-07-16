import React, {useState} from 'react';
import {InfiniteLoader, List} from 'react-virtualized'
import NewsItem from "./NewsItem";

import 'react-virtualized/styles.css';
import styles from '/styles/News/News.module.scss'
import LazyLoad from 'react-lazyload'
import Modal from "../Modal/Modal";
import NewsModal from "./NewsModal";


const News = ({initialNewsData}) => {
        const [count, setCount] = useState(3)
        const [isModalActive, setIsModalActive] = useState(false)
        const [currentNews, setCurrentNews] = useState(null)

        function isRowLoaded({index}) {
            return !!initialNewsData[index];
        }

        function rowRenderer({key, index, style}) {
            return (
                <div
                    key={key}
                    style={style}
                    className={styles.item}
                    onClick={() => {
                        console.log('click')
                        setCurrentNews(initialNewsData[index])
                        setIsModalActive(true)
                    }}
                >
                    <NewsItem
                        data={initialNewsData[index]}
                        dateToString={dateToString}
                        setCurrentItem={setCurrentNews}
                        setIsModalActive={setIsModalActive}
                    />
                </div>
            )
        }

        const loadMore = (length) => {
            if (count < length) {
                setCount(prev => prev + 3)

            } else {
                setCount(length)
            }
        }

        const months = [
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря'
        ]
        const dateToString = jsonDate => {
            const date = new Date(JSON.parse(jsonDate))
            return `${date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()}`
        }

        return (
            <div className={styles.news}>
                <h4 className='preTitle'>Почему выбирают нас?</h4>
                <h2 className="title title__h2">Новости</h2>
                {isModalActive &&
                <Modal
                    isActive={isModalActive}
                    modalHandler={setIsModalActive}
                    dataContext="news"
                >
                    {<NewsModal
                        data={currentNews}
                        toDate={dateToString}
                    />}
                </Modal>}

                {initialNewsData && (
                    <>
                        <InfiniteLoader
                            isRowLoaded={isRowLoaded}
                            rowCount={initialNewsData.length}
                            loadMoreRows={loadMore}
                        >
                            {({onRowsRendered, registerChild}) => (
                                <List
                                    ref={registerChild}
                                    height={500 * count}
                                    onRowsRendered={onRowsRendered}
                                    rowCount={count}
                                    rowHeight={500}
                                    rowRenderer={rowRenderer}
                                    width={330}
                                />
                            )}
                        </InfiniteLoader>

                        <button
                            className={styles.button}
                            onClick={() => loadMore(initialNewsData.length)}>
                            Показать еще
                        </button>
                    </>
                )}

            </div>
        );
    }
;

export default News;