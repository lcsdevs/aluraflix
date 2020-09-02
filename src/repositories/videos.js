import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/VIDEOS`;

function create(objectVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objectVideo),
    })
        .then(async (serverResponse) => {
            if (serverResponse.ok) {
                const response = await serverResponse.json();
                return response;
            }
            throw new Error('Não foi possível pegar os dados :(');
        });
}

export default {
    create,
};
