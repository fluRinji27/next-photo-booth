import React from "react";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    DotGroup, Image as CarouselImage,
    Slide,
    Slider,
} from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'
import style from '/styles/Carousel.module.scss'

const Carousel = ({height = 100, width = 100, data}) => {
    return (
        <CarouselProvider
            className={style.slider}
            totalSlides={data ? data.length : 5}
            naturalSlideWidth={width}
            naturalSlideHeight={height}
        >
            <Slider className={style.wrapper}>
                {data && data.map((elem, i) => (
                    <Slide
                        className={style.item}
                        key={i}
                        index={i}
                    >
                        <CarouselImage
                            key={elem + i}
                            src={`/img/catalog/${elem}.png`}
                            alt="Фотбудка"
                            width={100}
                            height={200}
                        />
                    </Slide>))
                }
            </Slider>
            <ButtonBack className={style.btn + ' ' + style.back}>
                <div className="arrow arrow_left "/>
            </ButtonBack>
            <ButtonNext className={style.btn + ' ' + style.next}>
                <div className="arrow arrow_right"/>
            </ButtonNext>
            <DotGroup/>
        </CarouselProvider>
    )
}

export default React.memo(Carousel)