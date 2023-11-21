import axios from "axios";

const url = "https://energy-pilot-deploy.onrender.com";

export function getDevices() {
    return axios.get(`${url}/Device/`);
}