import {YMaps, Map, ZoomControl} from 'react-yandex-maps'

import style from '/styles/Map.module.scss'

const FooterMap = () => {
    return (
        <div className={style.foo}>
            <YMaps className={style.map__wrapper}>
                <Map className={style.map} width={'100%'} defaultState={{center: [55.673781, 37.732375], zoom: 15}}>
                    <ZoomControl/>
                </Map>
            </YMaps>
        </div>
    )
}

export default FooterMap
