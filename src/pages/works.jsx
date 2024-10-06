import { useMediaQuery } from "react-responsive";


const Works = () => {

    //Define the breakpoints
    const isTouch = useMediaQuery({ maxWidth: 850.9 });
    const defaultView = useMediaQuery({ minWidth: 851 });


    return (

        <>

            {defaultView &&

                <div className="under-construction w-full h-screen">

                    <div className="text-[5em] neons flex flex-col">

                        <p>Page under construction</p>

                        <p className="text-[3rem]">kindly check back later</p>

                    </div>

                </div>
            }


            {isTouch &&

                <div className="under-construction w-full h-screen">

                    <div className="text-[3.5em] neons flex flex-col">

                        <p>Page under construction</p>

                        <p className="text-[1.8rem]">kindly check back later</p>

                    </div>

                </div>
            }

        </>

    );
};

export default Works;