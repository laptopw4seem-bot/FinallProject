import useingData from "./usingData";

interface platForm {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () => useingData<platForm>("/platforms/lists/parents");
export default usePlatforms;
