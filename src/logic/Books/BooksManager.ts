import axios from 'axios';
const API_URL:string = "https://www.googleapis.com/books/v1/";
const API_KEY:string = "AIzaSyDx-dY3gLgjWubHaZpAEh6l-iLSLNSDEKI";
let API_START_INDEX:number = 0;
let API_END_INDEX:number = 0;

// https://www.googleapis.com/books/v1/volumes?q=js&orderBy=relevance&key=AIzaSyDx-dY3gLgjWubHaZpAEh6l-iLSLNSDEKI&startIndex=0&maxResults=30
const API = axios.create({
    baseURL: API_URL,
});

// orderBy=relevance orderBy=newest сортировка
// subject all art biography computers history medical poetry категория
export const searchBooks:any = async (query: string = "js", subject:string = "", orderBy:string = "relevance", loadMore:boolean = false) => {
    let STR_URL:string = 'volumes?q=';
    switch (subject)
    {
        case "art":case "biography":case "computers":case "history":case "medical":case "poetry":
            STR_URL += (query + '+AND+subject:' + subject + '&orderBy=' + orderBy + "&key=" + API_KEY + '&startIndex=' + API_START_INDEX + '&maxResults=30')
            break;
        default:
            STR_URL += (query + '&orderBy=' + orderBy + '&key=' + API_KEY + '&startIndex=' + API_START_INDEX + '&maxResults=30');
            break;
    }
    const response = await API.get(STR_URL);
    API_END_INDEX = response.data.totalItems;
    return response.data;
};




