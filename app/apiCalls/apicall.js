import 'core-js/stable'
import 'regenerator-runtime/runtime'
import axios from 'axios'


export const getDishes = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: 'https://75e91c65-3752-46a2-9a37-ab800312dbe0.mock.pstmn.io/menus',
        })
        return res
    } catch (err) {
        console.error(err)
    }
}

export const getStories = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: 'https://75e91c65-3752-46a2-9a37-ab800312dbe0.mock.pstmn.io/categories',
        })
        return res
    } catch (err) {
        console.error(err)
    }
}