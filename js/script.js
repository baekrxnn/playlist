/* global $ */

// BELOW Update the songs array with four of your favorites songs.
let links = [
    "https://www.youtube.com/watch?v=cr_lx0GSfrA",
    "https://www.youtube.com/watch?v=XReCgXhOg3E",
    "https://www.youtube.com/watch?v=OmEPFmyKO74",
    "https://www.youtube.com/watch?v=4AxjXuReUIs",
    ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
let songs =[
    "Getting Closer",
    "11:11",
    "Love Scenario",
    "My Page",
    ];

let images_links = [
    
    
    ];

let images_urls = [
    
    
    ];

let artists = [
    "Seventeen",
    "Taeyeon",
    "iKon",
    "NCT Dram"
    
    ];

let songLength = [
    
    
    ];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


songs.forEach(function (a){
    $("#songs").append(a);
});

links.forEach(function(vid) {
    $("#links").html("<a href='"+vid+"'></a>");
});

images_links.forEach(function(imgLink){
    $("#images").append(imgLink);
});

artists.forEach(function(idol) {
    $("#artists").append(idol);
});

songLength.forEach(function(x){
    $("#lengths").append(x);
});

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
