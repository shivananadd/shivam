function Page1Animetion() {
  var tl = gsap.timeline();

  tl.from("nav h1", {
    y: -30,
    opacity: 0,
    duration: 1,
    dely: 1,
  });
  tl.from("nav i", {
    rotate: 360,
  });

  tl.from("nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from(
    " .center .center-part1 h1 ",
    {
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    },
    "-=1"
  );

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 1,
  });

  tl.from(
    ".center .center-part2 img",
    {
      x: 20,
      opacity: 0,
      duration: 0.5,
    },
    "-=2"
  );

  tl.from(".section1bottom img", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".section1bottom img",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top 0",
      scrub: 2,
    },
  });
}

Page1Animetion();

function Page2Animetion() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2 h3",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top -60",
      scrub: 2,
    },
  });

  tl2.from(".services  ", {
    opacity: 0,
    y: 30,
    duration: 0.5,
  });

  tl2.from(".services p ", {
    opacity: 0,
    x: 30,
    duration: 0.5,
  });

  tl2.from(
    "#elem0",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime"
  );

  tl2.from(
    "#elem1",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anime"
  );

  tl2.from(
    "#elem2",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );

  tl2.from(
    "#elem3",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
}

Page2Animetion();

function Page3Animetio() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3 ",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl3.from(".section3", {
    y: -300,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });

  tl3.from(
    ".boxes h1",
    {
      x: -30,
      opacity: 0,
      duration: 2,
      delay: 1,
    },
    "shiv"
  );
  tl3.from(
    ".boxes h1,p",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      delay: 1,
    },
    "shiv"
  );
  tl3.from(
    ".boxes button",
    {
      x: -300,
      opacity: 0,
      duration: 1,
      delay: 1,
    },
    "shiv"
  );

  tl3.from(
    ".img",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    },
    "shiv"
  );
}
Page3Animetio();
