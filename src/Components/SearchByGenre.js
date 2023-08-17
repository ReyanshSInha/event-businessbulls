import GenreCard from "./GenreCard"
import GenreOne from "../Assets/GenreOne.jpg"
import GenreTwo from "../Assets/GenreTwo.jpg"
import GenreThree from "../Assets/GenreThree.jpg"
import GenreFour from "../Assets/Genrefour.jpg"


const SearchByGenre = () => {
    return <div className="h-[35vh] flex justify-center bg-[#0f0f0f] w-full">
        <div className="w-[70%] relative gap-[20px] flex flex-col rounded-2xl h-[16.1rem]">
            <div className="text-white font-[700] text-[1.5rem]">
                   Search By Genre
            </div>
            <div className="w-[100%] flex justify-between h-[100%]">
                <GenreCard Image={GenreOne} text={"Cultural Events"}/>
                <GenreCard Image={GenreTwo} text={"Academics"}/>
                <GenreCard Image={GenreThree} text={"Competitions"}/>
                <GenreCard Image={GenreFour} text={"Hackathons"}/>
            </div>

        </div>

    </div>
}

export default SearchByGenre