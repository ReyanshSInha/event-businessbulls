import SocietyCard from "./SocietyCard"
import arrow from "../Assets/Vector.svg"
import classes from "./HeroSection.module.css"

const Societies = () => {
    return <div className="h-[70vh] flex justify-center bg-[#0f0f0f] w-full">
        <div className="w-[70%] relative flex flex-col gap-[20px] rounded-2xl h-[28.2rem]">
            <div className="text-white font-[700] text-[1.5rem]">
                   Societies
            </div>
            <div className="w-[100%] flex justify-between h-[100%]">
                <SocietyCard active={true}/>
                <SocietyCard/>
                <SocietyCard/>
                <SocietyCard active={true}/>
            </div>
            <img src={arrow} className={`absolute top-[210px] left-[-38px]`} />
            <img src={arrow} className={`absolute top-[210px] rotate-180 right-[-38px]`} />

        </div>
    </div>
}

export default Societies