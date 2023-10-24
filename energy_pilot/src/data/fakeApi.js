import axios from "axios";

export function getData() {
    return axios.get("https://api.mockaroo.com/api/947e1bf0?count=7&key=71d1e230");
}