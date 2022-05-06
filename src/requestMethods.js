import axios   from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmU1MGRmYmJkYzg1MjBlN2Q5NmE1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTgzNDA1NCwiZXhwIjoxNjUyMDkzMjU0fQ.TiYOWMlb9yjGdoB9ORnwaitiadru3BUhjqI-8QRFlJs";

export const publicRequest =axios.create({
    baseURL: BASE_URL, 
});

export const userRequest =axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`} 
});