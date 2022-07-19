const url = `http://localhost:3030/jsonstore/bikes`


export const getAll = async() => {


    const response = await fetch(url)
    const result = await response.json()

    return result

}