import Image from "next/image";

import style from '/styles/VideoPreView.module.scss'

export default function VideoPreView({id, modalHandler}) {

    const src = id
        ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
        : 'https://i.ytimg.com/vi/${id}/mqdefault.jpg'

    return (
        <div className={style.preView} onClick={() => modalHandler(true)}>
            <div className={style.wrapper}>
                <Image
                    src='/img/arrow.svg'
                    width={12}
                    height={17}
                />
            </div>
            <div className={style.img}>
                <Image
                    src={src}
                    blurDataURL={src}
                    alt="Youtube video"
                    placeholder="blur"
                    layout="fill"
                />
            </div>
        </div>
    )
}