
import usingData from "./usingData";
export interface Genre {
    id : number;
    name : string;
    image_background : string;
    
}


const Genres = () => usingData<Genre>("/genres");

export default Genres;