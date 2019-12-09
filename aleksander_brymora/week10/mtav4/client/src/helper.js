import axios from 'axios';
const URL = 'http://localhost:5000/api/';

class Helper {
    // Get list of lines
    static getLinesArr() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(URL+'lines');
                const data = res.data;
                resolve(
                    data.map(line => [...line.stops])
                )
            } catch (e) {
                reject(e);
            }
        })
    }

    static getRouteDetails (start, end) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(URL+'route', start, end);
                const data = res.data;
                resolve({
                    ...data
                })
            } catch (e) {
                reject(e);
            }
        })
    }
}

export default Helper;