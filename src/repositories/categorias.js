import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
    console.log(config.URL_BACKEND_TOP);
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (serverResponse) => {
            if (serverResponse.ok) {
                const response = await serverResponse.json();
                return response;
            }
            throw new Error('Não foi possível pegar os dados :(');
        });
}

export default {
    getAllWithVideos,
};
