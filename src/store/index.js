import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { dataLoaded: false, selectedYear: null, seasonData: [], raceData: [] }

const f1data = createSlice({
  name: 'f1data',
  initialState,
  reducers: {
    setFilter(state, action) { state.selectedYear = action.payload },
    setSeasonData(state, action) { state.seasonData = state.seasonData.concat(action.payload) },
    setDataLoaded(state, action) { state.dataLoaded = action.payload },
    setRaceData(state, action) { state.raceData = state.raceData.concat(action.payload) }
  }
});

export const f1DataActions = f1data.actions;

const store = configureStore({
  reducer: f1data.reducer
})

export default store;
