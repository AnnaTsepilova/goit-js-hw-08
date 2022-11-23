import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('play', function() {
 
});

player.getVideoTitle().then(function(title) {
    
});


const onPlay = function (data) {
    console.log(data);
};

player.on('timeupdate', onPlay);