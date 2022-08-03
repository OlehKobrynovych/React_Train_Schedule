import { createSlice } from '@reduxjs/toolkit';

const date = [
    {id: '1', name: '305', from: 'Lviv', to: 'Kyiv', start: '12:00', finish: '16:00', price: '120' },
    {id: '2', name: '355', from: 'Lviv', to: 'Kyiv2', start: '16:00', finish: '19:00', price: '150' },
    {id: '3', name: '254', from: 'Lviv3', to: 'Kyiv3', start: '15:00', finish: '13:00', price: '250' },
    {id: '4', name: '255', from: 'Lviv3', to: 'Kyiv', start: '16:00', finish: '18:00', price: '260' },
    {id: '5', name: '256', from: 'Lviv5', to: 'Kyiv2', start: '19:00', finish: '19:00', price: '420' },
    {id: '6', name: '257', from: 'Lviv7', to: 'Kyiv', start: '16:00', finish: '11:00', price: '510' },
    {id: '7', name: '258', from: 'Lviv7', to: 'Kyiv4', start: '17:00', finish: '14:00', price: '410' },
];

export const trainsSlice = createSlice({
    name: 'trains_reducer',
    initialState: {
        trains: [],
        trainsFilter: [],
        error: '',
        edit: null,
        isDeleteRoute: false,
        deleteRouteId: null,
        search: {
            // name: null,
            // from: null,
            // to: null,
            // price: null,
        },
    },
    reducers: {
        setTrains: (state, action) => {
            state.trains = action.payload;
            state.trainsFilter = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        trainsDelete: (state, action) => {
            state.trainsFilter = state.trainsFilter.filter(el => el.id !== state.deleteRouteId);
            state.isDeleteRoute = !state.isDeleteRoute;
            state.deleteRouteId = null;
        },
        trainsOldDelete: (state, action) => {
            state.trainsFilter = state.trainsFilter.filter(el => el.id !== action.payload);
            state.edit = null;
        },
        addRoute: (state, action) => {
            state.trains.push(action.payload);
            state.trainsFilter.push(action.payload);
        },
        modalOpen: (state, action) => {
            state.isDeleteRoute = !state.isDeleteRoute;
            state.deleteRouteId = action.payload;
        },
        trainsEdit: (state, action) => {
            state.edit = action.payload;
        },
        searchTrains: (state, action) => {
            state.search[action.payload.search] = action.payload.value;
            if (action.payload.value !== null) {
                state.trainsFilter = state.trainsFilter.filter(el => el[action.payload.search] == action.payload.value);
            } else {
                state.trainsFilter = state.trains.filter(el => {
                    if (!state.search.name && !state.search.from && !state.search.to && !state.search.price) {
                        return true
                    } else {
                        let flag = false
                        for (let key in state.search) {
                            if (el[key] == state.search[key]) {
                                flag = true
                            } 
                        }
                        return flag;
                    }
                })
            }
        },
    }
});

export const { setTrains, setError, trainsOldDelete, addRoute, trainsEdit, searchTrains, deleteRoute, modalOpen, trainsDelete, } = trainsSlice.actions

export const getTrainsThunk = () => (dispatch) => {
        // TrainsFetch()
    //     .then(res => {
    //         if (res.status === 200 && res.data) {
    //             dispatch(setTrains(res.data));
                dispatch(setTrains(date));
        //     }
        // })
        // .catch((err) => {
        //     dispatch(setError(err));
        // });
}
export const trainsDeleteThunk = () => (dispatch) => {
        // TrainsDeleteFetch(id)
        //     .then(res => {
        //         if (res.status === 200 && res.data) {
                    dispatch(trainsDelete());
            //     }
            // })
            // .catch((err) => {
            //     dispatch(setError(err));
            // });
}
export const trainsOldDeleteThunk = (id) => (dispatch) => {
        // TrainsDeleteFetch(id)
        //     .then(res => {
        //         if (res.status === 200 && res.data) {
                    dispatch(trainsOldDelete(id));
            //     }
            // })
            // .catch((err) => {
            //     dispatch(setError(err));
            // });
}
export const addRouteThunk = (el) => (dispatch) => {
        // TrainsCreateFetch(el)
        //     .then(res => {
        //         if (res.status === 200 && res.data) {
                    dispatch(addRoute(el));
            //     }
            // })
            // .catch((err) => {
            //     dispatch(setError(err));
            // });
}
export const searchTrainsThunk = (search, value) => (dispatch) => {
        // TrainsSearchFetch(search, value)
        //     .then(res => {
        //         if (res.status === 200 && res.data) {
                    dispatch(searchTrains({search, value}));
            //     }
            // })
            // .catch((err) => {
            //     dispatch(setError(err));
            // });
}

export default trainsSlice.reducer