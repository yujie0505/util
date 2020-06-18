"use strict";

/* orbit control for perspective camera only */

import { Vector2 } from "three";

const app = {
  cameraTarget: new Vector2(),
  dollyingDelta: 0,
};

class OrbitControl {
  constructor(camera, renderer) {
    this.camera = camera;
    this.renderer = renderer;

    this.enabled = true;
    this.dampingFactor = 0.05;

    // This option actually enables mouse tracing.
    this.enabledTrace = true;
    this.traceScale = 0.01;

    // This option actually enables dollying in and out.
    this.enabledDolly = true;
    this.dollyScale = 0.95;

    // mouse event listeners
    this.renderer.addEventListener("mousemove", onMouseMove.bind(this), false);
    this.renderer.addEventListener("wheel", onMouseWheel.bind(this), false);
  }

  set dollySpeed(speed) {
    this.dollyScale = Math.pow(0.95, speed);
  }

  update() {
    this.camera.position.x += this.dampingFactor * (app.cameraTarget.x - this.camera.position.x);
    this.camera.position.y += this.dampingFactor * (-app.cameraTarget.y - this.camera.position.y);
    this.camera.position.z += this.dampingFactor * app.dollyingDelta;

    app.dollyingDelta *= 1 - this.dampingFactor;
  }
}

function onMouseMove(event) {
  if (!this.enabled || !this.enabledTrace) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  app.cameraTarget.x = this.traceScale * (window.innerWidth / 2 - event.clientX);
  app.cameraTarget.y = this.traceScale * (window.innerHeight / 2 - event.clientY);
}

function onMouseWheel(event) {
  if (!this.enabled || !this.enabledDolly) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  app.dollyingDelta += event.deltaY * this.dollyScale;
}

export { OrbitControl };
