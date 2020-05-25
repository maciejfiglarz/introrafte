import axios from "axios";
import { serverUrl } from "./../config/constants";
export default axios.create({
  baseURL: serverUrl,
});


