import ProductsList from './products/ProductsList';
import { useSearchParams } from 'react-router-dom';

function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchItem = searchParams.get('title');

  const onSearch = (title) => {
    if (!title) {
      setSearchParams('');
    } else {
      setSearchParams({ title });
    }
  };

  const filterProducts = searchItem
    ? ProductsList.filter((p) =>
        p.title.toLowerCase().trim().includes(searchItem.toLowerCase().trim())
      )
    : ProductsList;

  return { filterProducts, onSearch };
}
export default useSearch;
