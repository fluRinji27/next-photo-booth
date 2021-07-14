import React from 'react'
import DotsRow from './DotsRow'

import style from '/styles/Dots.module.scss'

const Dots = ({rows, collumns})=> {
    return (
        <div className={style.dots}>
            {[...Array(rows).keys()].map((item, i) => <DotsRow key={'r_' + i} collumns={collumns}/>)}
        </div>
    )
}

export default Dots

