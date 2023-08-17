import Instagram from "../Assets/Group.png"
import classes from "./HeroSection.module.css"

const SocietyCard = (props) => {
    return <div className={` ${props.active && 'border-[#DD0310]'}  w-[222px] relative border-opacity-80 rounded-2xl h-[343px] border-[0.000001px]`}>
        <div className="w-full h-[60%]  flex justify-center items-center">
            <img src={Instagram}/>
        </div>
        <div className="font-[500] text-[1,5rem] text-white absolute left-[14px]">
            Business Bulls
        </div>
        <div className="font-[500] text-[1rem] text-white opacity-80 mt-5 absolute left-[14px]">
            Entrepreneurship
        </div>
        <div className="absolute flex left-[12px] bottom-[40px] w-[95px] items-center h-[36px]">
            <div className="font-[500] text-[1rem] text-white opacity-80 ">Registration-Open</div>
            <div className="bg-gradient-to-r from-[#F54109] to-[#F5D00B] text-white ml-8 flex justify-center items-center rounded-md pt-1 pb-1 pr-2 pl-2 ">Open</div>
        </div>
        {props.active && <div className="w-[36px] h-[36px] rounded-[50%] bg-[#DD0310] absolute top-[-14px] right-[-14px]">

        </div>}

</div>
}

export default SocietyCard