import EducationTile from "./educationTile";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";


const Education = () => {

    return (

        <div className="flex justify-center items-center w-full h-screen">

            <nav className="absolute top-0 w-full flex justify-between items-center py-[2.5rem] px-[5rem]">

                <a
                    href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                    className='flex gap-2 w-max rounded px-3 py-[0.35rem] text-[#04131F] font-bold border-2 border-[#04131F]'
                    style={{ fontFamily: 'Allerta Stencil' }}
                > <Download /> Resume </a>

                <div className="w-[40%] flex justify-between font-semibold text-[#04131F]" style={{ fontFamily: 'Allerta Stencil' }}>

                    <Link className="nav-link" to={"/home"}>Home</Link>
                    <Link className="nav-link" to={"/about"}>About</Link>
                    <Link className="nav-link" to={"/skills"}>Skills</Link>
                    <Link className="text-blue-700">Education</Link>
                    <Link className="nav-link" to={"/projects"}>Projects</Link>

                </div>

            </nav>


            <div className="">

                <EducationTile
                    schoolName={'University of Ghana'}
                    location={'Legon - Accra, Ghana'}
                    program={'Computer Science'}
                    qualification={'Bachelor of Science'}
                    grade={'Second Class Honors'}
                    startDate={'September, 2017'}
                    endDate={'September, 2021'}
                />

            </div>

        </div>
    );
};

export default Education;