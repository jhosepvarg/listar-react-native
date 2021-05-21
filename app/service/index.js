import axios from 'axios';

const apiUrl = "http://192.168.20.39:4500/"

export async function obternerProductos() {
    try {
        const result = await axios({
            method: 'get',
            url: apiUrl + 'productos/list'
        })
        return result;
    } catch (error) {
        console.log(error);
    }
}
