import api from '@/api/axios';

export const login = async (payload) => {
    try {
        const response = await api.post('login', payload);
        return response.data;
    } catch(err) {
        console.error(err);
    }
}

export const register = async (payload) => {
    try {
        const response = await api.post('register', payload);
        return response.data;
    } catch(err) {
        console.error(err);
    }
}