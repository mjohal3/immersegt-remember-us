/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll(".BestPicture")
      //var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
  
      this.movieImageEl;
      this.movieTitleEl = document.querySelector('#movieTitle');
      this.movieDescriptionEl = document.querySelector('#movieDescription');
  
      this.movieInfo = {
        vibingButton: {
          title: 'You Having Fun',
          imgEl: document.querySelector('#vibingImage'),
          description: "In this photo, you look very content and happy, as if you were listening to music that you loved or enjoying a moment of peace. You have a relaxed expression on your face, and it's clear that you're enjoying yourself."
        },
        bestfriendButton: {
          title: 'You With Your Bestfriend',
          imgEl: document.querySelector('#bestfriendImage'),
          description: "This picture captures the bond between you and your best friend, who has been a constant presence in your life for many years. You both look very happy to be together, and it's clear that you share a lot of love and affection for one another."
        },
        daughterButton: {
          title: 'You With Your Daughter',
          imgEl: document.querySelector('#daughterImage'),
          description: "    This photo is a reminder of the special relationship you have with your daughter. You both look very happy to be spending time together, and there's a lot of warmth and love in your expressions."
        },
        grandkidButton: {
            title: 'You With Your Grandkid',
            imgEl: document.querySelector('#grandkidImage'),
            description: "This image captures a moment of joy and laughter as you play with your grandkids. You look very happy to be spending time with them, and it's clear that they bring a lot of joy and happiness into your life. The picture is a reminder of the special bond between grandparents and grandchildren, and the love that you all share as a family."
        },
      };
      console.log(this.movieInfo)
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
      //this.backgroundEl = document.querySelector('#background');
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
      }
      //this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 9999999;
      this.el.object3D.depthTest = false;
      //fadeBackgroundEl.object3D.renderOrder = 9;
      //fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    },
  
    onMenuButtonClick: function (evt) {
        console.log(evt.currentTarget)
      var movieInfo = this.movieInfo[evt.currentTarget.id];
        console.log(movieInfo)
      //this.backgroundEl.object3D.scale.set(1, 1, 1);
  
      this.el.object3D.scale.set(1, 1, 1);
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
      //this.fadeBackgroundEl.object3D.visible = true;
  
      if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
      this.movieImageEl = movieInfo.imgEl;
      this.movieImageEl.object3D.visible = true;
  
      this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
      this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
    },
  
    onBackgroundClick: function (evt) {
      //this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      //this.fadeBackgroundEl.object3D.visible = false;
    }
  });