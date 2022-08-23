import * as request from "./requester";

const baseUrl = `http://localhost:3030/data/bikecomments/`

export const getAllComments = () => request.get(baseUrl);

export const createComment = (token, comment) => request.post(baseUrl, comment);

