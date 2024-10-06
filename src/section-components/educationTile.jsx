import { GraduationCap } from "lucide-react";


const EducationTile = ({schoolName, location, program, qualification, grade, startDate, endDate}) => {

    return (

        <div className="flex gap-x-[1rem] w-max">

            <div className="bg-blue-900 text-orange-400 size-[40px] flex items-center justify-center rounded-[50%] box-border">

                <GraduationCap className="size-[40px]" />

            </div>


            <div className="flex flex-col gap-[0.5rem]">

                <div className="text-blue-900 text-[1em] font-medium font-sans flex flex-wrap">

                    <span>{startDate}</span> - <span>{endDate}</span>

                </div>


                <div className="text-[1.5em] flex flex-wrap items-center gap-2">

                    <span>{qualification}</span> in <span>{program}</span> <span className="text-[12pt] text-blue-900">({grade})</span>

                </div>


                <div className="text-[1.2em] font-semibold flex flex-wrap gap-2 items-center">

                    <span>{schoolName},</span> <span>{location}</span>

                </div>

            </div>

        </div>
    );
};

export default EducationTile;