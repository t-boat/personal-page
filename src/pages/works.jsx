import { useMediaQuery } from "react-responsive";


const Works = () => {

    //Define the breakpoints
    const isTouch = useMediaQuery({ maxWidth: 850.9 });
    const defaultView = useMediaQuery({ minWidth: 851 });


    return (

        <>

            {defaultView &&

                <div className="under-construction w-full h-screen">

                    <div className="neons flex flex-col">

                        <p className="text-[3.75rem]">Page under construction</p>

                        <p className="text-[32px]">kindly check back later</p>

                    </div>

                </div>
            }


            {isTouch &&

                <div className="under-construction w-full h-screen">

                    <div className="neons flex flex-col">

                        <p className="text-[2.25rem]">Page under construction</p>

                        <p className="text-[18px]">kindly check back later</p>

                    </div>

                </div>
            }

        </>

    );
};

export default Works;