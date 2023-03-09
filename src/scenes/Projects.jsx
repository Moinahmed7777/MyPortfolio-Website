
import {motion} from "framer-motion";
import LineGradient from "../components/LineGradient";
import project_1 from "../assets/project-1.jpeg"
import project_2 from "../assets/project-2.jpeg"
import project_3 from "../assets/project-3.jpeg"
import project_4 from "../assets/project-4.jpeg"
import project_5 from "../assets/project-5.jpeg"
import project_6 from "../assets/project-6.jpeg"
import project_7 from "../assets/project-7.jpeg"

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2,}
    },
};
const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1},
};
const Project = ({title,imgSrc,subtitle,projectLink}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                            bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className="relative">
            <a 
                
                href ={projectLink}
                target = "_blank"
                rel = "noreferrer" 
            >
                <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <p className="mt-7">
                        {subtitle}
                    </p>
                </div>
                <img src={imgSrc} alt={projectTitle} />
            </a>
            
        </motion.div>
    )
};




const Projects = () => {

    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
            className="md:w-2/5 mx-auto text-center"
            initial ="hidden"
            whileInView="visible"
            viewport={{once:true , amount: 0.5 }}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, y: -50},
                visible: {opacity: 1, y: 0}
                }}
            >   
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className=" flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                
                <p className="mt-10 mb-10">
                    From making Pac-Man smarter to making sure you don't burn your calories, I've got it all covered. A mobile app developer by day, and a problem solver by night, I can build you an Airbnb clone, chat app, facial recognition app, or anything else your heart desires. I'm the programmer you want on your team, so let's make some magic happen!
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                className="sm:grid sm:grid-cols-3"
                variants={container}
                initial ="hidden"
                whileInView="visible"
                viewport={{once:true , amount: 0.2 }}
                >
                    <div className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        Check My Github
                    </div>
                    <Project title = "Sciencella Dietitian App" imgSrc={project_1} subtitle="Nutrition and Health Assessment of Diet Through Photo Recognition" projectLink="https://github.com/Moinahmed7777/Sciencella-Dietician-App-Backend"/>
                    <Project title = "Face ID" imgSrc={project_2} subtitle="Facial Recognition and Verification application" projectLink="https://github.com/Moinahmed7777/Facial-Recognition-App"/>
                    <Project title = "AirBnB-Clone" imgSrc={project_3} subtitle="A Fullstack Booking web application using MERN" projectLink="https://github.com/Moinahmed7777/AirBnB-Clone"/>
                    <Project title = "MyChat App" imgSrc={project_4} subtitle="Realtime mobile Chat Application" projectLink="https://github.com/Moinahmed7777/MyChat-app"/>
                    <Project title = "Pac-Man Agent" imgSrc={project_5} subtitle="Ai agent for the pac-man game" projectLink="https://github.com/Moinahmed7777/Pac_man_Agent"/>
                    <Project title = "8-Puzzle" imgSrc={project_6} subtitle="Ai agent for solving 8-puzzle" projectLink="https://github.com/Moinahmed7777/8_puzzle"/>
                    <Project title = "Maze Solver" imgSrc={project_7} subtitle="Maze solver using Ai search algorithms" projectLink="https://github.com/Moinahmed7777/Maze-solver"/>
                    <div className="flex justify-center text-center items-center p-10 bg-blue
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        For More
                    </div>
                </motion.div> 

            </div>
        </section>
    );
};

export default Projects;