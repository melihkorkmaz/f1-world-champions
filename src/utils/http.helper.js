
const cache = {};
const get = (url) => {
    if (cache[url]) {
        return new Promise(resolve => resolve(cache[url]));
    }
        return fetch(url).then(data => data.json()).then((data) => {
            cache[url] = data;
            return data;
        });

};

// We can extend this module for POST, PUT etc.


export default {
    get
};
