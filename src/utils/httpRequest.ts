import axios from "axios";

const httprequest = axios.create({
  baseURL: "https://cp-backend-985687851836.us-central1.run.app/api/",
});

export default httprequest;
