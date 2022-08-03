import { useDispatch} from 'react-redux';
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete';
import { searchTrainsThunk } from '../../store/trains_reducer';

import './SearchTable.css';

export default function SearchTable() {
    const dispatch = useDispatch();

    const handleChange = (search, value) => {
        dispatch(searchTrainsThunk(search, value))
    }

    return (
        <div className='search-table-wrap'>
            <p>Schedule filter</p>
            <div className='search-table'>
                <SearchAutocomplete className='search-table__item' search={'name'} setItems={handleChange}/>
                <SearchAutocomplete className='search-table__item' search={'from'} setItems={handleChange}/>
                <SearchAutocomplete className='search-table__item' search={'to'} setItems={handleChange}/>
                <SearchAutocomplete className='search-table__item' search={'price'} setItems={handleChange}/>
            </div>
        </div>
    );
}
