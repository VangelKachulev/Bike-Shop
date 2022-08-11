const url = `http://localhost:3030/data/bikes/`

export const getAll = async () => {

    try {
        const response = await fetch(url);
        const result = await response.json()
        return result;

    } catch (err) {
        console.log(err);
    }
}

export const getOne = async (id) => {

    try {
        const response = await fetch(url + id)
        const result = await response.json()

        return result

    } catch (err) {
        console.log(err);
    }
}

export const post = async (token, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()

        return result;
    } catch (err) {
        console.log(err);
    }
}
export const removeAd = async (token, id) => {
    try {
        const response = await fetch(url + id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: {},
        })
        const result = await response.json()

        return result;
    } catch (err) {
        console.log(err);
    }
}
export const update = async (token, data, id) => {
    try {
        const response = await fetch(url + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()

        return result;
    } catch (err) {
        console.log(err);
    }
}




