import ProductsList from "./ProductsList";
import { useSearchParams } from "react-router-dom";

function useSearch(){
    const [searchParams, setSearchParams] = useSearchParams();
    const searchItem = searchParams.get("title");
    console.log(searchItem)

      const onSearch = (title) => {
        if(!title){
          setSearchParams("");
          console.log("bad")
        }
        else {
          setSearchParams({ title });
          console.log("good")
        }
      };
      
        const filterProducts = searchItem
        ? ProductsList.filter((p) =>
            p.title.toLowerCase().trim().includes(searchItem.toLowerCase().trim())
          )
        : ProductsList;
        console.log(searchParams)
    console.log(filterProducts)
  
      return {filterProducts, onSearch}
}
export default useSearch;