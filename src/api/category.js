import { apiUrl } from '../conf.js';
import { getUserInfo } from '../localStorage.js';

export const getCategories = async ({ searchKeyword = 'rau' }) => {
    try {
        let queryString = '?q=';
        if (searchKeyword) queryString += `${searchKeyword}`;
        const url = `${apiUrl}/categories${queryString}`;
		console.log(url);
        /*const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });*/
		const response = await fetch(url);

        const categories = await response.json();
        /*if (response.statusText !== 'OK') {
            throw new Error(response.Error);
        }*/
		console.log(categories);
        return categories;
    } catch (err) {
        console.log(err);
        return { error: err.Error || err.message };
    }
};

export const getCategory = async (id) => {
    try {
        const url = `${apiUrl}/categories/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        /*if (response.statusText !== 'OK') {
            throw new Error(response.Error);
        }*/
        const category = await response.json();
        return category;
    } catch (err) {
        console.log(err);
        return { error: err.message };
    }
};
