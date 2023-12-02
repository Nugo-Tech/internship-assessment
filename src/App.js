import { useDispatch, useSelector } from 'react-redux';
import ViewData from './components/ViewData';
import { useEffect } from 'react';
import { fetchData } from './store/reducers/getDataSlice';
import HandlePages from './components/HandlePages';

function App() {
  const getData = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const currentPage = getData.currentPage;
  const dataPerPages = getData.dataPerPages;

  //calculate total pages
  if (getData.data.results) {
    var totalPages = getData.data.results.length / dataPerPages;
  }

  //function to create a number array for given value
  function createArrayWithPages(n) {
    const resultArray = [];
    for (let i = 1; i <= n; i++) {
      resultArray.push(i);
    }
    return resultArray;
  }
  //create a number array size of totalPages and values 1 to totalPages
  const pages = createArrayWithPages(totalPages);

  return (
    <div className="d-flex flex-column site-container">
      <header>
        <h1>Rick and Morty API Characters</h1>
      </header>
      <main>
        <ViewData />
      </main>
      <footer>
        <div className="text-center">
          <HandlePages pages={pages} currentPage={currentPage} />
        </div>
      </footer>
    </div>
  );
}

export default App;
