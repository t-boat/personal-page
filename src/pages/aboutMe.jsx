import { Link } from "react-router-dom";
import theoPic from "../assets/Theo.jpg";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import MyDropdownMenu from "../section-components/myDropdownMenu";



const AboutMe = () => {

    //Define the breakpoints
    const isTouch = useMediaQuery({ maxWidth: 850.9 });
    const defaultView = useMediaQuery({ minWidth: 851 });



    return (

        <>

            {defaultView &&

                <div className="text-family about-bgtext relative h-screen w-full flex items-center justify-center overflow-hidden">

                    {/* <div className="vertical-upright kumar coin">About Me</div> */}

                    <nav className="absolute top-0 w-full flex justify-between items-center py-[1rem] px-[1rem]">

                        <a
                            style={{ fontFamily: 'Allerta Stencil' }}
                            href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                            className='flex gap-2 w-max rounded px-2 py-[0.35rem] font-bold border-2 border-blue-700 hover:bg-blue-700 hover:text-white'
                        >
                            <Download /> Resume
                        </a>


                        <div className="w-[40%] flex justify-between font-semibold" style={{ fontFamily: 'Allerta Stencil' }}>

                            <Link className="nav-link" to={"/"}>Home</Link>
                            <Link className="text-blue-700">About</Link>
                            <Link className="nav-link" to={"/skills"}>Skills</Link>
                            <Link className="nav-link" to={"/education"}>Education</Link>
                            <Link className="nav-link" to={"/projects"}>Projects</Link>

                        </div>

                    </nav>




                    <div className="max-w-[60%] flex flex-col gap-5">

                        <div className="text-justify" style={{ fontFamily: 'Chakra Petch' }}>

                            <img src={theoPic} className="object-contain max-h-[160px] float-left mr-4 mt-[0.3rem]" />

                            My name is <span style={{ color: "slateblue" }}>Theophilus Boateng</span>, a budding Frontend-focused Web Developer who is passionate about building the Frontend of Websites and Web Applications. Though I completed a Bachelor of Science in Computer Science at the University of Ghana in 2021, I started training as Frontend Developer in June 2024. Consequently, I do not have many projects to showcase on my website yet. Presently, I am looking for opportunities to hone my front-end skills, build a solid portfolio and ultimately pave a career path in full-stack web development. I am seeking an opportunity in any organisation where I will have the room to learn, grow, and be the best version of myself.

                        </div>


                        <div className="flex items-center justify-around" style={{ fontFamily: 'Chakra Petch' }}>

                            <p className="flex items-center gap-1"> <Mail className="size-[18px]" /> <span style={{ color: "slateblue" }}>theophilusboateng@gmail.com</span> </p>

                            <p className="flex items-center gap-1"> <Phone className="size-[18px]" /> <span style={{ color: "slateblue" }}>+233548968277</span> </p>

                            <p className="flex items-center gap-[0.2rem]"> <MapPin className="size-[18px]" /> <span style={{ color: "slateblue" }}>Takoradi</span> </p>

                        </div>


                        <div className="flex items-center justify-center gap-x-5">

                            <a href="https://github.com/t-boat" target="_blank"> <Github className="size-[24px] text-[#60A5FA]" /> </a>

                            <a href="https://linkedin.com/in/theophilus-boateng-ba6201315" target="_blank"> <Linkedin className="size-[24px] text-[#60A5FA]" /> </a>

                        </div>

                    </div>

                </div>
            }



            {isTouch &&

                <div className="text-family about-bgtext-touch relative h-screen w-full flex items-center justify-center overflow-hidden">

                    <a
                        href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                        className='w-max rounded px-2 py-[0.35rem] border-2 border-blue-700 hover:bg-blue-700 hover:text-white absolute top-4 left-4'
                    >
                        Resume
                    </a>


                    <div className="absolute top-4 right-4">
                        <MyDropdownMenu aboutColor={'blue'} />
                    </div>

                    

                    <div className="max-w-[70%] max-h-[70%] flex flex-col gap-5">

                        <div className="text-justify text-[0.9em] overflow-auto" style={{ fontFamily: 'Chakra Petch' }}>

                            <img src={theoPic} className="object-contain max-h-[120px] float-left mr-4 mt-[0.3rem]" />

                            My name is <span style={{ color: "slateblue" }}>Theophilus Boateng</span>, a budding Frontend-focused Web Developer who is passionate about building the Frontend of Websites and Web Applications. Though I completed a Bachelor of Science in Computer Science at the University of Ghana in 2021, I started training as Frontend Developer in June 2024. Consequently, I do not have many projects to showcase on my website yet. Presently, I am looking for opportunities to hone my front-end skills, build a solid portfolio and ultimately pave a career path in full-stack web development. I am seeking an opportunity in any organisation where I will have the room to learn, grow, and be the best version of myself.

                        </div>


                        <div className="flex flex-wrap items-center justify-evenly text-[0.9em]" style={{ fontFamily: 'Chakra Petch' }}>

                            <p className="flex items-center gap-1"> <Mail className="size-[18px]" /> <span style={{ color: "slateblue" }}>theophilusboateng@gmail.com</span> </p>

                            <p className="flex items-center gap-1 text-[0.9em]"> <Phone className="size-[18px]" /> <span style={{ color: "slateblue" }}>+233548968277</span> </p>

                            <p className="flex items-center gap-[0.1rem]"> <MapPin className="size-[18px]" /> <span style={{ color: "slateblue" }}>Takoradi</span> </p>

                        </div>


                        <div className="flex items-center justify-center gap-x-5">

                            <a href="https://github.com/t-boat" target="_blank"> <Github className="size-[24px] text-[#60A5FA]" /> </a>

                            <a href="https://linkedin.com/in/theophilus-boateng-ba6201315" target="_blank"> <Linkedin className="size-[24px] text-[#60A5FA]" /> </a>

                        </div>

                    </div>

                </div>
            }

        </>

    );
};

export default AboutMe;