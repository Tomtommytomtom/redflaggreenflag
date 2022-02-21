import anime from "animejs/lib/anime.es.js"

const drawBezierCurveArc = ({ a, b, c, svg, id}) => {  
  const path = document.createElementNS('http://www.w3.org/2000/svg',"path")
  path.setAttributeNS(null,"id",id)
  path.setAttributeNS(null,"d",`M ${a.x} ${a.y} Q ${b.x} ${b.y} ${c.x} ${c.y}`)
  path.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;opacity:0;")
  svg.appendChild(path)
  return path
}

const getMiddle = (pointA,pointB,offset) => {
  return { x: pointA.x + (pointB.x - pointA.x) / 2, y: pointA.y - offset }
}

const buildWithOffset = (box, element) => {
  console.log(element.left,box.left);
  return {
    left: element.left - box.left,
    right: element.right - box.left,
    top: element.top - box.top,
    bottom: element.bottom - box.top
  }
}

export const addBouncePathToDocument = () => {
  const outerBoxRaw = document.getElementById("outer-box").getBoundingClientRect()
  const firstPerkBoxRaw = document.getElementById("0-perk").getBoundingClientRect()
  const firstNegativeBoxRaw = document.getElementById("0-negative").getBoundingClientRect()

  const outerBox = { left: 0, top: 0, bottom: outerBoxRaw.bottom - outerBoxRaw.top, right: outerBoxRaw.right - outerBoxRaw.left}
  const firstPerkBox = buildWithOffset(outerBoxRaw,firstPerkBoxRaw)
  const firstNegativeBox = buildWithOffset(outerBoxRaw,firstNegativeBoxRaw)

  console.log(outerBox,firstPerkBox,firstNegativeBox);



  // const firstPerkBox = {...firstPerkBoxRaw, left: firstPerkBoxRaw.left - outerBoxRaw.left, top: firstPerkBoxRaw.top - outerBoxRaw.top, right: firstPerkBoxRaw.right - outerBoxRaw.left, lefy}



  const boxLength = firstPerkBoxRaw.width

  console.log(outerBox.top);

  let distanceBetweenOuterboxAndFirstBox = Math.round((firstPerkBox.top - outerBox.top) / 2)
  let startingPointY = outerBox.top + distanceBetweenOuterboxAndFirstBox
  if(distanceBetweenOuterboxAndFirstBox < firstPerkBoxRaw.height){
    distanceBetweenOuterboxAndFirstBox = (firstPerkBox.top - outerBox.top)
    startingPointY = outerBox.top
  }

  console.log(distanceBetweenOuterboxAndFirstBox, "CWUDYGVDE");

  console.log(firstPerkBox);
  console.log(firstNegativeBox);

  //TODO: change constants with relative values to screen size
  
  const startingPoint = {
    x: Math.round(outerBox.left),
    y: Math.round(startingPointY)
  }

  const firstBouncingPoint = {
    x: Math.round(firstPerkBox.right - boxLength * 1/3),
    y: Math.round(firstPerkBox.top)
  }

  const secondBouncingPoint = {
    x: Math.round(firstNegativeBox.right - boxLength * 1/3),
    y: Math.round(firstNegativeBox.top)
  }
  
  const endingPoint = {
    x: Math.round(outerBox.right),
    y: Math.round(secondBouncingPoint.y - 80)
  }

  const firstControlPoint = getMiddle(startingPoint,firstBouncingPoint,0)

  const secondControlPoint = getMiddle(firstBouncingPoint,secondBouncingPoint,distanceBetweenOuterboxAndFirstBox * 3/2)
  
  const thirdControlPoint = getMiddle(endingPoint,secondBouncingPoint,0)
  
  

  console.log(firstBouncingPoint);
  console.log(secondBouncingPoint);

  const svg = document.getElementById("svg-overlay")

  svg.style.height = outerBoxRaw.height

  drawBezierCurveArc({
    a: startingPoint,
    b: firstControlPoint,
    c: firstBouncingPoint,
    svg,
    id: "first-path"
  })
  drawBezierCurveArc({
    a: firstBouncingPoint,
    b: secondControlPoint,
    c: secondBouncingPoint,
    svg,
    id: "second-path"
  })
  drawBezierCurveArc({
    a: secondBouncingPoint,
    b: thirdControlPoint,
    c: endingPoint,
    svg,
    id: "third-path"
  })

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

const hideElement = (qsl) => {
  const el = document.querySelector(qsl)
  console.log(el);
  el.style.opacity = 0;
}

const TARGETS = [
  "#first-path",
  "#second-path",
  "#third-path",
  ".ball",
]

export const resetAnimations = () => {
  TARGETS.forEach(hideElement)
}

export const stopAnimations = () => {
  TARGETS.forEach(anime.remove)
}

const buildPathAndBallAnimation = (pathSelector,ballSelector,options) => () => {
  const path = anime({
    targets: pathSelector,
    strokeDashoffset: [anime.setDashoffset, 0],
    ...options
  })

  const p = anime.path(pathSelector)

  const ball = anime({
    targets: ballSelector,
    translateX: p('x'),
    translateY: p('y'),
    angle: p('angle'),
    ...options
  })

  return [path,ball]
}

const first = buildPathAndBallAnimation("#first-path",".ball",{ 
  duration: 800,
  easing: "easeInCubic"
})

const second = buildPathAndBallAnimation("#second-path",".ball",{ 
  duration: 1200,
  easing: "cubicBezier(0.010, 0.25, 0.70, 0.010)"
})

const third = buildPathAndBallAnimation("#third-path",".ball",{ 
  duration: 500,
  easing: "easeOutCubic"
})

export const playAll = async (afterFirst,afterSecond, afterThird) => {
  showElement(".ball")
  showElement("#first-path")
  const firstAnimations = first()
  await Promise.all(firstAnimations.map(a => a.finished))
  afterFirst?.()

  console.log("before second");
  showElement("#second-path")
  const secondAnimations = second()
  await Promise.all(secondAnimations.map(a => a.finished))
  afterSecond?.()
  console.log("before third");
  showElement("#third-path")
  const thirdAnimations = third()
  await Promise.all(thirdAnimations.map(a => a.finished))
  afterThird?.()

  return [...firstAnimations,...secondAnimations,...thirdAnimations]
}