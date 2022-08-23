import * as request from "./requester";

const baseUrl = `http://localhost:3030/data/parts/`


export const getAll = () => request.get(baseUrl);

export const getOne = (partId) => request.get(`${baseUrl}/${partId}`);

export const post = (token, partData) => request.post(baseUrl, partData);

export const update = (token, partData, partId) => request.put(`${baseUrl}/${partId}`, partData);

export const removeAd = (token, partId) => request.del(`${baseUrl}/${partId}`);

