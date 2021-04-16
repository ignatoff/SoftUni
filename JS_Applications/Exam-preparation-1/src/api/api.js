export const settings = { host: '' };

async function request(url, options) {

    try {
        const response = await fetch(url, options);
        
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message)
        }

        try {
            return await response.json();
        } catch (error) {            
            return response;
        }
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }
    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    
    return options;
}

export async function get(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url) {
    return await request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post(settings.host + '/users/login', { email, password });
    
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    
    return result; 
}

export async function register(username, email, password, gender) {
    const result = await post(settings.host + '/users/register', { username, email, password, gender });
    
    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('gender', result.gender);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    
    return result; 
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('gender');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    
    return result; 
}