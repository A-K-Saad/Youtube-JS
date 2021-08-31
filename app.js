//https://youtube.googleapis.com/youtube/v3/search?maxResults=60&key=250967535718-dm1k034tdm0uo6tp4fbnujmvosufkti3.apps.googleusercontent.com

const videoContainer = document.querySelector(".row")
const key = "AIzaSyCqygx7_gHnEeb-Ehy_TraDQJaaPimb06g";
const searchInput = document.querySelector("#search-input");
// console.log(url);

const fetchVideo = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=12&q=${searchInput.value}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayVideo(data.items);
    }
    catch (error) {
        console.log(error);
    }
}
const displayVideo = videos => {
    videoContainer.textContent = "";
    videos.map(video => {
        const singleVideo = document.createElement("div");
        singleVideo.classList.add("col-12", "col-md-6");
        singleVideo.innerHTML = `
            <div class="p-2">
                <div class="py-3 bg-dark">
                    <!--<img src="${video.snippet.thumbnails.medium.url}">-->
                    <iframe src="https://www.youtube.com/embed/${video.id.videoId}" title="${video.id.title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
        allowfullscreen poster="${video.snippet.thumbnails.medium.url}" class="video"></iframe>
                </div>
                <div class="p-3 pb-0">
                    <h6 class="text-justify">${video.snippet.title.slice(0, 70)}...</h6>
                    <small class="text-justify">${video.snippet.channelTitle}</small>
                </div>
            </div
        `;
        videoContainer.appendChild(singleVideo);
    });
}
searchInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        document.querySelector("#search-btn").click();
    }
});

/* const showVideo = video => {
    videoContainer.textContent = "";
    const videoPage = document.createElement("div");
    videoPage.classList.add("d-flex");
    videoPage.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${video.id.videoId}" title="${video.id.title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
        allowfullscreen poster="${video.snippet.thumbnails.medium.url}"></iframe>
    `;
    videoContainer.appendChild(videoPage);
    console.log("hoeaj")
} */