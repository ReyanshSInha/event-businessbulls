
const EventCard = (props) => {
    return <div className="w-[222px]  relative h-[391px]">
        <img className="rounded-2xl" src={props.Image}/>
        <div className="left-[12px] text-[1.5rem] font-[500] absolute top-[222px] text-white">{props.eventName}</div>
        <div className="left-[12px] text-[0.95rem] opacity-70% font-[500] absolute top-[254px] text-white">{props.societyName}</div>
        <div className="w-[115px] top-[293px] absolute opacity-70 text-white left-[13px] h-[36px]">4 July | BR Audi Competition</div>
        
        <div className="text-white absolute left-[12px] bottom-[10px]">Free | Online</div>

    </div>
}

export default EventCard