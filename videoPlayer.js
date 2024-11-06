//import Plyr from 'plyr';
// npm i plyr

//Include Stylesheet in head
//<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />

//Paste in custom CSS
/*Video Player CSS controls*/
// html {
//     --plyr-color-main: white;
//     --plyr-tab-focus-color: transparent;
//     --plyr-video-control-color-hover: black;
//     --plyr-control-icon-size: 1.5em;
//     --plyr-range-thumb-height: 0px;
//     --plyr-range-track-height: 0.6em;
//   }

//   .plyr__control--overlaid {
//     color: black;
//   }

//   .plyr__volume {
//     width: auto;
//     min-width: auto;
//     max-width: auto;
//   }

//   .plyr {
//     width: 100%;
//     height: 100%;
//   }
//   .plyr video {
//     object-fit: cover;
//   }
//   .contain-video video {
//     object-fit: contain;
//   }

//   .hide-cover .plyr_cover {
//     opacity: 0;
//     pointer-events: none;
//   }
//   .hide-cover .plyr_cover-img {
//     transform: scale(1.3);
//   }

export const videoPlayer = function () {
  //selectors
  const COMPONENT = '.plyr_component';
  //custom classes
  const VIDEO_CLASS = '.plyr_video';
  const COVER_CLASS = '.plyr_cover';
  const HIDE_COVER_CLASS = 'hide-cover';
  const PAUSE_TRIGGER_CLASS = '.plyr_pause-trigger';
  const CONTAIN_CLASS = 'contain-video';
  const settings = {
    autoplay: false,
    loop: false,
    mute: false,
    hideControls: true,
  };
  //plyr.io classes
  const PLAYING_CLASS = '.plyr--playing';

  const components = [...document.querySelectorAll(COMPONENT)];
  if (components.length === 0) return;

  components.forEach((component, index) => {
    // create plyr settings
    const video = component.querySelector(VIDEO_CLASS);
    const cover = component.querySelector(COVER_CLASS);
    const pauseTrigger = component.querySelector(PAUSE_TRIGGER_CLASS);

    //optional
    //get settings from the components
    const loopSetting = attr(settings.loop, component.getAttribute('data-player-loop'));
    let muteSetting = attr(settings.mute, component.getAttribute('data-player-mute'));
    const showCoverOnPause = attr(false, component.getAttribute('data-player-show-cover-on-pause'));

    let player = new Plyr(video, {
      controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
      hideControls: settings.hideControls,
      loop: { active: loopSetting },
      resetOnEnd: true,
    });

    // custom video cover
    if (cover) {
      cover.addEventListener('click', () => {
        player.play();
      });
    }

    player.on('ended', (event) => {
      component.classList.remove(HIDE_COVER_CLASS);
    });
    //if attribute is set to true show the cover on pause of video
    if (showCoverOnPause) {
      player.on('pause', (event) => {
        component.classList.remove(HIDE_COVER_CLASS);
      });
    }

    // pause other playing videos when this one starts playing
    player.on('play', (event) => {
      //remove the hide cover class for all components
      components.forEach((item, index) => {
        item.classList.remove(HIDE_COVER_CLASS);
      });
      //add the hidecover class to the current component
      component.classList.add(HIDE_COVER_CLASS);
      //find the component that was previously playing
      let prevPlayingComponent = document.querySelector(PLAYING_CLASS).closest(COMPONENT);
      //if the previous component exists and it is not the current one pause it
      if (prevPlayingComponent && prevPlayingComponent !== component) {
        prevPlayingComponent.find(PAUSE_TRIGGER_CLASS)[0].click();
      }
    });

    //pause component on click trigger
    pauseTrigger.addEventListener('click', () => {
      player.pause();
    });
    // exit full screen when video ends
    player.on('ended', (event) => {
      if (player.fullscreen.active) {
        player.fullscreen.exit();
      }
    });
    // set video to contain instead of cover when in full screen mode
    player.on('enterfullscreen', (event) => {
      component.classList.add(CONTAIN_CLASS);
    });
    player.on('exitfullscreen', (event) => {
      component.classList.remove(CONTAIN_CLASS);
    });
  });
};
