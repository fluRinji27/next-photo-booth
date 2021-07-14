import Image from 'next/image'

import style from '../../../styles/advantages.module.scss'

export default function Advantages() {
    return (
        <div className={'wrapper ' + style.advantages}>
            <h1 className={style.title}>Фото на <span>праздник</span></h1>
            <p className={style.subtitle}>
                Lorem ipsum dolor sit amet,
                consectetur <span>adipiscing elit</span>,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={style.row}>
                <div className={style.item}>
                    <div className={style.icon}>
                        <Image
                            src='/img/infinite.svg'
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p className={style.text}>
                        Безлимитная печать фото
                    </p>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <Image
                            src='/img/mustachesMask.svg'
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p className={style.text}>
                        Фотореквизит <br/>
                        в наличии
                    </p>
                </div>
            </div>

            <div className={style.row}>
                <div className={style.item}>
                    <div className={style.icon}>
                        <Image
                            src='/img/photoCards.svg'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <p className={style.text}>
                        Фотоотчет в электронном виде
                    </p>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <Image
                            src='/img/price.svg'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <p className={style.text}>
                        Цены <br/>
                        ниже рынка
                    </p>
                </div>
            </div>

        </div>
    )
}