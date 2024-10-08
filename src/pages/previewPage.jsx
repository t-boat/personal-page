import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MyDropdownMenu from "../section-components/myDropdownMenu";



const PreviewPage = () => {

    //Define the breakpoints
    const isTouch = useMediaQuery({ maxWidth: 850.9 });
    const defaultView = useMediaQuery({ minWidth: 851 });


    return (

        <>

            {defaultView &&

                <div className="bgtext text-family relative h-screen w-full flex items-center justify-center overflow-hidden">

                    <nav className="absolute top-0 w-full flex justify-between items-center py-[1rem] px-[1rem]">

                        <a
                            style={{ fontFamily: 'Allerta Stencil' }}
                            href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                            className='flex gap-2 w-max rounded px-2 py-[0.35rem] font-bold border-2 border-blue-700 hover:bg-blue-700 hover:text-white'
                        >
                            <Download /> Resume
                        </a>

                        <div className="w-[40%] flex justify-between font-semibold" style={{ fontFamily: 'Allerta Stencil' }}>

                            <Link className="text-blue-700">Home</Link>
                            <Link className="nav-link" to={"/about"} >About</Link>
                            <Link className="nav-link" to={"/skills"}>Skills</Link>
                            <Link className="nav-link" to={"/education"}>Education</Link>
                            <Link className="nav-link" to={"/projects"}>Projects</Link>

                        </div>

                    </nav>
                    


                    <div className="">

                        <div className="text-left text-[1.2em]">I'm</div>

                        <div className="text-3d sea-saw text-[4.5em] pb-[1.5rem] object-contain flex" style={{ fontFamily: 'Ubuntu Mono' }}>Theophilus Boateng</div>

                        <div className="text-right text-[1.2em]">A Junior Frontend Developer</div>

                    </div>

                </div>
            }



            {isTouch &&

                <div className="bgtext-touch text-family relative h-screen w-full flex items-center justify-center overflow-hidden">

                    <a
                        href="/files/TheoBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer" download
                        className='w-max rounded px-2 py-[0.35rem] border-2 border-blue-700 hover:bg-blue-700 hover:text-white absolute top-4 left-4'
                    >
                        Resume
                    </a>


                    <div className="absolute top-4 right-4">
                        <MyDropdownMenu homeColor={'blue'} />
                    </div>



                    <div className="flex flex-col px-4">

                        <div className="text-left" >I'm</div>

                        <div className="text-3d sea-saw text-[3em] text-center pb-[1.5rem]" style={{ fontFamily: 'Ubuntu Mono' }}>Theophilus Boateng</div>

                        <div className="text-right">A Junior Frontend Developer</div>

                    </div>

                </div>
            }

        </>
    );
};

export default PreviewPage;