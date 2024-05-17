import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
const initialState = {
  loading: true,
  data: [],
  errorMsg: "",
};

const News = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state) => (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
    });
  },
});

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
    const key = process.env.REACT_APP_NEWS_API;
    console.log(typeof key);
    // const response = await axios.get(
    //   "https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=business&page_size=10",
    //   {
    //     headers: {
    //       "x-api-key": `${key}`,
    //     },
    //   }
    // );
    // const data = response.data.articles;
    // console.log(response);
    // console.log(data);
    // return data;
    /// TODO change the API for now static value is used
    return [
      {
        title:
          "Biden And His Son May Soon Be In Court Facing Serious Charges As Worrying Information Is Obtained",
        author: "",
        published_date: "2024-05-10 18:52:29",
        published_date_precision: "timezone unknown",
        link: "https://m.dailyadvent.com/news/7c538e81240510en_us",
        clean_url: "dailyadvent.com",
        excerpt:
          "Biden And His Son May Soon Be In Court Facing Serious Charges As Worrying Information Is Obtained- Opera News",
        summary:
          'Judicial Watch, a conservative watchdog group, has recently obtained five pages of records from the National Archives and Records Administration (NARA) that shed light on then-Vice President Joe Biden and his son Hunter Biden\'s involvement in Ukraine.\nAccording to Judicial Watch on Friday May 10, 2024, the records include an email dated May 26, 2016, which details a scheduled "8:45 am prep for a 9 am phone call with Pres Poroshenko," referring to Petro Poroshenko, the president of Ukraine at that time.',
        rights: "dailyadvent.com",
        rank: 21945,
        topic: "news",
        country: "NG",
        language: "en",
        authors: "",
        media:
          "https://res.feednews.com/assets/v2/6e607179feeb4b0aab3def7dda344212?quality=uhq&resize=720&cl=_en",
        is_opinion: false,
        twitter_account: null,
        _score: 23.98167,
        _id: "63e15ccb2ba8faa551a6c8a37a46656c",
      },
      {
        title:
          "Biden ripped over resurfaced anti-Trump tweet critics say 'endorses his own impeachment'",
        author: "",
        published_date: "2024-05-10 21:22:17",
        published_date_precision: "full",
        link: "https://news.knowledia.com/all/all/articles/biden-ripped-over-resurfaced-anti-trump-tweet-critics-say-endorses-his-ffcec2023c901826a66476b28f99b3ac5af2664e",
        clean_url: "knowledia.com",
        excerpt:
          "President Joe Biden was blasted on social media over a post defending the impeachment of former President Trump, which critics alleged showed glaring hypocrisy.",
        summary:
          '5 minutes ago\n5 minutes ago President Joe Biden was blasted on social media over a post defending the impeachment of former President Trump, which critics alleged showed glaring hypocrisy.\nPresident Joe Biden was blasted on social media this week over a past anti-Trump tweet that critics said showed he should be impeached for withholding some weapons from Israel if it moves forward with a military operation in Rafah, Gaza.\n"President Trump withheld Congressionally appropriated aid to Ukraine unless they granted him a political favor," Biden tweeted as a candidate in 2019 about the impeachment push against Trump over a phone call with Ukraine that Democrats claimed was a "quid pro quo.',
        rights: "knowledia.com",
        rank: 281671,
        topic: "news",
        country: "FR",
        language: "en",
        authors: "",
        media:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/04/931/523/biden-trump.jpg?ve=1&tl=1",
        is_opinion: false,
        twitter_account: null,
        _score: 23.161129,
        _id: "37f1e185750d009f72ec45f60f4b06b2",
      },
      {
        title: "US giving Ukraine $400 mn in new military aid",
        author: "W.G. Dunlop",
        published_date: "2024-05-10 19:46:55",
        published_date_precision: "full",
        link: "https://www.the-messenger.com/news/national/article_0420f1f2-11d4-57d3-9b8d-fee6376364c7.html",
        clean_url: "the-messenger.com",
        excerpt:
          "The United States on Friday announced a new $400 million military aid package for Kyiv as Russia launched a ground offensive in northeast Ukraine.",
        summary:
          "US President Joe Biden -- pictured on the South Lawn of the White House on May 8, 2024 -- has authorized $400 million in new military aid for Ukraine Andrew Harnik Originally published on doc.afp.com, part of the BLOX Digital Content Exchange.\nUS President Joe Biden -- pictured on the South Lawn of the White House on May 8, 2024 -- has authorized $400 million in new military aid for Ukraine\nAndrew Harnik Originally published on doc.afp.com, part of the BLOX Digital Content Exchange.",
        rights: "the-messenger.com",
        rank: 139155,
        topic: "news",
        country: "US",
        language: "en",
        authors: "Andrew Harnik,W.G. DUNLOP,Shaun TANDON",
        media:
          "https://bloximages.chicago2.vip.townnews.com/the-messenger.com/content/tncms/assets/v3/editorial/f/1e/f1e3acdf-aeae-5933-83a3-15b0b96ed933/663e80c745ac6.image.jpg?crop=341%2C341%2C85%2C0&resize=200%2C200&order=crop%2Cresize",
        is_opinion: false,
        twitter_account: null,
        _score: 22.836876,
        _id: "f21da4e99f4414ceb77a24da4f6f9fcb",
      },
      {
        title: "US approves urgent sale of 3 HIMARS systems to Ukraine",
        author: "Andrii Synyavskyi",
        published_date: "2024-05-11 11:55:09",
        published_date_precision: "full",
        link: "https://www.pravda.com.ua/eng/news/2024/05/11/7455324",
        clean_url: "pravda.com.ua",
        excerpt:
          "The US Department of State has approved the urgent sale of three HIMARS multiple-launch rocket systems to Ukraine for approximately US$30 million.",
        summary:
          "The US Department of State has approved the urgent sale of three HIMARS multiple-launch rocket systems to Ukraine for approximately US$30 million.\nSource: European Pravda, citing the Pentagon's Defense Security Cooperation Agency\nDetails: In a statement, the agency said that Ukraine has requested to purchase three HIMARS missile systems, which will be funded by the German government.\nUS Secretary of State Antony Blinken noted that there is an emergency that requires the urgent sale of these systems to Ukraine, which will come from the United States Army's stockpile.",
        rights: "pravda.com.ua",
        rank: 8190,
        topic: "news",
        country: "UA",
        language: "en",
        authors: "Andrii Synyavskyi",
        media:
          "https://img.pravda.com/images/doc/7/4/7455324_fb_image_eng_2024_05_11_15_17_25.jpg",
        is_opinion: false,
        twitter_account: "@ukrpravda_news",
        _score: 22.772015,
        _id: "58bdd6a9a612ed6f3666474bc47837c8",
      },
      {
        title: "Biden approves US$400 million in military aid to Ukraine",
        author: "Alona Mazurenko",
        published_date: "2024-05-10 16:21:08",
        published_date_precision: "full",
        link: "https://www.pravda.com.ua/eng/news/2024/05/10/7455224",
        clean_url: "pravda.com.ua",
        excerpt:
          "US President Joe Biden signed a decree on 10 May to provide Ukraine with military aid worth up to US$400 million.",
        summary:
          'US President Joe Biden signed a decree on 10 May to provide Ukraine with military aid worth up to US$400 million.\nSource: European Pravda; White House statement\nDetails: By his decree, Biden delegates to the US Secretary of State the authority "to direct the drawdown of up to US$400 million in defence articles and services of the Department of Defense, and military education and training, to provide assistance to Ukraine".\nThis includes the provision of weapons from US Army warehouses, but the list has not yet been made public.',
        rights: "pravda.com.ua",
        rank: 8190,
        topic: "news",
        country: "UA",
        language: "en",
        authors: "Alona Mazurenko",
        media:
          "https://img.pravda.com/images/doc/7/4/7455224_fb_image_eng_2024_05_10_21_45_14.jpg",
        is_opinion: false,
        twitter_account: "@ukrpravda_news",
        _score: 22.768526,
        _id: "28d076a0b6699556b563d74a162a879d",
      },
      {
        title: "US approves urgent sale of 3 HIMARS systems to Ukraine",
        author: "Ukrainska Pravda",
        published_date: "2024-05-11 11:55:09",
        published_date_precision: "full",
        link: "https://www.yahoo.com/news/us-approves-urgent-sale-3-115509813.html",
        clean_url: "yahoo.com",
        excerpt:
          "The US Department of State has approved the urgent sale of three HIMARS multiple-launch rocket systems to Ukraine for approximately US$30 million. Source: European Pravda, citing the Pentagon's…",
        summary:
          "The US Department of State has approved the urgent sale of three HIMARS multiple-launch rocket systems to Ukraine for approximately US$30 million.\nSource: European Pravda, citing the Pentagon's Defense Security Cooperation Agency\nDetails: In a statement, the agency said that Ukraine has requested to purchase three HIMARS missile systems, which will be funded by the German government.\nUS Secretary of State Antony Blinken noted that there is an emergency that requires the urgent sale of these systems to Ukraine, which will come from the United States Army's stockpile.",
        rights: "yahoo.com",
        rank: 31,
        topic: "news",
        country: "US",
        language: "en",
        authors: "Ukrainska Pravda",
        media:
          "https://s.yimg.com/ny/api/res/1.2/zA4zmKNBFDyU5tiZ1ZX5Tg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/ukrayinska_pravda_articles_451/208e2171946d395623246feeec2e5096",
        is_opinion: false,
        twitter_account: "@YahooNews",
        _score: 22.749557,
        _id: "2d48c9a585e56867d71e5b2eea3bf92c",
      },
      {
        title: "US giving Ukraine $400 mn in new military aid",
        author: "",
        published_date: "2024-05-10 19:46:55",
        published_date_precision: "full",
        link: "https://www.thedigitalcourier.com/news/national/us-giving-ukraine-400-mn-in-new-military-aid/article_191bc06b-a4ee-5f7b-a980-6c222a59c25f.html",
        clean_url: "thedigitalcourier.com",
        excerpt:
          "The United States on Friday announced a new $400 million military aid package for Kyiv as Russia launched a ground offensive in northeast Ukraine.",
        summary:
          "US President Joe Biden -- pictured on the South Lawn of the White House on May 8, 2024 -- has authorized $400 million in new military aid for Ukraine Andrew Harnik Originally published on doc.afp.com, part of the BLOX Digital Content Exchange.\nUS President Joe Biden -- pictured on the South Lawn of the White House on May 8, 2024 -- has authorized $400 million in new military aid for Ukraine\nAndrew Harnik Originally published on doc.afp.com, part of the BLOX Digital Content Exchange.",
        rights: "thedigitalcourier.com",
        rank: 378674,
        topic: "news",
        country: "US",
        language: "en",
        authors: "",
        media:
          "https://bloximages.newyork1.vip.townnews.com/thedigitalcourier.com/content/tncms/assets/v3/editorial/4/dc/4dc31f67-1a08-5a2d-8c4d-81aa148ec898/663e80a7b288b.image.jpg?crop=341%2C341%2C85%2C0&resize=200%2C200&order=crop%2Cresize",
        is_opinion: false,
        twitter_account: null,
        _score: 22.737576,
        _id: "3f9b3d1689b5da8ef683d06d094c2f5a",
      },
      {
        title: "Joe Biden has told ‘many lies' about US inflation",
        author: "",
        published_date: "2024-05-15 08:31:14",
        published_date_precision: "full",
        link: "https://www.skynews.com.au/opinion/rita-panahi/joe-biden-has-told-many-lies-about-us-inflation/video/54e7bef14082f711beb11602f59452e3",
        clean_url: "skynews.com.au",
        excerpt: "Joe Biden has told ‘many lies' about US inflation",
        summary:
          "Filmmaker Ami Horowitz has called out the 'lies' of US President Joe Biden, who falsely stated that Inflation was at nine per cent when he took office.\n'On the inflation issue itself, he's made many many lies,' Mr Horowitz told Sky News host Rita Panahi\n'For example, that inflation was because of the Russian invasion of Ukraine.\n'When a simple math equation shows you that the majority of the invasion came prior to the invasion of Ukraine.'",
        rights: "skynews.com.au",
        rank: 6224,
        topic: "world",
        country: "AU",
        language: "en",
        authors: "",
        media:
          "https://content.api.news/v3/images/bin/924dc2c90b6513340c192bccbf8fc672",
        is_opinion: true,
        twitter_account: "@SkyNewsAust",
        _score: 22.71357,
        _id: "af03258c49a50aea1ffdf2adddbd4092",
      },
      {
        title: "Biden approves US$400 million in military aid to Ukraine",
        author: "Ukrainska Pravda",
        published_date: "2024-05-10 16:21:08",
        published_date_precision: "full",
        link: "https://www.yahoo.com/news/biden-approves-us-400-million-162108407.html",
        clean_url: "yahoo.com",
        excerpt:
          "US President Joe Biden signed a decree on 10 May to provide Ukraine with military aid worth up to US$400 million. Source: European Pravda; White House statement Details: By his decree, Biden delegates…",
        summary:
          'US President Joe Biden signed a decree on 10 May to provide Ukraine with military aid worth up to US$400 million.\nSource: European Pravda; White House statement\nDetails: By his decree, Biden delegates to the US Secretary of State the authority "to direct the drawdown of up to US$400 million in defence articles and services of the Department of Defense, and military education and training, to provide assistance to Ukraine".\nThis includes the provision of weapons from US Army warehouses, but the list has not yet been made public.',
        rights: "yahoo.com",
        rank: 31,
        topic: "news",
        country: "US",
        language: "en",
        authors: "Ukrainska Pravda",
        media:
          "https://s.yimg.com/ny/api/res/1.2/_RAcPJyiqsBOJE2lOs7YTw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/ukrayinska_pravda_articles_451/6d7441cb39f1246295a91a4429b1d5b4",
        is_opinion: false,
        twitter_account: "@YahooNews",
        _score: 22.671604,
        _id: "c66dc3fd048659e8ec29899b4ff2b588",
      },
    ];
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
});

export { fetchNews };
export default News.reducer;
