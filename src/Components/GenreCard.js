const GenreCard = (props) => {
    return <div className="w-[223px] h-[134px] relative rounded-2xl">
        <img className="rounded-2xl" src={props.Image}/>
        <div className="font-[500] bottom-[11px] w-full text-center absolute text-[18px] text-white">
            {props.text} 
        </div>
    </div>
}

export default GenreCard