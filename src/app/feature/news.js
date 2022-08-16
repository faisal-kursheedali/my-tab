import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loading: true,
    data: [],
    errorMsg: ""
}

const News = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchNews.rejected, (state) => (state, action) => {
            state.loading = false;
            state.errorMsg = action.payload;
        })

    }

})



// const options = {
//     method: 'GET',
//     headers: {
//         'X-BingApis-SDK': 'true',
//         'X-RapidAPI-Key': '5c87f8dfb3mshf528b4d872e3edbp1c5c67jsnbc67599a770e',
//         'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
// };

const fetchNews = createAsyncThunk("news/fetchNews", async () => {
    try {
        const key=process.env.REACT_APP_NEWS_API;
        console.log(typeof key);
        const response = await axios.get(
                'https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=business&page_size=10', {
                    headers: {
                        'x-api-key': `${key}`,
                    },
                }
            );
        const data=response.data.articles;
        console.log(response);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error.message);
        return error.message
    }
})

export {
    fetchNews
};
export default News.reducer