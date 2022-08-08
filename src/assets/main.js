const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '149c06fdf6msh4c46caf28fb057bp1f1f9cjsnb8defcb7a7a2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = document.getElementById('content');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCPDUImPj1TyBXYEiKil1sPQ&part=snippet%2Cid&order=date&maxResults=50';

async function fetchData(urlApi, options) {
    const response = await fetch(urlApi, options);
    const data = await response.json();

    return data;
}

(async () => {
    const videos = await fetchData(API, options);

    let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails["medium"].url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>

        `).slice(0, 4).join('')}
    `;   
    content.innerHTML = view;
    

})()
