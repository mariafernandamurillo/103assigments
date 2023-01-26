//Variables

//As user (person who see the videos)
let isSubscribed = true;
let reproductionList = ["Video 1", "Video 2", "...", "Video n" ];
let videoVolume = [1, 2, 3, 4, 5, 6, 7, 8, 10];

//As content creator
let videoTitle = "My first video";

document.write(
    `
    <h3>As user</h3>
    <p class="text"> 1. Subscribed =   ${isSubscribed}</p>
    <p class="text"> 2. Reproduction List =   ${reproductionList}.</p>
    <p class="text"> 3. Video Volume = ${videoVolume [5]}</p>


    
    <br>
    
    <h3>As content creator</h3>
    <p class="text"> Video title =   ${videoTitle}
    </p>
    `);