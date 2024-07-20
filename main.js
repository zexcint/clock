const $ = selector => document.querySelector(selector)
const $clockHours = $(".hours")
const $clockMinutes = $(".minutes")
const $clockSeconds = $(".seconds")
const hourAngles = {
  0: 270,
  1: 300,
  2: 330,
  3: 360,
  4: 390,
  5: 420,
  6: 450,
  7: 480,
  8: 510,
  9: 540,
  10: 570,
  11: 600,
  12: 270,
  13: 300,
  14: 330,
  15: 360,
  16: 390,
  17: 420,
  18: 450,
  19: 480,
  20: 510,
  21: 540,
  22: 570,
  23: 600,
}
let currentSeconds
let currentMinutes
let currentHours
let secondAngles = []
let minuteAngles = []
let minuteScale = []
let angle = 270
let scaleValue = 0.5
let scaleIndex = 0

while (angle <= 624) {
  secondAngles.push(angle)
  minuteAngles.push(angle)
  angle += 6;
}

while (scaleIndex <= 59) {
  minuteScale.push(scaleValue)
  scaleValue += 0.5
  scaleIndex++
}

setInterval(() => {
  currentSeconds = new Date().getSeconds()
  currentMinutes = new Date().getMinutes()
  currentHours = new Date().getHours()

  $clockSeconds.style.transform = `rotate(${secondAngles[currentSeconds]}deg)`
  $clockMinutes.style.transform = `rotate(${minuteAngles[currentMinutes]}deg)`
  $clockHours.style.transform = `rotate(${hourAngles[currentHours] + minuteScale[currentMinutes]}deg)`

  $(".info-1").textContent = currentSeconds
  $(".info-2").textContent = currentMinutes
  $(".info-3").textContent = currentHours
}, 1000)