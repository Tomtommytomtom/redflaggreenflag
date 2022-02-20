import anime from "animejs/lib/anime.es.js"

export const addBouncePathToDocument = () => {
  const outerBox = document.getElementById("outer-box").getBoundingClientRect()
  const firstPerkBox = document.getElementById("0-perk").getBoundingClientRect()
  const firstNegativeBox = document.getElementById("0-negative").getBoundingClientRect()


  console.log(firstPerkBox);
  console.log(firstNegativeBox);

  //TODO: change constants with relative values to screen size
  const firstBouncingPoint = {
    x: Math.round(firstPerkBox.right - 50),
    y: Math.round(firstPerkBox.top)
  }

  const secondBouncingPoint = {
    x: Math.round(firstNegativeBox.right - 80),
    y: Math.round(firstNegativeBox.top)
  }
  
  const startingPoint = {
    x: Math.round(outerBox.left),
    y: Math.round(firstBouncingPoint.y - 120)
  }
  
  const endingPoint = {
    x: Math.round(outerBox.right),
    y: Math.round(secondBouncingPoint.y - 80)
  }

  console.log(firstBouncingPoint);
  console.log(secondBouncingPoint);

  const svg = document.getElementById("svg-overlay")
  
  const firstPath = document.createElementNS('http://www.w3.org/2000/svg',"path")
  firstPath.setAttributeNS(null,"id","first-path")
  firstPath.setAttributeNS(null,"d",`M ${startingPoint.x} ${startingPoint.y} Q ${startingPoint.x + 100} ${startingPoint.y} ${firstBouncingPoint.x} ${firstBouncingPoint.y}`)
  firstPath.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;opacity:0;")
  svg.appendChild(firstPath)
  
  const secondPath = document.createElementNS('http://www.w3.org/2000/svg',"path")
  secondPath.setAttributeNS(null,"id","second-path")
  secondPath.setAttributeNS(null,"d",`M ${firstBouncingPoint.x} ${firstBouncingPoint.y} Q ${firstBouncingPoint.x + 100} ${firstBouncingPoint.y - 200} ${secondBouncingPoint.x} ${secondBouncingPoint.y}`)
  secondPath.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;opacity:0;")
  svg.appendChild(secondPath)

  const finalPath = document.createElementNS('http://www.w3.org/2000/svg',"path")
  finalPath.setAttributeNS(null,"id","third-path")
  finalPath.setAttributeNS(null,"d",`M ${secondBouncingPoint.x} ${secondBouncingPoint.y} Q ${secondBouncingPoint.x + 40} ${secondBouncingPoint.y - 100} ${endingPoint.x} ${endingPoint.y}`)
  finalPath.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;opacity:0;")
  svg.appendChild(finalPath)

  const ball = document.createElementNS('http://www.w3.org/2000/svg','circle')
  ball.setAttributeNS(null,'cx',0)
  ball.setAttributeNS(null,'cy',0)
  ball.setAttributeNS(null,'class','ball')
  ball.setAttributeNS(null,'r','5px')
  ball.setAttributeNS(null,'style',"fill:#000000;opacity:0;")
  svg.appendChild(ball)
}

const showElement = (qsl) => {
  const el = document.querySelector(qsl)
  console.log(el);
  el.style.opacity = 1;
}

export const playFirstAnimation = (next) => {
  showElement(".ball")
  
  anime({
    targets:"#first-path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInCubic',
    complete: next,
    duration: 1500,
    // delay: function(el, i) { return i * 250 },
  })

  const p = anime.path('#first-path')

  console.log(p("x"));

  anime({
    targets: '.ball',
    translateX: p('x'),
    translateY: p('y'),
    easing: 'easeInCubic',
    angle: p('angle'),
    duration: 1500,
  });
  showElement("#first-path")
}

export const playSecondAnimation = (next) => {
  const easing = 'cubicBezier(0.010, 0.25, 0.70, 0.010)'
  
  anime({
    targets:"#second-path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing,
    complete: next,
    duration: 1500,
    delay: function(el, i) { return i * 250 },
  })

  const p = anime.path('#second-path')

  console.log(p("x"));

  anime({
    targets: '.ball',
    translateX: p('x'),
    translateY: p('y'),
    easing,
    angle: p('angle'),
    duration: 1500,
  });
  showElement("#second-path")
}

export const playThirdAnimation = () => {
  const easing = 'easeOutCubic'

  anime({
    targets:"#third-path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing,
    duration: 400,
    delay: function(el, i) { return i * 250 },
  })

  const p = anime.path('#third-path')

  console.log(p("x"));

  anime({
    targets: '.ball',
    translateX: p('x'),
    translateY: p('y'),
    easing,
    angle: p('angle'),
    duration: 400,
  });
  showElement("#third-path")
}

export const playAll = () => {
  playFirstAnimation(() => playSecondAnimation(playThirdAnimation))
}