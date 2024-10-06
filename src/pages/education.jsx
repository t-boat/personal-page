import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MyDropdownMenu from "../section-components/myDropdownMenu";
import EducationTile from "../section-components/educationTile";


const Education = () => {

    //Define the breakpoints
    const isTouch = useMediaQuery({ maxWidth: 850.9 });
    const defaultView = useMediaQuery({ minWidth: 851 });



    return (

        <>

            {defaultView &&

                <div className="flex justify-center items-center w-full h-screen">

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
            }



            {isTouch &&

                <div className="flex justify-center items-center w-full h-screen">

                    <a
                        href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                        className='w-max rounded px-2 py-[0.35rem] border-2 border-blue-700 hover:bg-blue-700 hover:text-white absolute top-4 left-4'
                    >
                        Resume
                    </a>


                    <div className="absolute top-4 right-4">
                        <MyDropdownMenu eduColor={'blue'} />
                    </div>


                    <div className="max-w-[90%] flex">

                        <EducationTile
                            schoolName={'University of Ghana'}
                            location={'Legon - Accra, Ghana'}
                            program={'Computer Science'}
                            qualification={'Bachelor of Science'}
                            grade={'Second Class Honors'}
                            startDate={'Sep, 2017'}
                            endDate={'Sep, 2021'}
                        />

                    </div>

                </div>
            }

        </>
    );
};

export default Education;