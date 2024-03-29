//use queryselectorall to grab node with class yt-core-image -> returns array of nodes
    // .src property gets the image source
    // have src array

function getDogs() {
    const imgList = document.querySelectorAll('.yt-core-image--fill-parent-height, .yt-core-image--fill-parent-width, .yt-core-image, .yt-core-image--content-mode-scale-aspect-fill, .yt-core-image--loaded')
    // const imgList = document.querySelectorAll('img');
    console.log(imgList);
    for (let i = 0; i < imgList.length; i++) {   
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(response => {
            imgList[i].src = response.message;
        })
        .catch(error => console.log(error))
    }
}


const contents = document.getElementById('contents')
const thumbnail = document.querySelector('.yt-core-image')

let contentsObserver = new MutationObserver(getDogs);
contentsObserver.observe(contents, {childList: true})

let thumbnailObserver = new MutationObserver(getDogs);
thumbnailObserver.observe(thumbnail, {attributes: true})

getDogs();
// setTimeout(getDogs, 500);
    
document.addEventListener('click', getDogs)
