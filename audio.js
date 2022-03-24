// const music = new Audio('sample.wav')
// music.play()
// music.loop =true;
// music.playbackRate = 2;
// music.pause()


 const songs = fetch("https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com",
		"x-rapidapi-key": "3721055eabmsh89a7bacc6011dd8p163a5cjsnb751a8304f94"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


