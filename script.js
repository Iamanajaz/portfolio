import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 40,
  curvePoints: 50,
  curveLerp: .55,
  radius1: 5,
  radius2: 10,
  
  velocityTresold: 100,

  sleepRadiusX: 620,
  sleepRadiusY: 300,
  
  sleepTimeCoefY: 0.0025,
  sleepTimeCoefY: 0.002
})