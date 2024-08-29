import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";



const PreviewPage = () => {

    return (

        <div className="bgtext text-family relative h-screen w-full flex items-center justify-center overflow-hidden">

            <nav className="absolute top-0 w-full flex justify-between items-center py-[2.5rem] px-[5rem]">

                <a
                    download
                    href="/files/TheophilusBoatengCV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"
                    className='flex gap-2 w-max rounded px-3 py-[0.35rem] text-[#04131F] font-bold border-2 border-[#04131F]'
                    style={{ fontFamily: 'Allerta Stencil' }}>
                    <Download /> Resume
                </a>

                <div className="w-[40%] flex justify-between font-semibold text-[#04131F]" style={{ fontFamily: 'Allerta Stencil' }}>

                    <Link className="text-blue-700">Home</Link>
                    <Link className="nav-link" to={"/about"}>About</Link>
                    <Link className="nav-link" to={"/skills"}>Skills</Link>
                    <Link className="nav-link" to={"/education"}>Education</Link>
                    <Link className="nav-link" to={"/projects"}>Projects</Link>

                </div>

            </nav>


            <div className="absolute">

                <div className="text-left" >I'm</div>

                <div className="text-3d sea-saw text-[4.5em] pb-[1.5rem]" style={{ fontFamily: 'Ubuntu Mono' }}>Theophilus Boateng</div>

                {/* <div class="c-rainbow">
                    <span class="c-rainbow__layer c-rainbow__layer--white">Theophilus Boateng</span>
                    <span class="c-rainbow__layer c-rainbow__layer--orange">Theophilus Boateng</span>
                    <span class="c-rainbow__layer c-rainbow__layer--red">Theophilus Boateng</span>
                    <span class="c-rainbow__layer c-rainbow__layer--violet">Theophilus Boateng</span>
                    <span class="c-rainbow__layer c-rainbow__layer--blue">Theophilus Boateng</span>
                    <span class="c-rainbow__layer c-rainbow__layer--green">Theophilus Boateng</span>
                    <span class="c-rainbow__layer c-rainbow__layer--yellow">Theophilus Boateng</span>
                </div> */}

                <div className="text-right">A Junior Frontend Developer</div>

            </div>

        </div>
    );
};

export default PreviewPage;