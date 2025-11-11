
import { Genre } from "./useGenres";
import useingData from "./usingData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useData = (SelectGenre : Genre | null) => useingData<Game>("/games" , [SelectGenre?.id], {params :{genres :SelectGenre?.id}});
export default useData;
