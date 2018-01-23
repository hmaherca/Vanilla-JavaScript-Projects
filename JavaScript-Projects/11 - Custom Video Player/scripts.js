/* Get Our Elements*/
const player = document.querySelector('.player');
//next we are going to get the viewer which is in the player div
const video = player.querySelector('.viewer');
const progress = player.querySelector('progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');




/*build the functions*/
//this function will toggle play or pause when it is run
function togglePlay(){
    if(video.paused){
        video.play();
        //if the video is paused and this function is run then it will play the video
    }else{
        video.pause();
        //if the video is playing and this function is run then it will pause the video
    }
}

function updateButton(){
    console.log('update the button')
    //here we are checking if the video is poaused
    // if it is we will add a play icon if not a puase icon
    const icon = this.pause ? '►' : '❚ ❚';
    toggle.textContent = icon
}



/*Hook up event Listeners*/
// here we are gonna listen for the click and play event and run the togglePlay function if a click happens
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay); 

// when the video is played or paused update the button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);



// will continue tomorrow