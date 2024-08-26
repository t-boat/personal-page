import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";



const SkillTile = () => {

    const [textColor, setTextColor] = useState('black')


    return (

        <div className="skills-bgtext text-family relative h-screen w-full flex items-center justify-center overflow-hidden">

            <nav className="absolute top-0 w-full flex justify-between items-center py-[2.5rem] px-[5rem]">

                <a
                    download
                    href="/src/assets/files/Theophilus-Boateng-CV.pdf"
                    className='flex gap-2 w-max rounded px-3 py-[0.35rem] text-[#04131F] font-bold border-2 border-[#04131F]'
                    style={{ fontFamily: 'Allerta Stencil' }}>
                    <Download /> Resume
                </a>

                <div className="w-[40%] flex justify-between font-semibold text-[#04131F]" style={{ fontFamily: 'Allerta Stencil' }}>

                    <Link className="nav-link" to={"/home"}>Home</Link>
                    <Link className="nav-link" to={"/about"}>About</Link>
                    <Link className="text-blue-700">Skills</Link>
                    <Link className="nav-link" to={"/education"}>Education</Link>
                    <Link className="nav-link" to={"/projects"}>Projects</Link>

                </div>

            </nav>


            <div className="">

                <div className="text-center text-[15pt]" style={{ fontFamily: 'Chakra Petch' }}>I'm proficient in...</div>

                <div className="skills-text-3d text-[7em]" style={{ color: textColor, fontFamily: 'Monoton' }} >

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
    );
};

export default SkillTile;