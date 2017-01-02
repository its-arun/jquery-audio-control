/**
 * @author Arun Chaudhary <chaudhary.arun483@gmail.com>
 * Copyright (c) 2017 Arun Chaudhary - released under MIT License
 * https://github.com/its-arun/jquery-audio-control
**/
var app = {
    bg_music: new Audio(),
};
jQuery(document).ready( function($) {
	app.bg_music.src = "/sounds/mymusic.mp3"; //add your music source here
    app.bg_music.autoplay = false; //Want audio be to played automatically when script is called?
    app.bg_music.volume = 0.50; //Volume controller 0-1
});