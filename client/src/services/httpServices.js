import axios from "axios";

axios.defaults.baseURL =
  "http://localhost:5001/amaclone--bd653/us-central1/api";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
