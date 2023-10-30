import "../styles/aboutme.scss"
import {motion} from 'framer-motion'

const Aboutme = () => {

    return (
        <motion.div className="about-me section"
        initial={{x: "-100vw"}}
        animate={{x:"0vw"}}
        transition={{
            delay: 1.5
        }}>
            <h3>About Me</h3>
            <p>
                <a>Argentinian (24).</a> part-time developer and student.
            </p>
            <p>Currently learning web development throught <b>The Odin Project</b> and <b>freeCodeCamp</b>.</p>
            <p>Besides coding and learning, I like videogames, boardgames, D&D and football</p>
        </motion.div>
    );
};

export default Aboutme;