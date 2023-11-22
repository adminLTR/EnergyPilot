import axios from "axios";

export function getData() {
    return axios.get("https://api.mockaroo.com/api/334d8750?count=7&key=9d7a4120");
}