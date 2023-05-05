import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  // point A (where are you right now)
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name:'nav',
  initialState,
  // dispatch
  reducers: {
    setOrigin:(state,action)=>{
    // change the state of the origin using action
      state.origin = action.payload
    },
    setDestination:(state,action)=>{
    state.destination = action.payload
  },
    setTravelTimeInformation:(state,action)=>{
    state.travelTimeInformation = action.payload
  },
  }
})

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer 