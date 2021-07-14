import style from "/styles/Catalog/CatalogItem.module.scss";

const ChooseTime = ({time, chooseTime}) => {
    return (
        <div className={style.timeChoice}>
            <p className={style.timeChoiceTitle}>Укажите время аренды</p>
            <div className={style.timeChoiceList}>
                <div
                    className={+time === 1 ? style.timeChoiceItemActive + ' ' + style.timeChoiceItem : style.timeChoiceItem}
                    onClick={() => chooseTime(1)}
                >
                    <p>1 час</p>
                </div>
                <div
                    className={+time === 2 ? style.timeChoiceItemActive + ' ' + style.timeChoiceItem : style.timeChoiceItem}
                    onClick={() => chooseTime(2)}
                >
                    <p>2 часа</p>
                </div>
                <div
                    className={+time === 3 ? style.timeChoiceItemActive + ' ' + style.timeChoiceItem : style.timeChoiceItem}
                    onClick={() => chooseTime(3)}
                >
                    <p>3 часа</p>
                </div>
                <div
                    className={+time === 5 ? style.timeChoiceItemActive + ' ' + style.timeChoiceItem : style.timeChoiceItem}
                    onClick={() => chooseTime(5)}
                >
                    <p>5 часов</p>
                </div>
                <div
                    className={+time === 48 ? style.timeChoiceItemActive + ' ' + style.timeChoiceItem : style.timeChoiceItem}
                    onClick={() => chooseTime(48)}
                >
                    <p>Выставка 2 дня</p>
                </div>
                <div
                    className={+time === 72 ? style.timeChoiceItemActive + ' ' + style.timeChoiceItem : style.timeChoiceItem}
                    onClick={() => chooseTime(72)}
                >
                    <p>Выставка 3 дня</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseTime;