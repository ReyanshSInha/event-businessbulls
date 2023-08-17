import classes from "./HeroSection.module.css"

const HeroSection = () => {

    return <div className="flex flex-col justify-start items-center h-[65vh] w-full bg-[#0f0f0f]">
        <div className="text-white mt-[7rem] text-center h-[130px] w-[65vw] font-[700] text-[3.43rem] tracking-wide leading-[4rem]">
            <span className={`${classes.HeroSectionGradient}`}>EXPERIENCE</span> THE BEST EVENTS <br/>OF YOUR <span className={`${classes.HeroSectionGradient}`}>COLLEGE</span>
        </div>
        <div className="text-white mt-2 opacity-60 font-[400] text-center text-[1.15rem] leading-[1.3rem]">
            Get to know about all the cultural fests, competitions and <br/>
            hackathons that are going to happen in your college
        </div>
        <div className="text-white font-[500] text-[1.14rem] w-[11.5rem] opacity-80 border-[1px] rounded-[26px] pd-[15px] mt-[3rem] flex justify-center items-center h-[3.2rem]">
            Explore Events
        </div>
    </div>


}

export default HeroSection