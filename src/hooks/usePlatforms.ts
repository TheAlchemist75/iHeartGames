import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useData<Platforms>("/platforms/lists/parents");
};

export default usePlatforms;
