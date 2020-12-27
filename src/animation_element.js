//jumping + skew walk
const { play, style, isPlaying } = useAnimateKeyframes({
    iterationCount: 5,
    direction: "alternate",
    duration: 1.5,
    keyframes: [
      "transform: skewX(-5deg) translateY(0px) translateX(0px)",
      "transform: skewX(5deg) translateY(10px) translateX(20px)",
      "transform: skewX(-5deg) translateY(0px) translateX(40px)",
      "transform: skewX(5deg) translateY(10px) translateX(60px)",
      "transform: skewX(-5deg) translateY(0px) translateX(80px)",
      "transform: skewX(5deg) translateY(10px) translateX(100px)",
      "transform: skewX(-5deg) translateY(0px) translateX(120px)",
      "transform: skewX(5deg) translateY(10px) translateX(140px)",
      "transform: skewX(-5deg) translateY(0px) translateX(160px)",
      "transform: skewX(5deg) translateY(10px) translateX(180px)",
      "transform: skewX(-5deg) translateY(0px) translateX(200px)",
      "transform: skewX(5deg) translateY(10px) translateX(220px)"
    ]
  });
//growing bar

