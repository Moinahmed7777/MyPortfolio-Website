import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import skillsImage from "../assets/skills-image.png"
import { frontend,backend,other } from "../components/data";



const MySkills = () =>{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                className="md:w-1/3"
                initial ="hidden"
                whileInView="visible"
                viewport={{once:true , amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        I may have a soft spot for the back-end, but don't let that fool you - I'm no stranger to the front-end game either.
                    </p>
                </motion.div>

                <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        > 
                            <img alt="skills" className="z-10" src={skillsImage}/>
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src={skillsImage}/>
                    )}
                </div>
            </div>
            

            {/* SKILLS backend */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <div className="container">
                        <div className="mt-3 mb-5">
                            <p className="font-playfair font-semibold text-3xl mb-5">
                                Back <span className="text-red">end</span>
                            </p>
                            <LineGradient width="w-8/16" />
                        </div>
                    <div className="grid gap-2 grid-cols-8 md:grid-flow-row">
                        {backend.map((skill,index) =>{
                            return(
                                <motion.div
                                className="w-1/2"
                                initial ="hidden"
                                whileInView="visible"
                                key={index}
                                viewport={{once:true , amount: 0.5 }}
                                transition={{delay: 0.8,duration: 0.5}}
                                variants={{
                                    hidden: {opacity: 0, x: 300},
                                    visible: {opacity: 1, x: 0}
                                    }}
                                >   
                                    <img src= {skill.image} alt=''/>    
                                </motion.div>
                            );
                        })}
                    </div>
                </div>    
            </div>
            {/* SKILLS frontend*/}
            <div className="md:flex md:justify-between mt-10 gap-32">
                {/* EXPERIENCE */}
                <div className="container">
                        <div className="mt-3 mb-5">
                            <p className="font-playfair font-semibold text-3xl mb-5">
                                Front <span className="text-red">end</span>
                            </p>
                            <LineGradient width="w-2/4" />
                        </div>
                    <div className="grid gap-2 grid-cols-8 md:grid-flow-row">
                        {frontend.map((skill,index) =>{
                            return(
                                <motion.div
                                className="w-1/2"
                                initial ="hidden"
                                whileInView="visible"
                                key={index}
                                viewport={{once:true , amount: 0.5 }}
                                transition={{delay: 0.5,duration: 0.5}}
                                variants={{
                                    hidden: {opacity: 0, x: -30},
                                    visible: {opacity: 1, x: 0}
                                    }}
                                >   
                                
                                    <img src= {skill.image} alt=''/>    
                                </motion.div>
                            );
                        })}
                    </div>
                </div>    
            </div>
            {/* SKILLS other*/}
            <div className="md:flex md:justify-between mt-10 gap-32">
                {/* EXPERIENCE */}
                <div className="container">
                        <div className="mt-3 mb-5">
                            <p className="font-playfair font-semibold text-3xl mb-5">
                                Other <span className="text-red">skills</span>
                            </p>
                            <LineGradient width="w-1/4" />
                        </div>
                    <div className="grid gap-2 grid-cols-8 md:grid-flow-row">
                        {other.map((skill,index) =>{
                            return(
                                <motion.div
                                className="w-1/2"
                                initial ="hidden"
                                whileInView="visible"
                                key={index}
                                viewport={{once:true , amount: 0.5 }}
                                transition={{duration: 0.5}}
                                variants={{
                                    hidden: {opacity: 0, y: 50},
                                    visible: {opacity: 1, y: 0}
                                    }}
                                >   
                                    <img src= {skill.image} alt=''/>    
                                </motion.div>
                            );
                        })}
                    </div>
                </div>    
            </div>

        </section>
    )
}

export default MySkills;