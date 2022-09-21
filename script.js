
const vidCheck = document.querySelector('.vp-js')
const vidSrc = vidCheck.getAttribute('src')

function loadCSS() {
    const loadCSS = document.createElement('style')

    loadCSS.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

.video-container {
    position:relative;
    width: 90%;
    max-width: 1000px;
    display:flex;
    justify-content: center;
    margin-inline:auto;
  }
  video {
    width:100%
  }
  
  .video-controls-container::before {
    content:'';
    position: absolute;
    bottom:0;
    background:linear-gradient(to top, rgb(0 0 0 / 75%), transparent);
    width:100%;
    aspect-ratio:6/1;
    z-index:-1;
    pointer-events: none;
  }
  .video-controls-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    align-items:center;
    z-index: 100;
    opacity:0;
    transition: opacity 150ms ease-in-out;
  }
  
  .video-container:hover .video-controls-container,
  .video-container:focus-within .video-controls-container,
  .video-container.paused .video-controls-container {
    opacity:1;
  }
  .video-controls-container .controls {
    display:flex;
    gap: .5rem;
    padding: .25rem;
    align-items:center;
  }
  .video-controls-container .controls button {
    background: none;
    border:none;
    color:inherit;
    padding:0;
    align-items:center;
    height:30px;
    width:30px;
    font-size:19px;
    cursor: pointer;
    opacity: .78;
    transition: opacity 150ms ease-in-out;
  }
  
  .video-controls-container .controls button.speed-btn {
    font-family:'Russo One';
    font-size:16px;
    width:3.25rem;
    height:1.5rem;
    color:whitesmoke;
    transform: translateY(.5px);
    opacity:.8;
    letter-spacing: 1px;
    border:.04rem solid whitesmoke;
    overflow:hidden;
  }
  button.speed-btn:hover {
    opacity:.8;
  
  }
  .video-controls-container .controls button:hover  {
    opacity: 1;
  }
  .video-container.paused  .pause-icon {
    display:none;
  }
  .video-container .pause-icon {
    transform: translateY(-2.5px);
    opacity: .9;
  }
  .play-icon {
    transform: translateY(-1.75px);
  }
  .video-container:not(.paused) .play-icon {
    display:none;
  }
  .video-container.theater {
    max-width:initial;
    width:100%;
    max-height:90vh;
  }
  .video-container.full-screen {
    max-width:initial;
    width:100%;
    max-height:100vh;
  }
  .video-container.theater .tall {
    display:none;
  }
  .video-container:not(.theater) .wide {
    display: none;
  } 
  .video-container.full-screen .open {
    display:none;
  }
  .video-container:not(.full-screen) .close {
    display: none;
  } 
  .volume-high-icon,
  .volume-low-icon,
  .volume-muted-icon {
    display: none;
  }
  
  .video-container[data-volume-level="high"] .volume-high-icon {
    display:block;
  }
  
  .video-container[data-volume-level="low"] .volume-low-icon {
    display:block;
  }
  
  .video-container[data-volume-level="muted"] 
  .volume-muted-icon {
    display:block;
  }
  .volume-container {
    display: flex;
    align-items:center;
  
  }
  .volume-slider {
    width: 0px;
    transition: width 10ms ease-in-out, transform 10ms ease-in-out;
    transform-origin: left;
    transform: scaleX(0);
    accent-color:hsl(30 50% 77%);
  }
  .volume-container:hover .volume-slider, 
  .volume-slider:focus-within {
    width:4rem;
    transform: scaleX(1);
  }
  .duration-container {
    display: flex;
    align-items:center;
    gap:.355rem;
    flex-grow:1;
    font-family:'Russo One';
    letter-spacing: 2.5px;
    opacity:.3;
  }
  .duration-container:hover {
    transform:scale(.98) skewX(-17deg) translateY(2px);
    opacity:.8;
  }
  .espytitle {
    font-family:'Russo One';
    font-style:italic;
    margin-right:115px;
    letter-spacing:2px;
  }
  @media (max-width:500px) {
  .video-controls-container .controls button.speed-btn
  {
    width:2rem;
    height:.61rem;
      font-size:.4rem;
    }
  }
  @media screen and (min-width:501px) and (max-width:599px) {
    .video-controls-container .controls button.speed-btn
     {
        width:2.25rem;
        height:1rem;
            font-size:.5rem;
        }
    }`
        document.body.appendChild(loadCSS)
}
function loadHTML() {
if(vidCheck.classList.contains("vp-js")) {
    const videoDiv = document.createElement('div')
    videoDiv.classList.add('video-container', 'paused', "video-div", 'vp-js')
    videoDiv.setAttribute('data-volume-level', 'low')
    videoDiv.innerHTML = `
    <div class="video-controls-container">
        <div class="timeline-container">
       </div>
        <div class="controls">
            
            <button class="play-pause-btn">
            <svg class="play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
              <svg class="pause-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
              </svg></button>
    
         <div class="volume-container">
           <button class="mute-btn">
            <svg class="volume-high-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
            <svg class="volume-low-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" />
            </svg>
            <svg class="volume-muted-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
            </svg>
          </button>
          <input type="range" min="0" max="1" step="any" value="1" class="volume-slider">
    </div>
            <div class="duration-container">
                <div class="current-time">0:00 </div>
                / 
                <div class="total-time"></div>
            </div> 
            <div class="espytitle">espyresiduals</div>
    <button class="speed-btn wide-btn">1X</button>
    <button class="mini-player-btn">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
        </svg>
      </button>
      <button class="theater-btn">
        <svg class="tall" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
        </svg>
        <svg class="wide" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>
        </svg>
      </button>
      <button class="full-screen-btn">
          <svg class="open" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
          <svg class="close" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
          </svg>
      </button>
    </div>
    </div>
    <video src="${vidSrc}"></video>
    </div>`
    document.body.append(videoDiv)
    vidCheck.remove()
}
}
loadCSS()
function everythingElse() {
const playPauseBtn = document.querySelector('.play-pause-btn')
const videoContainer = document.querySelector('.video-container')
/////////////
const fullScreenBtn = document.querySelector('.full-screen-btn')
const miniPlayerBtn = document.querySelector('.mini-player-btn')
const theaterBtn = document.querySelector('.theater-btn')
///////////////////
const muteBtn = document.querySelector('.mute-btn')
const volumeSlider = document.querySelector('.volume-slider')
/////////////
const currentTimeElem = document.querySelector('.current-time')
const totalTimeElem = document.querySelector('.total-time')
////////
const speedBtn = document.querySelector('.speed-btn')
//////////
const video = document.querySelector('video')

//////GAME CHANGING FUNCTION RIGHT HERE//////////////
const listen = (target, event, callback) => { 
  target.addEventListener(event, callback)  
}

listen(document, 'keydown', e => {
    const tagName = document.activeElement.tagName.toLowerCase()
    if (tagName === 'input') return
    switch (e.key.toLowerCase()) {
        case " ":
        case "k":
        togglePlay()
        break
        case "f":
        toggleFullScreenMode()
        break
        case "t":
        toggleTheaterMode()
        break
        case "i":
        toggleMiniPlayerMode()
        break
        case "m":
        toggleMute()
        break    
        case "arrowleft":
        case "j":
        skip(-7)
        break    
        case "arrowright":
        case "l":
        skip(7)
        break
        }
} )
/////////// PLAYBACK SPEED
listen(speedBtn, 'click', e => {let newPlaybackRate = video.playbackRate + .25
  if (newPlaybackRate > 2) newPlaybackRate = .25
  video.playbackRate = newPlaybackRate
  speedBtn.textContent = `${newPlaybackRate}X`})
////// DURATION
listen(video, 'loadeddata', () => {
  totalTimeElem.textContent = formatDuration(video.duration)
})
listen(video, 'timeupdate', () => {
    currentTimeElem.textContent = formatDuration(video.currentTime)
})
const leadingZeroFormatter = new Intl.NumberFormat(undefined, {minimumIntegerDigits: 2})


function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {return `${minutes}:${leadingZeroFormatter.format(seconds)}`}
    else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`}
    }

    function skip(duration) {
        video.currentTime += duration
    }
/////// VOLUME / MUTE 
listen(muteBtn, 'click', () => {video.muted = !video.muted //' function toggleMute()
})
listen(volumeSlider,'input', e => { 
    video.volume = e.target.value
    video.muted = e.target.value === 0
})

listen(video, 'volumechange', () => {
    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0
        volumeLevel = "muted"
    } else if (video.volume >= .48) {
        volumeLevel = "high"
    } else { 
        volumeLevel = "low"
    }
    videoContainer.dataset.volumeLevel = volumeLevel
})
//VIEW MODES
listen(theaterBtn, 'click', e => {videoContainer.classList.toggle('theater')
})
listen(fullScreenBtn, 'click', e => {document.fullscreenElement == null ? videoContainer.requestFullscreen() : document.exitFullscreen()})

listen(miniPlayerBtn, 'click', e => {
  videoContainer.classList.contains('mini-player') ? document.exitPictureInPicture() : video.requestPictureInPicture()})

listen(document,'fullscreenchange', () => {
    videoContainer.classList.toggle('full-screen', document.fullScreenElement)
})
listen(video,'enterpictureinpicture', () => {
    videoContainer.classList.add('mini-player')
})
listen(video,'leavepictureinpicture', () => {
    videoContainer.classList.remove('mini-player')
})

listen(playPauseBtn, 'click', togglePlay)
listen(video, 'click', togglePlay)

function togglePlay() {
    video.paused ? video.play() : video.pause()
}

listen(video, 'play', () => {
  videoContainer.classList.remove('paused')
  })
listen(video, 'pause',() => {
  videoContainer.classList.add('paused')
} )

} //everythingelse close bracket


loadHTML()
everythingElse()