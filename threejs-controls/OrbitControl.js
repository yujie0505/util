"use strict";

/* orbit control for perspective camera only */

class OrbitControl {
  constructor(camera, renderer) {
    this.camera = camera;
    this.renderer = renderer;

    this.enabled = true;

    // This option actually enables mouse tracing.
    this.enabledTrace = true;
    this.traceScale = 0.0001;

    // This option actually enables dollying in and out.
    this.enabledDolly = true;
    this.dollyScale = 0.95;

    // mouse event listeners
    this.renderer.addEventListener("mousemove", onMouseMove.bind(this), false);
  }

  set dollySpeed(speed) {
    this.dollyScale = Math.pow(0.95, speed);
  }
}

function onMouseMove(event) {
  if (!this.enabled || !this.enabledTrace) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  this.camera.rotation.x = this.traceScale * (window.innerHeight / 2 - event.clientY);
  this.camera.rotation.y = this.traceScale * (window.innerWidth / 2 - event.clientX);
}

export { OrbitControl };
