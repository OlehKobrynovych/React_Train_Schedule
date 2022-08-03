import { Autocomplete, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

export default function SearchAutocomplete({search, setItems}) {
    const trains = useSelector(state => state.trains_reducer.trainsFilter);

    const handleChange = (value) => {
        setItems(search, value)
    }

    return (
        <div>
            <Autocomplete
                onChange={(event, newValue) => {
                    handleChange(newValue);
                }}
                disablePortal
                id="combo-box-demo"
                options={[...new Set(trains.map(el => el = el[search]))]}
                sx={{ width: 150 }}
                renderInput={(params) => <TextField {...params} label={`Enter ${search}`} />}
            />
        </div>
    );
}
