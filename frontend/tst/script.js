//script.js

// npx nodemon app.js

// localhost




console.log("welcome to spotify");

let songIndex = 0;

// Making new audio element object.
//let audioElement = new Audio('songs/1.mp3');
let audioElement = new Audio();

//_______________________________________________________________
//	ELEMENTS BASED ON CLASS-NAME.

let songItems = Array.from(document.getElementsByClassName('songItem'));
//  let timeStamp = Array.from(document.getElementsByClassName('timeStamp'));

let songPlayImg = Array.from(document.getElementsByClassName('songplayimg'));

//________________________________________________________________
// ELEMENTS BASED ON IDs

let songTimer = document.getElementById('timer');
let songDuration = document.getElementById('duration');
let masterSongName = document.getElementById('masterSongName');
let playbutton = document.getElementById('playbtn');

//________________________________________________________________
// ARRAY CONTAIN INFO ABOUT SONG ITEMS.
let songs =[{SongName: "lifeStory", filPath:"songs/1.mp3", coverPath:"1.jpg"},{SongName: "Happ morning", filPath:"songs/2.mp3", coverPath:"2.jpg"},{SongName: "Cinematic music", filPath:"songs/3.mp3", coverPath:"3.jpg"},{SongName: "stray", filPath:"songs/4.mp3", coverPath:"4.jpg"}]

// SETTING SONG ITEMS NAME, COVER-IMAGE.
songItems.forEach((element,i)=>{
	console.log(element,i);
	element.getElementsByTagName('img')[0].src = songs[i].coverPath;
	element.getElementsByClassName('songName')[0].innerText = songs[i].SongName;
	element.getElementsByClassName('songplayimg')[0].src = "./play.png";
//	element.getElementsByClassName('timeStamp')[0].innerText = songs[i].parseInt(audioElement.duration);;
//	element.getElementsByClassName('timeStamp')[0].innerText = parseInt(audioElement.duration);

//audioElement[i].duration = `songs/${i}.mp3`;
	//	let songTime =audioElement.duration;

//	element.getElementsByClassName('timeStamp')[0].innerText  = audioElement.duration;
})

//________________________________________________________________
// DEFINING ELEMENTS FOR PROGRESS-BAR.
let Play = document.getElementById('play');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


/*
	
songPlayImg.forEach((element)=>{

let a = "./covers/pause.png";						
let b = "./covers/play.png";					
	if(element.src == b  || audioElement.currentTime<=0 )
	{
		element.src = a;
	}
	else
	{
			element.src = b;
	}
			
		})
	*/	



// MAKING CLICK FUNCTION FOR PLAY AND PAUSE FUNCTION.
 Play.addEventListener('click', ()=>{
	if(audioElement.paused || audioElement.currentTime<=0 )
	{
		audioElement.play();
		gif.style.opacity = 1;
		playbutton.src = "pause.png";
		
		
	}else{
		audioElement.pause();
		gif.style.opacity = 0;
		playbutton.src = "play.png";
		
		songPlayImg.forEach((element)=>{
			element.src = "play.png";
		})
		
	}

})


// Listen to events 'UPDATING EVENTS'
audioElement.addEventListener('timeupdate', ()=>{
	console.log('timeupdate');
	// UPDATING SEEKBAR.
	
	progress= parseInt((audioElement.currentTime/audioElement.duration)* 100);
	console.log(progress);
	myProgressBar.value = progress; 
	
	songDuration.innerText = parseInt(audioElement.duration);
	timer.innerText = parseInt(audioElement.duration-audioElement.currentTime);

});

	

myProgressBar.addEventListener('change', ()=>{
	//console.log('timeupdate');
	// updateSeekbar
	
audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;

});
/*
timeStamp.forEach((element)=>{
element.innerText = parseInt(audioElement.duration);

})*/
//________________________________________________________________
// SEEKBAR MENU BUTTONS FUNCTION.
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
	element.addEventListener('click', (e)=>{
		console.log(e.target);
	
	songIndex = parseInt(e.target.id);
	
		audioElement.src = `${songIndex+1}.mp3`;
	//	let songTime = parseInt(audioElement.duration);



let a = "pause.png";						
let b = "play.png";					
	if(element.src == b  || audioElement.currentTime<=0 || audioElement.paused )
	{
		element.src = a;
	}
	else
	{
			element.src = b;
	}
		


//	timeStamp.innerText = songTime;
	
	masterSongName.innerText = songs[songIndex].SongName;

	audioElement.currentTime = 0;
	audioElement.play();
	playbutton.src = "pause.png";
	})
	
})

document.getElementById('next').addEventListener('click', ()=>{
	if(songIndex >= 3){
		songIndex = 0;
	}
	else{
	songIndex += 1; 
	}
	audioElement.src = `${songIndex+1}.mp3`;
	masterSongName.innerText = songs[songIndex].SongName;
	audioElement.currentTime = 0;
	audioElement.play();
})

document.getElementById('previous').addEventListener('click', ()=>{
	if(songIndex <= 0){
		songIndex = 3;
	}
	else{
	songIndex -= 1; 
	}
	audioElement.src = `${songIndex+1}.mp3`;
	audioElement.currentTime = 0;
	masterSongName.innerText = songs[songIndex].SongName;
	audioElement.play();
})