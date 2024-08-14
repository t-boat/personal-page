import { Link } from "react-router-dom";
import theoPic from "../assets/Theo.jpg";
import { Download, Mail, MapPin, MapPinned, Phone } from "lucide-react";
import { Github, Linkedin, X } from "lucide-react";



const AboutMe = () => {

    return (

        <div className="text-family about-bgtext relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* <div className="vertical-upright kumar coin">About Me</div> */}

            <nav className="absolute top-0 w-full flex justify-between items-center py-[2.5rem] px-[5rem]">

                <a href="" download className='flex gap-2 w-max rounded px-3 py-[0.35rem] text-[#04131F] font-bold border-2 border-[#04131F]' style={{fontFamily: 'Allerta Stencil'}}> <Download /> Resume </a>

                <div className="w-[40%] flex justify-between font-semibold text-[#04131F]" style={{fontFamily: 'Allerta Stencil'}}>

                    <Link className="nav-link" to={"/home"}>Home</Link>
                    <Link className="text-blue-700">About</Link>
                    <Link className="nav-link" to={"/skills"}>Skills</Link>
                    <Link className="nav-link" to={"/education"}>Education</Link>
                    <Link className="nav-link" to={"/projects"}>Projects</Link>

                </div>

            </nav>


            <div className="flex w-[65%] pt-[3rem]">

                <div className="flex-[72%] pr-[3rem] flex flex-col justify-between" style={{fontFamily: 'Chakra Petch'}}>

                    <p className="text-justify">My name is <span style={{ color: "slateblue" }}>Theophilus Boateng</span>, a budding Frontend-focused Web Developer who is passionate about building the Frontend of Websites and Web Applications. Though I completed a Bachelor of Science in Computer Science at the University of Ghana in 2021, I started training as Frontend Developer in June 2024. Consequently, I do not have many projects to showcase on my website yet. Presently, I am looking for opportunities to hone my front-end skills, build a solid portfolio and ultimately pave a career path in full-stack web development. I am seeking an opportunity in any organisation where I will have the room to learn, grow, and be the best version of myself.</p>

                    <div className="flex items-center justify-between">

                        <p className="flex items-center gap-1"> <Mail className="size-[18px]" /> <span style={{ color: "slateblue" }}>theophilusboateng@gmail.com</span> </p>

                        <p className="flex items-center gap-1"> <Phone className="size-[18px]" /> <span style={{ color: "slateblue" }}>+233548968277</span> </p>

                        <p className="flex items-center gap-[0.2rem]"> <MapPin className="size-[18px]" /> <span style={{ color: "slateblue" }}>Takoradi</span> </p>

                    </div>

                    <div className="flex items-center justify-center gap-x-4">

                        <a href="https://github.com/t-boat" target="_blank"> <Github className="size-[24px] text-[#60A5FA]" /> </a>

                        <a href="https://linkedin.com/in/theophilus-boateng-ba6201315" target="_blank"> <Linkedin className="size-[24px] text-[#60A5FA]" /> </a>

                        {/* <a href="https://x.com/kwadwo_boat?t=miVos_qdYIde1i1Bz7kUXw&s=08" target="_blank"> <img src={xLogo} alt="X platform" className="size-[20px] text-[#60A5FA]" /> </a> */}

                    </div>

                </div>


                <div className="flex-[28%]">
                    <img src={theoPic} className="object-contain h-[350px]" />
                </div>

            </div>

        </div>

    );
};

export default AboutMe;