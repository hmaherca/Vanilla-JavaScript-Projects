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

//this function will handle updating the icon between pause and play
function updateButton(){
    console.log('update the button')
    //here we are checking if the video is poaused
    // if it is we will add a play icon if not a puase icon
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

//this function will handle the skip buttons
function skip(){
    //console.log(this.dataset.skip);
    //parsefloat converts the string into a true number because this.dataset.skip is a string not a true number yet
    video.currentTime += parseFloat(this.dataset.skip);
}

//this functions handles change events for the volume and speed of the video
function handleRangeUpdate(){
    // console.log(this.value);
    // console.log(this)
    video[this.name]=this.value;
}


//this will handle a change to the progress bar, its elemnt has a class called flex basis which controls how far the progress bar is 0-100%
function handleProgess(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `{percent}%`
}



/*Hook up event Listeners*/
// here we are gonna listen for the click and play event and run the togglePlay function if a click happens
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay); 

// when the video is played or paused update the button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// listening for a timeupdate and will run the handleProgress function
video.addEventListener('timeupdate', handleProgress);

//we are gonna give every button that has a data-skip attribute an event listener that will listen for a click event that will trigger the function 'skip'
skipButtons.forEach(button=>button.addEventListener('click', skip));
// listen for a change event and run the handleRangeUpdate function for every element that has a range attribute
ranges.forEach(range=>range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range=>range.addEventListener('mousemove',handleRangeUpdate));



// will continue tomorrow