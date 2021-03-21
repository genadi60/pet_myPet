const URL = "http://localhost:5000/pets";

const getPets = (params) => {
    const suffix = params && params !== "all" ? `?category=${params}` : "";
    return fetch(URL + suffix)
    .then(result => result.json());
}

export default getPets;