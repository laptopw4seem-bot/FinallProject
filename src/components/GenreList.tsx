import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { dataa } = useGenres();
  return (
    <ul>
      {dataa.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
