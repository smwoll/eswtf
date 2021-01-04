import "./styles.scss";
console.log("hello world!");

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// leftside item entering from left
const left = gsap.utils.toArray(".left");
left.forEach((left) => {
  gsap.from(left, {
    xPercent: "-150",
    opacity: "0",
    borderRadius: "100%",
    rotate: "-360",
    scrollTrigger: {
      trigger: left,
      scrub: true,
      start: "center 100%", //when top of item reaches 100% viewport height
      end: "center 80%", //when center of item reaches 50% viewport height
    },
  });
});

// rightside item entering from right
const right = gsap.utils.toArray(".right");
right.forEach((right) => {
  gsap.from(right, {
    xPercent: "150",
    opacity: "0",
    borderRadius: "100%",
    rotate: "360",
    scrollTrigger: {
      trigger: right,
      scrub: true,
      start: "center 100%", //when top of item reaches 100% viewport height
      end: "center 80%", //when center of item reaches 50% viewport height
    },
  });
});
