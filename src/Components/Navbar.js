import logo from "../Assets/ticket-2 1.svg"

const Navbar = () => {

    return <div className="flex h-[70px] items-center justify-between text-white bg-[#0f0f0f] ">
        <div className="ml-[9.4rem] w-[9.4rem] text-[1.8rem] flex items-center">
            <img src={logo}/>
            <div><span className="font-[800]">Event</span>ick</div>
        </div>
        <div className="flex mr-[9.4rem] gap-12">
            <div className="text-[#F5D00B]">Home</div>
            <div>Events</div>
            <div>Societies</div>
            <div>About Us</div>
        </div>
        
    </div>

}

export default Navbar