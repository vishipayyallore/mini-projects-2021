const baseUrl = 'http://localhost:4000/api/books';

export function getAllBooks() {

    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

async function handleResponse(response) {

    if (response.ok) {
        return response.json();
    }

    if (response.status !== 200 || response.status !== 201) {
        const error = await response.text();
        throw new Error(error);
    }

    throw new Error("Network response was not ok.");
}

function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
}
