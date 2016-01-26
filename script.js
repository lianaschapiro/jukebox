// function playSong(){
// 	document.getElementById("danza").play();
// 	Jukebox.loadSong(0);
// }

var Jukebox = {

	currentNum: 0,

	songs: ["danza", "noone", "farmhouse", "howcome"],

	info: {"Danza Kuduro": "Don Omar", "No One": "Alicia Keys", "Farmhouse": "Phish", "How Come You Don't Call Me": "Alicia Keys"},

	play: function(){
		document.getElementById(this.songs[this.currentNum]).play();
		var songAtCurrentNum = Object.keys(this.info)[this.currentNum];
		$("#titles").text(songAtCurrentNum);
		$("#artists").text(this.info[songAtCurrentNum]);
	},
	pause: function(){
		document.getElementById(this.songs[this.currentNum]).pause();
	},
	prev: function(){
		this.pause();
		document.getElementById(this.songs[this.currentNum]).currentTime=0;
		
		if (this.currentNum > 0){
			this.currentNum = this.currentNum - 1;
		}else{
			this.currentNum = 3
		};

		document.getElementById(this.songs[this.currentNum]).play();
		var songAtCurrentNum = Object.keys(this.info)[this.currentNum];
		$("#titles").text(songAtCurrentNum);
		$("#artists").text(this.info[songAtCurrentNum]);
	},
	next: function(){
		this.pause();
		document.getElementById(this.songs[this.currentNum]).currentTime=0;
		
		if (this.currentNum < (this.songs.length - 1)){
			this.currentNum = this.currentNum + 1;
		}else{
			this.currentNum = 0
		};
		
		document.getElementById(this.songs[this.currentNum]).play();
		var songAtCurrentNum = Object.keys(this.info)[this.currentNum];
		$("#titles").text(songAtCurrentNum);
		$("#artists").text(this.info[songAtCurrentNum]);
	}
}

$(document).ready(function(){
	i = 0

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
		Jukebox.next(i)
	})

});


