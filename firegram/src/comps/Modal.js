import React from "react";
import {motion} from 'framer-motion/dist/framer-motion';

const Modal = ({selecetdImage, setSelectedImage}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImage(null);
        }

    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={selecetdImage} alt="enlarged pic"
                initial={{y: '-100vh'}}
                animate={{y: 0}}
            />
        </motion.div>
    )
}

export default Modal;