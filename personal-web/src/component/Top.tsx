import '../styles/top.scss'
import {motion} from 'framer-motion'

function Top() {
  return (
    <div className='Top section'>
        <motion.h1 className='firstName'
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{
            duration: 0.5,
            ease: 'easeOutCubic',
            type: 'spring'
          }}>
          Joaquín
        </motion.h1>
        <motion.h2 className="lastName"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{
            duration: 0.5,
            ease: 'easeOutCubic',
            type: 'spring',
            delay: 0.5
          }}>
          Arruiz
        </motion.h2>
        <motion.div className='titleContainer'
          initial={{x: "-100vw"}}
          animate={{x:"0vw"}}
          transition={{
            delay: 1
          }}>
            <div className='title'>Web <a>Developer</a></div>
        </motion.div>
    </div>
  )
}

export default Top
