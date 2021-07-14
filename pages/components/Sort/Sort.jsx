import style from '/styles/Sort.module.scss'

const Sort = () => {
    return (
        <div className={'wrapper ' + style.sort}>
            <p className={style.sort__label}>Сортировка:</p>
            <select className={style.sort__list}>
                <option className={style.sort__item} value="def">
                    По умолчанию
                </option>
                <option className={style.sort__item} value="max">
                    По возрастанию
                </option>
                <option className={style.sort__item} value="min">
                    По убыванию
                </option>
            </select>
            <div className="arrow"/>
        </div>
    )
}

export default Sort