import axios from "axios";

const KEY = "AIzaSyDTVhq7_DbhNQkKCK8B-0B2289yMXIrJX8";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});