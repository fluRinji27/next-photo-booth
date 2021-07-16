import Dots from '../DotsField/Dots'
import VideoPreView from '../VideoPreView/VideoPreView'
import Modal from '../Modal/Modal'

import style from '/styles/Video.module.scss'
import {useState} from "react";

const Video = ({id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className={style.video}>
            <div className={style.wrapper}>
                <Dots rows={5} collumns={9}/>
                <VideoPreView id={id} modalHandler={setIsModalOpen}/>
                <Modal
                    isActive={isModalOpen}
                    modalHandler={setIsModalOpen}
                    dataContext="video"
                >
                    <div className={style.modal}>
                        <iframe
                            className={style.content}
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    </div>
                </Modal>
                <div className={style.circle}/>
            </div>
        </div>
    )
}
export default Video