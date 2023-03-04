import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import facebook from "../assets/facebook.png"

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a 
                className="hover:opacity-50 transition duration-500"
                href ="https://www.linkedin.com/in/moinahmed7777/"
                target = "_blank"
                rel = "noreferrer" 
            >
                <img alt="linkedin-link" src={linkedin}></img>
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href ="https://github.com/Moinahmed7777"
                target = "_blank"
                rel = "noreferrer" 
            >
                <img alt="github-link" src={github} width="30"></img>
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href ="https://www.facebook.com/moin.ahmed.73/"
                target = "_blank"
                rel = "noreferrer" 
            >
                <img alt="facebook-link" src={facebook}></img>
            </a>

        </div>
    )
}

export default SocialMediaIcons;