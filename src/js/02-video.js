import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer - current - time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

player.on('timeupdate', throttle(onPayerTime, 1000));

function onPayerTime(currentTime) { localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime)); }

const timeForPlay = localStorage.getItem(STORAGE_KEY);
const parseTimePlay = JSON.parse(timeForPlay);

console.log(parseTimePlay.seconds);

player
  .setCurrentTime(parseTimePlay.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });


