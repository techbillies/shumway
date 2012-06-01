function MovieClip() {
  this._currentFrame = 1;
  this._framesLoaded = 1;
  this._totalFrames = 1;
  this.trackAsMenu = false;
  this._scenes = [{}];
  this._currentScene = {};
  this._currentLabel = false;
  this._currentFrameLabel = null;
  this.enabled = true;
}

MovieClip.prototype = Object.create(new Sprite, {
  currentFrame: descAccessor(function () {
    return this._currentFrame;
  }),
  framesLoaded: descAccessor(function () {
    return this._framesLoaded;
  }),
  totalFrames: descAccessor(function () {
    return this._totalFrames;
  }),
  totalFrames: descAccessor(function () {
    return this._totalFrames;
  }),
  currentScene: descAccessor(function () {
    return this._currentScene;
  }),
  currentLabel: descAccessor(function () {
    return this._currentLabel;
  }),
  currentFrameLabel: descAccessor(function () {
    return this._currentFrameLabel;
  }),
  currentLabels: descAccessor(function () {
    return this._currentScene.labels;
  }),

  play: descMethod(function () {
    notImplemented();
  }),
  stop: descMethod(function () {
    notImplemented();
  }),
  nextFrame: descMethod(function () {
    notImplemented();
  }),
  prevFrame: descMethod(function () {
    notImplemented();
  }),
  gotoAndPlay: descMethod(function (frame, scene) {
    notImplemented();
  }),
  gotoAndStop: descMethod(function (frame, scene) {
    notImplemented();
  }),
  addFrameScript: descMethod(function () {
    notImplemented();
  }),
  prevScene: descMethod(function () {
    notImplemented();
  }),
  nextScene: descMethod(function () {
    notImplemented();
  }),
  isPlaying: descMethod(function () {
    notImplemented();
  })
});
