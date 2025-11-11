
import usingData from "./usingData";
export interface Genre {
    id : number;
    name : string;
    
}


const Genres = () => usingData<Genre>("/genres");

export default Genres;