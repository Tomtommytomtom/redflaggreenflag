import anime from "animejs/lib/anime.es";

const drawBezierCurveArc = ({ a, b, c, svg, id }) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "id", id);
  path.setAttributeNS(
    null,
    "d",
    `M ${a.x} ${a.y} Q ${b.x} ${b.y} ${c.x} ${c.y}`
  );
  path.setAttributeNS(
    null,
    "style",
    "fill:none;stroke:#000000;stroke-width:1px;opacity:0;"
  );
  svg.appendChild(path);
  return path;
};

const drawBall = (id) => {
  const svg = document.getElementById("svg-overlay");
  const ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  ball.setAttributeNS(null, "cx", 0);
  ball.setAttributeNS(null, "cy", 0);
  ball.setAttributeNS(null, "id", id);
  ball.setAttributeNS(null, "r", "5px");
  ball.setAttributeNS(null, "style", "fill:#000000;opacity:0;");
  svg.appendChild(ball);
};

const getMiddle = (pointA, pointB, offset) => ({
  x: pointA.x + (pointB.x - pointA.x) / 2,
  y: pointA.y - offset,
});

const buildWithOffset = (box, element) => ({
  left: element.left - box.left,
  right: element.right - box.left,
  top: element.top - box.top,
  bottom: element.bottom - box.top,
});

const drawFirstAnimationPaths = () => {
  const outerBoxRaw = document
    .getElementById("outer-box")
    .getBoundingClientRect();
  const firstPerkBoxRaw = document
    .getElementById("0-perk")
    .getBoundingClientRect();
  const firstNegativeBoxRaw = document
    .getElementById("0-negative")
    .getBoundingClientRect();

  const outerBox = {
    left: 0,
    top: 0,
    bottom: outerBoxRaw.bottom - outerBoxRaw.top,
    right: outerBoxRaw.right - outerBoxRaw.left,
  };
  const firstPerkBox = buildWithOffset(outerBoxRaw, firstPerkBoxRaw);
  const firstNegativeBox = buildWithOffset(outerBoxRaw, firstNegativeBoxRaw);

  const boxLength = firstPerkBoxRaw.width;

  let distanceBetweenOuterboxAndFirstBox = Math.round(
    (firstPerkBox.top - outerBox.top) / 2
  );

  let startingPointY = outerBox.top + distanceBetweenOuterboxAndFirstBox;
  if (distanceBetweenOuterboxAndFirstBox < firstPerkBoxRaw.height) {
    distanceBetweenOuterboxAndFirstBox = firstPerkBox.top - outerBox.top;
    startingPointY = outerBox.top;
  }

  const startingPoint = {
    x: Math.round(outerBox.left),
    y: Math.round(startingPointY),
  };

  const firstBouncingPoint = {
    x: Math.round(firstPerkBox.right - (boxLength * 1) / 3),
    y: Math.round(firstPerkBox.top),
  };

  const secondBouncingPoint = {
    x: Math.round(firstNegativeBox.right - (boxLength * 1) / 3),
    y: Math.round(firstNegativeBox.top),
  };

  const endingPoint = {
    x: Math.round(outerBox.right + 20),
    y: Math.round(secondBouncingPoint.y - 80),
  };

  const firstControlPoint = getMiddle(startingPoint, firstBouncingPoint, 0);

  const secondControlPoint = getMiddle(
    firstBouncingPoint,
    secondBouncingPoint,
    firstPerkBoxRaw.height * 1.8
  );

  const thirdControlPoint = getMiddle(endingPoint, secondBouncingPoint, 0);

  const svg = document.getElementById("svg-overlay");

  svg.style.height = `${outerBoxRaw.height}px`;

  drawBezierCurveArc({
    a: startingPoint,
    b: firstControlPoint,
    c: firstBouncingPoint,
    svg,
    id: "first-path",
  });
  drawBezierCurveArc({
    a: firstBouncingPoint,
    b: secondControlPoint,
    c: secondBouncingPoint,
    svg,
    id: "second-path",
  });
  drawBezierCurveArc({
    a: secondBouncingPoint,
    b: thirdControlPoint,
    c: endingPoint,
    svg,
    id: "third-path",
  });

  drawBall("ball");
};

const drawSecondAnimationPaths = () => {
  const svg = document.getElementById("svg-overlay");
  const outerBoxRaw = document
    .getElementById("outer-box")
    .getBoundingClientRect();
  const lastNegativeBoxRaw = document
    .getElementsByClassName("last-negative")[0]
    .getBoundingClientRect();

  const flagRaw = document.getElementById("flag").getBoundingClientRect();
  const flag = buildWithOffset(outerBoxRaw, flagRaw);

  const outerBox = {
    left: 0,
    top: 0,
    bottom: outerBoxRaw.bottom - outerBoxRaw.top,
    right: outerBoxRaw.right - outerBoxRaw.left,
  };
  const lastNegativeBox = buildWithOffset(outerBoxRaw, lastNegativeBoxRaw);

  const bounceWidth = (4 / 7) * outerBoxRaw.width;

  const bounceHeight = outerBox.bottom - lastNegativeBox.bottom + 20;

  const startingPoint = {
    x: outerBox.right,
    y: lastNegativeBox.bottom + 20,
  };

  const firstBouncingPoint = {
    x: outerBox.right - (2 / 5) * bounceWidth,
    y: outerBox.bottom,
  };

  const secondBouncingPoint = {
    x: outerBox.right - (4 / 5) * bounceWidth,
    y: outerBox.bottom,
  };

  const lastBouncingPoint = {
    x: outerBox.right - bounceWidth,
    y: outerBox.bottom - 7,
  };

  const flagHolePoint = {
    x: flag.left + flagRaw.width * 0.3,
    y: outerBox.bottom - 7,
  };

  const inTheGround = {
    x: flag.left + flagRaw.width * 0.2,
    y: outerBox.bottom + 10,
  };

  const inBetweenStartAndFirstBouncingPoint = getMiddle(
    startingPoint,
    firstBouncingPoint,
    0
  );
  const inBetweenFirstAndSecondBouncingPoint = getMiddle(
    firstBouncingPoint,
    secondBouncingPoint,
    (3 / 4) * bounceHeight
  );
  const inBetweenSecondAndLastBouncingPoint = getMiddle(
    secondBouncingPoint,
    lastBouncingPoint,
    (1 / 2) * bounceHeight
  );
  const inBetweenFlagAndUnderGround = getMiddle(flagHolePoint, inTheGround, 0);

  drawBezierCurveArc({
    a: startingPoint,
    b: inBetweenStartAndFirstBouncingPoint,
    c: firstBouncingPoint,
    svg,
    id: "fourth-path",
  });

  drawBezierCurveArc({
    a: firstBouncingPoint,
    b: inBetweenFirstAndSecondBouncingPoint,
    c: secondBouncingPoint,
    svg,
    id: "fifth-path",
  });

  drawBezierCurveArc({
    a: secondBouncingPoint,
    b: inBetweenSecondAndLastBouncingPoint,
    c: lastBouncingPoint,
    svg,
    id: "sixth-path",
  });

  drawBezierCurveArc({
    a: lastBouncingPoint,
    b: lastBouncingPoint,
    c: flagHolePoint,
    svg,
    id: "seventh-path",
  });

  drawBezierCurveArc({
    a: flagHolePoint,
    b: inBetweenFlagAndUnderGround,
    c: inTheGround,
    svg,
    id: "eighth-path",
  });

  drawBall("ball-2");
};

const drawThirdAnimationPaths = () => {
  const svg = document.getElementById("svg-overlay");
  const outerBoxRaw = document
    .getElementById("outer-box")
    .getBoundingClientRect();

  const flagRaw = document.getElementById("flag").getBoundingClientRect();
  const flag = buildWithOffset(outerBoxRaw, flagRaw);

  const outerBox = {
    left: 0,
    top: 0,
    bottom: outerBoxRaw.bottom - outerBoxRaw.top,
    right: outerBoxRaw.right - outerBoxRaw.left,
  };

  const bounceWidth = (4 / 7) * outerBoxRaw.width;

  const lastBouncingPoint = {
    x: outerBox.right - bounceWidth,
    y: outerBox.bottom - 7,
  };

  const distanceLastBouncingPointAndFlag = lastBouncingPoint.x - flag.left;

  const halfwayToFlag = {
    x: flag.left + distanceLastBouncingPointAndFlag / 2,
    y: outerBox.bottom - 7,
  };

  drawBezierCurveArc({
    a: lastBouncingPoint,
    b: lastBouncingPoint,
    c: halfwayToFlag,
    svg,
    id: "ninth-path",
  });
};

export const drawPaths = () => {
  drawFirstAnimationPaths();
  drawSecondAnimationPaths();
  drawThirdAnimationPaths();
};

const showElement = (qsl) => {
  const el = document.querySelector(qsl);
  el.style.opacity = 1;
};

const hideElement = (qsl) => {
  const el = document.querySelector(qsl);
  el.style.opacity = 0;
};

const FIRST_SEQUENCE_TARGETS = [
  "#first-path",
  "#second-path",
  "#third-path",
  "#ball",
];

const SECOND_SEQUENCE_TARGETS = [
  "#fourth-path",
  "#fifth-path",
  "#sixth-path",
  "#seventh-path",
  "#eighth-path",
  "#ball-2",
];

const THIRD_SEQUENCE_TARGETS = [
  "#fourth-path",
  "#fifth-path",
  "#sixth-path",
  "#ninth-path",
  "#ball-2",
];

export const removePaths = () => {
  const allTargets = [
    ...FIRST_SEQUENCE_TARGETS,
    ...SECOND_SEQUENCE_TARGETS,
    ...THIRD_SEQUENCE_TARGETS,
  ];
  allTargets.forEach((id) => {
    document.querySelector(id)?.remove();
  });
  // reset height of overlay
  const svg = document.getElementById("svg-overlay");
  svg.style.height = "1px";
};

export const resetFirstAnimationSequence = () => {
  FIRST_SEQUENCE_TARGETS.forEach(hideElement);
};
export const resetSecondAnimationSequence = () => {
  SECOND_SEQUENCE_TARGETS.forEach(hideElement);
};
export const resetThirdAnimationSequence = () => {
  THIRD_SEQUENCE_TARGETS.forEach(hideElement);
};

export const stopFirstAnimationSequence = () => {
  FIRST_SEQUENCE_TARGETS.forEach(anime.remove);
};
export const stopSecondAnimationSequence = () => {
  SECOND_SEQUENCE_TARGETS.forEach(anime.remove);
};
export const stopThirdAnimationSequence = () => {
  THIRD_SEQUENCE_TARGETS.forEach(anime.remove);
};

export const stopAllAnimationSequences = () => {
  stopFirstAnimationSequence();
  stopSecondAnimationSequence();
  stopThirdAnimationSequence();
};

export const resetAllAnimationSequences = () => {
  resetFirstAnimationSequence();
  resetSecondAnimationSequence();
  resetThirdAnimationSequence();
};

const buildBallFollowsPathAnimation =
  (pathSelector, ballSelector, options) => () => {
    const path = anime({
      targets: pathSelector,
      strokeDashoffset: [anime.setDashoffset, 0],
      ...options,
    });

    const p = anime.path(pathSelector);

    const ball = anime({
      targets: ballSelector,
      translateX: p("x"),
      translateY: p("y"),
      angle: p("angle"),
      ...options,
    });

    return [path, ball];
  };

const firstSequence = [
  buildBallFollowsPathAnimation("#first-path", "#ball", {
    duration: 800,
    easing: "easeInCubic",
  }),
  buildBallFollowsPathAnimation("#second-path", "#ball", {
    duration: 1200,
    easing: "cubicBezier(0.010, 0.25, 0.70, 0.010)",
  }),
  buildBallFollowsPathAnimation("#third-path", "#ball", {
    duration: 500,
    easing: "easeOutCubic",
  }),
];

const playSequence = async (sequence, callbacks) => {
  const result = [];
  for (let i = 0; i < sequence.length; i += 1) {
    const animations = sequence[i]();
    result.push(...animations);
    const hook = callbacks[i];

    // eslint-disable-next-line no-await-in-loop
    await Promise.all(animations.map((a) => a.finished));
    hook?.();
  }
  return result;
};

export const playFirstAnimationSequence = async (...args) => {
  showElement("#ball");
  showElement("#first-path");

  const shows = [
    () => showElement("#second-path"),
    () => showElement("#third-path"),
    undefined,
  ];

  const curried = shows.map((s, i) => () => {
    s?.();
    args?.[i]?.();
  });

  return playSequence(firstSequence, curried);
};

const secondSequence = [
  buildBallFollowsPathAnimation("#fourth-path", "#ball-2", {
    duration: 300,
    easing: "easeInQuad",
  }),
  buildBallFollowsPathAnimation("#fifth-path", "#ball-2", {
    duration: 400,
    easing: "cubicBezier(0, 0.42, 1, 0.58)",
  }),
  buildBallFollowsPathAnimation("#sixth-path", "#ball-2", {
    duration: 200,
    easing: "cubicBezier(0, 0.42, 1, 0.58)",
  }),
  buildBallFollowsPathAnimation("#seventh-path", "#ball-2", {
    duration: 1300,
    easing: "cubicBezier(0.2, 0.5, 0.2, 1)",
  }),
  buildBallFollowsPathAnimation("#eighth-path", "#ball-2", {
    duration: 200,
    easing: "easeInQuad",
  }),
];

const thirdSequence = [
  buildBallFollowsPathAnimation("#fourth-path", "#ball-2", {
    duration: 400,
    easing: "easeInQuad",
  }),
  buildBallFollowsPathAnimation("#fifth-path", "#ball-2", {
    duration: 700,
    easing: "cubicBezier(0, 0.42, 1, 0.58)",
  }),
  buildBallFollowsPathAnimation("#sixth-path", "#ball-2", {
    duration: 350,
    easing: "cubicBezier(0, 0.42, 1, 0.58)",
  }),
  buildBallFollowsPathAnimation("#ninth-path", "#ball-2", {
    duration: 1000,
    easing: "easeOutQuad",
  }),
];

export const playSecondAnimationSequence = async (...args) => {
  showElement("#ball-2");
  showElement("#fourth-path");

  const shows = [
    () => showElement("#fifth-path"),
    () => showElement("#sixth-path"),
    () => showElement("#seventh-path"),
    () => showElement("#eighth-path"),
    undefined,
  ];

  const curried = shows.map((s, i) => () => {
    s?.();
    args?.[i]?.();
  });

  return playSequence(secondSequence, curried);
};
export const playThirdAnimationSequence = async (...args) => {
  showElement("#ball-2");
  showElement("#fourth-path");

  const shows = [
    () => showElement("#fifth-path"),
    () => showElement("#sixth-path"),
    () => showElement("#ninth-path"),
    undefined,
  ];

  const curried = shows.map((s, i) => () => {
    s?.();
    args?.[i]?.();
  });

  return playSequence(thirdSequence, curried);
};
