import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
// import {
//     useState
// } from "react";
import axios from "axios";

const initialState = {
    loading: true,
    data: [],
    errorMsg: ""
}

const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action);
            state.data = action.payload;
        })
        builder.addCase(fetchWeather.rejected, (state) => (state, action) => {
            state.loading = false;
            state.errorMsg = action.payload;
        })

    }

})





const fetchWeather = createAsyncThunk("weather/fetchweather", async (location) => {
    try {
        console.log(location.lat,location.lon);
        console.log("byeeeeeeeeeeeeeee");
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiii");  
        const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API}`);
        console.log(res);
        // const {lat,lon}=getLocation();
        // const data=res.data.data[0];
        return res.data;
    } catch (error) {
        console.log(error);
    }
})
export {
    fetchWeather
};
export default weather.reducer