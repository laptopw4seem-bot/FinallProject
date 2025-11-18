
// import { GameQuery } from "../App";
// import { Genre } from "./useGenres";
// import useingData from "./usingData";
// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }
// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
// }

// const useData = (gameQuery:GameQuery) => useingData<Game>("/games", {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [
//   gameQuery
// ]);
// export default useData;
// ...existing code...
import { GameQuery } from "../App";
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

const useData = (gameQuery: GameQuery) =>
  useingData<Game>(
    "/games",
    [gameQuery], // deps array (second argument)
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } } // axios config (third)
  );

export default useData;
// ...existing code...
