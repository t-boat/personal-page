import { GraduationCap } from "lucide-react";


const EducationTile = ({schoolName, location, program, qualification, grade, startDate, endDate}) => {

    return (
        <div className="flex gap-x-[1.5rem] w-max">

            <div className="bg-[#04131F] text-[#60A5FA] size-[40px] flex items-center justify-center rounded-[50%]">

                <GraduationCap className="size-[30px]" />

            </div>

            <div className="flex flex-col gap-[0.5rem]">

                <div className="text-blue-900 text-[11pt] font-medium font-sans">

                    <span>{startDate}</span> - <span>{endDate}</span>

                </div>

                <div className="text-[18pt] flex items-center gap-2">

                    <span>{qualification}</span> in <span>{program}</span> <span className="text-[12pt] text-blue-900">({grade})</span>

                </div>

                <div className="text-[15pt] font-medium flex gap-2 items-center">

                    <span>{schoolName},</span> <span>{location}</span>

                </div>

            </div>

        </div>
    );
};

export default EducationTile;