const baseUrl = `http://localhost:3030/users`

export const login = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const logout = async (accessToken) => {
    try {
        await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })

    } catch (err) {
        console.log(err);
    }
};

export const register = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result;
        
    } catch (err) {
        console.log(err);
    }
};

