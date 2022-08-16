import { configureStore } from "@reduxjs/toolkit";
import bgReducer from "./feature/bg";
import maintaskReducer from "./feature/maintask";
import newsReducer from "./feature/news" 
import quoteReducer from "./feature/quote";
import subtaskReducer from "./feature/subtask";
import weatherReducer from "./feature/weather";
import webpagesReducer from "./feature/webpages";

const store= configureStore({
    reducer:{
        news:newsReducer,
        maintask:maintaskReducer,
        subtask:subtaskReducer,
        weather:weatherReducer,
        bg:bgReducer,
        quote:quoteReducer,
        webpg:webpagesReducer,
    }
})


export default store;