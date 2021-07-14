import React from 'react'
import DotsItem from './DotsItem'
import style from '/styles/Dots.module.scss'

const DotsRow = ({ collumns }) => {
  return (
    <div className={style.dots__row}>
      {[...Array(collumns).keys()].
        map((item, i) => <DotsItem key={'c_' + i}/>)}
    </div>
  )
}

export default DotsRow