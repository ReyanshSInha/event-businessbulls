import EventCard from "./EventCard"
import madhurima from "../Assets/madhurima.jpg"
import zoomba from "../Assets/zoomba.jpg"
import classical from "../Assets/Classical.jpg"
import Did from "../Assets/Did.jpg"
import arrow from "../Assets/Vector.svg"

const UpcomingEvents = () => {
    return <div className="h-[70vh] flex justify-center bg-[#0f0f0f] w-full">
            <div className="w-[70%] relative flex flex-col gap-[20px] rounded-2xl h-[28.2rem]">
                <div className="text-white font-[700] text-[1.5rem]">
                    Upcoming Events
                </div>
                <div className="w-[100%] flex justify-between h-[100%]">
                        <EventCard Image={madhurima} eventName={"Madhushanti"} societyName={"Madhurima"}/>
                        <EventCard Image={zoomba} eventName={"Zoomba"} societyName={"Madhurima"}/>
                        <EventCard Image={classical} eventName={"Classical"} societyName={"Madhurima"}/>
                        <EventCard Image={Did} eventName={"DID"} societyName={"Madhurima"}/>
                </div>
                <img src={arrow} className={`absolute top-[210px] left-[-38px]`} />
            <img src={arrow} className={`absolute top-[210px] rotate-180 right-[-38px]`} />
                <p className="absolute top-[10px] right-[50px] font-[400] text-[1.0rem] text-[#F5D00B]">
                    view all
                </p>
            </div>
    </div>
}

export default UpcomingEvents