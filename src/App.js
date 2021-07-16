import './App.css';
import YearFilter from './components/Filter/YearFilter';
import Header from './components/UI/Header';
import ContentScreen from './components/Content/ContentScreen';
import { useSelector } from 'react-redux';

function App() {
  const dataLoaded = useSelector(state => state.dataLoaded);
  const selectedYear = useSelector(state => state.selectedYear);
  return (
    <>
      <Header />
      <div className='content'>
        <YearFilter />
        {!dataLoaded && selectedYear && <div className="loadingContainer"><p>Loading ...</p></div>}
        {dataLoaded && <ContentScreen />}
      </div>
    </>
  );
}

export default App;
