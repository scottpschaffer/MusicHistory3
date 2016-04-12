"use strict";

function listMusic(){
  // Get element of Add Music div
  let addDiv = document.getElementById("add1");
  // Make addDiv hidden by adding "hidden" class
  addDiv.classList.add("hidden");
  // Make addDiv hidden by removing "visible" class
  addDiv.classList.remove("visible");
  
  // Get element of View List div
  let viewDiv = document.getElementById("view1");
  // Make viewDiv visible by adding "visible" class
  viewDiv.classList.add("visible");
  // Make viewDiv visible by removing "hidden" class
  viewDiv.classList.remove("hidden");

  // For every song in array, edit to remove stray characters (MH2)
  for (let i=0; i<songs.length; i++){
    // For every character in every song in array
    for (let j=0; j<songs[i].length; j++){
      // If character not a letter
      if (!((songs[i][j] >= "a") && (songs[i][j] <= "z") || (songs[i][j] >= "A") && (songs[i][j] <= "Z"))){
        // If ">" then replace with "-"
        if (songs[i][j] === ">"){
          songs[i] = songs[i].replace(">", "-");
        } else if ((songs[i][j] === " ") || (songs[i][j] === "-")){
          // If " " or "-", then skip
          continue;
        } else if ((songs[i][j] == "&") && (songs[i][j-1] === " ") && (songs[i][j+1] === " ")){
          // If "&" is part of title of Guns & Roses (space before and after) then skip
          continue;
        } else {
          // Otherwise replace extraneous character with Null
          songs[i] = songs[i].replace(songs[i][j], "");
        }
      }
    }
  }

  // Get div element to write out songs
  viewDiv.innerHTML = "";
  // For every song
  for (let k=0; k<songs.length; k++){
    // Split song to get title
    var songSplit = songs[k].split("-");
    // Print out Song Title and other info
    viewDiv.innerHTML += "<span class='songTitle'>" + songSplit[0] + "</span> - " + songSplit[1] + "<br>";
  }
  
}
