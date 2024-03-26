import ProductsList from "./ProductsList";
import { useSearchParams } from "react-router-dom";

function useSearch(){
    const [searchParams, setSearchParams] = useSearchParams();
    const searchItem = searchParams.get("title");
    const onSearch = (title) => {
      if (title) {
        setSearchParams({ title });
      } else {
        setSearchParams("");
      }
    };
    const filterProducts = searchItem
      ? ProductsList.filter((p) =>
          p.title.toLowerCase().trim().includes(searchItem.toLowerCase().trim())
        )
      : ProductsList;
  
    return {filterProducts, onSearch}
}
export default useSearch;