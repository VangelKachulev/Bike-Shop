import * as request from "./requester";

const baseUrl = `http://localhost:3030/data/bikes/`

export const getAll = () => request.get(baseUrl);

export const getOne = (bikeId) => request.get(`${baseUrl}/${bikeId}`);

export const post = (token, bikeData) => request.post(baseUrl, bikeData);

export const update = (token, bikeData, bikeId) => request.put(`${baseUrl}/${bikeId}`, bikeData);

export const removeAd = (token, bikeId) => request.del(`${baseUrl}/${bikeId}`);

