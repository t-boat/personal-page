import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";
import MyDropdownMenu from "../section-components/myDropdownMenu";



const SkillTile = () => {

    //text color state of TypeAnimation
    const [textColor, setTextColor] = useState('black')

    //Define the breakpoints
    const isTouch = useMediaQuery({ maxWidth: 850.9 });
    const defaultView = useMediaQuery({ minWidth: 851 });



    return (

        <>

            {defaultView &&

                <div className="skills-bgtext text-family relative h-screen w-full flex items-center justify-center overflow-hidden">

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
                            <Link className="nav-link" to={"/about"}>About</Link>
                            <Link className="text-blue-700">Skills</Link>
                            <Link className="nav-link" to={"/education"}>Education</Link>
                            <Link className="nav-link" to={"/projects"}>Projects</Link>

                        </div>

                    </nav>


                    <div className="flex flex-col">

                        <div className="text-center text-[15pt]" style={{ fontFamily: 'Chakra Petch' }}>I'm proficient in</div>

                        <div className="skills-text-3d text-[7em] text-center" style={{ color: textColor, fontFamily: 'Monoton' }} >

                            <TypeAnimation
                                sequence={[
                                    'Git',
                                    1000,
                                    () => setTextColor('crimson'),
                                    'CSS',
                                    1000,
                                    () => setTextColor('purple'),
                                    'HTML',
                                    1000,
                                    () => setTextColor('chocolate'),
                                    'JavaScript',
                                    1500,
                                    () => setTextColor('teal'),
                                    'React.JS',
                                    1500,
                                    () => setTextColor('maroon'),
                                    'Node.JS',
                                    1500,
                                    () => setTextColor('green'),
                                    'Tailwind CSS',
                                    1500,
                                    () => setTextColor('blue'),
                                    '',
                                ]}
                                speed={1}
                                // speed={{type: 'keyStrokeDelayInMs', value: 250}}
                                deletionSpeed={70}
                                // omitDeletionAnimation={true}
                                repeat={Infinity}
                            />

                        </div>

                    </div>

                </div>
            }



            {isTouch &&

                <div className="skills-bgtext-touch text-family relative h-screen w-full flex items-center justify-center overflow-hidden">

                    <a
                        href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                        className='w-max rounded px-2 py-[0.35rem] border-2 border-blue-700 hover:bg-blue-700 absolute top-4 left-4'
                    >
                        Resume
                    </a>


                    <div className="absolute top-4 right-4">
                        <MyDropdownMenu skillsColor={'blue'} />
                    </div>




                    <div className="flex flex-col">

                        <div className="text-center" style={{ fontFamily: 'Chakra Petch' }}>I'm proficient in</div>

                        <div className="skills-text-3d text-[3em] text-center" style={{ color: textColor, fontFamily: 'Monoton' }} >

                            <TypeAnimation
                                sequence={[
                                    'Git',
                                    1000,
                                    () => setTextColor('crimson'),
                                    'CSS',
                                    1000,
                                    () => setTextColor('purple'),
                                    'HTML',
                                    1000,
                                    () => setTextColor('chocolate'),
                                    'JavaScript',
                                    1500,
                                    () => setTextColor('teal'),
                                    'React.JS',
                                    1500,
                                    () => setTextColor('maroon'),
                                    'Node.JS',
                                    1500,
                                    () => setTextColor('green'),
                                    'Tailwind CSS',
                                    1500,
                                    () => setTextColor('blue'),
                                    '',
                                ]}
                                speed={1}
                                // speed={{type: 'keyStrokeDelayInMs', value: 250}}
                                deletionSpeed={70}
                                // omitDeletionAnimation={true}
                                repeat={Infinity}
                            />

                        </div>

                    </div>

                </div>
            }

        </>
    );
};

export default SkillTile;