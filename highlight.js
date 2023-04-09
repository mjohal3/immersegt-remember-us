
/* global AFRAME */

AFRAME.registerComponent('highlight', {
    init: function () {
      //var bestMirrorEl = document.querySelectorAll('#BestMirror')
      var bestPictures = this.buttonEls = document.querySelectorAll(".BestPicture")
      console.log("UR MOM")
      //var buttonEls = this.buttonEls = this.el.querySelectorAll('.menu-button');
      //var backgroundEl = document.querySelector('#background');
      this.onClick = this.onClick.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.reset = this.reset.bind(this);
      //backgroundEl.addEventListener('click', this.reset);
      /*
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('mouseenter', this.onMouseEnter);
        buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
        buttonEls[i].addEventListener('click', this.onClick);
      }
      */
      var materials = []
      for(var i = 0; i < bestPictures.length; ++i) {
        materials[i] = bestPictures[i].materials;
        bestPictures[i].addEventListener('mouseenter', this.onMouseEnter);
        bestPictures[i].addEventListener('mouseleave', this.onMouseLeave);
        bestPictures[i].addEventListener('click', this.onClick);
      }
    },
  
    onClick: function (evt) {
      evt.target.pause();
      //evt.target.setAttribute('material', 'color', '#046de7');
      this.el.addState('clicked');
      //evt.target.object3D.scale.set(1.2, 1.2, 1.2);
    },
  
    onMouseEnter: function (evt) {
      var buttonEls = this.buttonEls;
      //evt.target.setAttribute('material', 'color', '#046de7');
      evt.target.object3D.scale.set(1.2, 1.2, 1.2);
      for (var i = 0; i < buttonEls.length; ++i) {
        if (evt.target === buttonEls[i]) { continue; }
        evt.target.object3D.scale.set(1,1,1);
        //buttonEls[i].setAttribute('material', 'color', 'white');
      }
    },
  
    onMouseLeave: function (evt) {
      if (this.el.is('clicked')) { return; }
      evt.target.object3D.scale.set(1,1,1);
      //evt.target.setAttribute('material', 'color', 'white');
    },
  
    reset: function () {
      var buttonEls = this.buttonEls;
      for (var i = 0; i < buttonEls.length; ++i) {
        this.el.removeState('clicked');
        buttonEls[i].play();
        buttonEls[i].emit('mouseleave');
      }
    }
  });