//Variables

//As user (person who see the videos)
let isSubscribed = true;
let reproductionList = ["Video 1", "Video 2", "...", "Video n" ];
let videoVolume = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let likedVideo = true;
let videoComment = "My comment in a video";

//As content creator
let videoTitle = "My first video";
let videoDescription = "The video description";
let channelName = "Name of my channel";
let uploadedVideosList = ["Video 1", "Video 2", "...", "Video n" ];
let instagramLink = "instagram.com/instagram";
let subscriptions = ["Channel 1", "...", "Channel n"];
let channelDescription = "The channel description"; 
let communityPosts = "A community post";
let likedComment = true;
let profilePicture = "images/profile_picture.png";

document.write(
    `
    <h3>As user</h3>
    <p class="text"> 1. Subscribed =   ${isSubscribed}</p>
    <p class="text"> 2. Reproduction List =   ${reproductionList}</p>
    <p class="text"> 3. Video Volume = ${videoVolume [5]}</p>
    <p class="text"> 4. Liked video =   ${likedVideo}</p>
    <p class="text"> 5. A comment =   ${videoComment}</p>
    <p class="text"> 6. = ${}</p>
    <p class="text"> 7. = ${}</p>
    <p class="text"> 8. = ${}</p>
    <p class="text"> 9. = ${}</p>
    <p class="text"> 10. = ${}</p>
    <br>
    
    <h3>As content creator</h3>
    <p class="text"> 1. Video title = ${videoTitle}  
    <p class="text"> 2. Video description = ${videoDescription}</p>
    <p class="text"> 3. Name of the channel = ${channelName}</p>
    <p class="text"> 4. Uploeaded videos list = ${uploadedVideosList}</p>
    <p class="text"> 5. Instagram link in the cover = ${instagramLink}</p>
    <p class="text"> 6. Subscriptions = ${subscriptions}</p>
    <p class="text"> 7.  Channel description = ${channelDescription}</p>
    <p class="text"> 8. Community posts = ${communityPosts}</p>
    <p class="text"> 9. Like in a comment = ${likedComment}</p>
    <p class="text"> 10. The profile picture = ${profilePicture}</p>
    </p>
    `);