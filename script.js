var Jukebox = {

	currentNum: 0,

	songs: ["danza", "noone", "farmhouse", "howcome"],

	info: {"Danza Kuduro": "Don Omar", "No One": "Alicia Keys", "Farmhouse": "Phish", "How Come You Don't Call Me": "Alicia Keys"},

	play: function(){
		document.getElementById(this.songs[this.currentNum]).play();
		//set variable to grab specific keys in the "info" hash
		var songAtCurrentNum = Object.keys(this.info)[this.currentNum];
		//this will put text on the screen to show song name
		$("#titles").text(songAtCurrentNum);
		// and this will show song artist (grabbing the values from the "info" hash)
		$("#artists").text(this.info[songAtCurrentNum]);
	},
	pause: function(){
		document.getElementById(this.songs[this.currentNum]).pause();
	},
	prev: function(){
		//pauses current song
		this.pause();
		//rewinds current back to the beginning
		document.getElementById(this.songs[this.currentNum]).currentTime=0;
		//loops through array to find previous song
		if (this.currentNum > 0){
			this.currentNum = this.currentNum - 1;
		}else{
			this.currentNum = 3
		};
		//plays new [previous] song
		document.getElementById(this.songs[this.currentNum]).play();
		//displays title/artist info in the DOM
		var songAtCurrentNum = Object.keys(this.info)[this.currentNum];
		$("#titles").text(songAtCurrentNum);
		$("#artists").text(this.info[songAtCurrentNum]);
	},
	next: function(){
		//pauses current song
		this.pause();
		//rewinds current back to the beginning
		document.getElementById(this.songs[this.currentNum]).currentTime=0;
		//loops through array to find next song
		if (this.currentNum < (this.songs.length - 1)){
			this.currentNum = this.currentNum + 1;
		}else{
			this.currentNum = 0
		};
		//plays new [next] song
		document.getElementById(this.songs[this.currentNum]).play();
		//displays title/artist info in the DOM
		var songAtCurrentNum = Object.keys(this.info)[this.currentNum];
		$("#titles").text(songAtCurrentNum);
		$("#artists").text(this.info[songAtCurrentNum]);
	}
}

// this makes the buttons perform their specific functions
$(document).ready(function(){

	$("#play").on("click", function(){
		Jukebox.play()
	})

	$("#pause").on("click", function(){
		Jukebox.pause()
	})

	$("#prev").on("click", function(){
		Jukebox.prev()
	})

	$("#next").on("click", function(){
		Jukebox.next()
	})

});


