import axios from "axios";

const API_KEY = "31123978-9d266d097dec7f84420a9ea23";
const BASE_URL = "https://pixabay.com";

export const fetchData = (query, page, perPage) => {
    return axios.get(
        `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
        )
        .then(response => response.data);
};


