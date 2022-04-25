import axios from "axios";


export const getPostRequests = async () => await axios.get("/posts");
