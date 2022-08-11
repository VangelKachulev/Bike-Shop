const url = `http://localhost:3030/data/bikecomments/`

export const createComment = async (token, data) => {
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
};
export const getAllComments = async () => {

    try {
        const response = await fetch(url)
        const result = await response.json()

        return result;

    } catch (err) {
      
        console.log(err);
    }
};