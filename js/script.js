/* global $ */

// BELOW Update the songs array with four of your favorites songs.
let links = [
    "https://www.youtube.com/embed/eTuR-e6aLRo",
    "https://www.youtube.com/embed/XReCgXhOg3E",
    "https://www.youtube.com/embed/OmEPFmyKO74",
    "https://www.youtube.com/embed/4AxjXuReUIs",
    "https://www.youtube.com/embed/w6HEUZW6HTc",
    "https://www.youtube.com/embed/ypsQ-2BMLDU",
    "https://www.youtube.com/embed/WkdtmT8A2iY",
    "https://www.youtube.com/embed/vWT9CImTXD0",
    "https://www.youtube.com/embed/o_3yYKB40N4",
    ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
let songs =[
    "Getting Closer",
    "11:11",
    "Love Scenario",
    "My Page",
    "My I (Chinese Ver)",
    "Forever",
    "Why",
    "Shangri-La",
    "Star Blossom",
    ];

let images_links = [
    "http://pic.xiami.net/images/album/img57/82/5c458c1fdb63b_4114157_1548061727.jpg",
    "http://pic.xiami.net/images/album/img54/159/581886e938121_7951354_1478002409.jpg",
    "http://pic.xiami.net/images/album/img16/174/5a699d455b491_8704716_1516870981.jpg",
    "http://pic.xiami.net/images/album/img24/138/599533789cd03_6937124_1502950264.jpg",
    "http://pic.xiami.net/images/album/img10/31/5922aa8f05e5a_1576110_1495444111.jpg",
    "http://pic.xiami.net/images/album/img75/134/596c27dfc7698_6713575_1500260319.jpg",
    "http://pic.xiami.net/images/album/img74/64474/21003561651466773088.jpg",
    "http://pic.xiami.net/images/album/img56/164/59196f232abf4_8201956_1494839075.jpg",
    "http://pic.xiami.net/images/album/img86/190/59e06a731d7fc_9514286_1507879539.jpg",
    
    ];

let artists = [
    "Seventeen",
    "TAEYEON",
    "iKon",
    "NCT Dream",
    "JUN x The8",
    "EXO",
    "TAEYEON",
    "VIXX",
    "DOYOUNG x SEJEONG"
    ];

let songLength = [
    "03:04",
    "03:44",
    "03:30",
    "03:47",
    "03:04",
    "03:51",
    "03:28",
    "03:22",
    "03:31",
    ];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


songs.forEach(function (a){
    $("#songs").append("<p>"+ a + "</p><br>");
    //$("#songs").css("height","100px");
});

links.forEach(function(vid) {
    $("#links").append(
        "<iframe src='>" + vid + "'</iframe>"
        );
});

images_links.forEach(function(imgLink){
    $("#images").append("<img src=' " + imgLink + " '> <br>");
});

artists.forEach(function(idol) {
    $("#artists").append("<p>"+ idol + "</p> <br>");
});

songLength.forEach(function(x){
    $("#lengths").append("<p>"+ x + "</p> <br>");
});



function displaySongInfo() {
    $(".column").empty();
    
    songs.forEach(function(a) {
        $("#songs").append("<p>"+ a + "</p><br>");
    });
    
    links.forEach(function(b) {
        $("#links").append("<iframe src='"+ b +"'></iframe> <br>");
    });
    
    images_links.forEach(function(c) {
        $("#images").append("<img src=' " + c + " '> <br>" );
    });
    
    artists.forEach(function(d) {
        $("#artists").append("<p>"+ d + "</p> <br>");
    });
    
    songLength.forEach(function(e) {
        $("#lengths").append("<p>"+ e + "</p> <br>");
    });
}


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $(".column").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    let a = $("#song").val();
    let b = $("#artist").val();
    let c = $("#length").val();
    let d = $("#image").val();
    let e = $("#link").val();
    
    songs.push(a);
    artists.push(b);
    songLength.push(c);
    images_links.push(d);
    links.push(e);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    $("input").val('');
});

displaySongInfo();
