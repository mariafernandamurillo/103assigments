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
let profilePicture = "folder/profile_picture.png";
let coverPicture = "folder/cover_picture.png";
let interfaceLaunguage = ["Spanish", "English", "...", "Language n" ];
let interfazMode = ["Device theme", "Dark", "Light "];
let notificationPreferences = "True or False";
let paymentMethod = ["Credit card", "Debit card"];

document.write(
    `
    <p class="text"> 1. Subscribed =   ${isSubscribed}</p>
    <p class="text"> 2. Reproduction List =   ${reproductionList}</p>
    <p class="text"> 3. Video Volume = ${videoVolume [5]}</p>
    <p class="text"> 4. Liked video =   ${likedVideo}</p>
    <p class="text"> 5. A comment =   ${videoComment}</p>
    <p class="text"> 6. Video title = ${videoTitle}  
    <p class="text"> 7. Video description = ${videoDescription}</p>
    <p class="text"> 8. Name of the channel = ${channelName}</p>
    <p class="text"> 9. Uploeaded videos list = ${uploadedVideosList}</p>
    <p class="text"> 10. Instagram link in the cover = ${instagramLink}</p>
    <p class="text"> 11. Subscriptions = ${subscriptions}</p>
    <p class="text"> 12.  Channel description = ${channelDescription}</p>
    <p class="text"> 13. Community posts = ${communityPosts}</p>
    <p class="text"> 14. Like in a comment = ${likedComment}</p>
    <p class="text"> 15. The profile picture = ${profilePicture}</p>
    <p class="text"> 16. The cover picture = ${coverPicture}</p>
    <p class="text"> 17. The interface language = ${interfaceLaunguage}</p>
    <p class="text"> 18. Interface mode  = ${interfazMode}</p>
    <p class="text"> 19. Notifications preferences  = ${notificationPreferences}</p>
    <p class="text"> 20. Payment method  = ${paymentMethod}</p>
    </p>
    `);