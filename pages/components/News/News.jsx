import React, {useState} from 'react';
import {InfiniteLoader, List} from 'react-virtualized'
import NewsItem from "./NewsItem";

import 'react-virtualized/styles.css';
import styles from '/styles/News.module.scss'
import LazyLoad from 'react-lazyload'


const News = ({initialNewsData}) => {
        const [count, setCount] = useState(3)

        function isRowLoaded({index}) {
            return !!initialNewsData[index];
        }

        function rowRenderer({key, index, style}) {
            return (
                    <div
                        key={key}
                        style={style}
                        className={styles.item}
                    >
                        <NewsItem data={initialNewsData[index]}/>
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

        return (
            <div className={styles.news}>
                <h4 className='preTitle'>Почему выбирают нас?</h4>
                <h2 className="title title__h2">Новости</h2>
                {initialNewsData && (
                    <>
                        <InfiniteLoader
                            isRowLoaded={isRowLoaded}
                            rowCount={initialNewsData.length}
                            loadMoreRows={loadMore}>
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