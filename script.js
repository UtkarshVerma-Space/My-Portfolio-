
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     lerp:0.1,
//     mobile: {
//         smooth: true
//     },
//     tablet: {
//         smooth: true
//     }
// }

// );

const target = document.querySelector('#js-target');
let scrolll = ()=>{
    scroll.scrollTo(target)
}


Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  })




gsap.from("h1 span",{
    y:5,
    opacity:0,
    stagger:1,
    duration:1
})

// About 


gsap.from("#abt h1", {
    y: 15,
    opacity: 0,
    scrollTrigger: {
        trigger: "#abt", // Define the trigger element
        start: "top 90%", // Trigger animation when the element is 80% from the top of the viewport
        scroller:"body",
        scrub:2
    }
});

gsap.from("#abt p", {
    y: 15,
    opacity: 0,
    scrollTrigger: {
        trigger: "#abt", // Define the trigger element
        start: "top 50%", // Trigger animation when the element is 80% from the top of the viewport
        scroller:"body",
        scrub:2
    }
});










// skills
gsap.from("#skills #label", {
    y: 55,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills",
        scrub:true,
        start:"top 10%",
        pin:true
    }
});
gsap.from("#skills #mongo", {
    y: 55,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills",
        scrub:true,
        start:"top 10%",
    }
});

gsap.from("#skills #express", {
    y: 55,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills",
        scrub:true,
        start:"top 10%"
    }
});
gsap.from("#skills #react", {
    y: 55,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills",
        scrub:true,
        start:"top 10%"
    }
});
gsap.from("#skills #node", {
    y: 55,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills",
        scrub:true,
        start:"top 10%"
    }
});





// skills Desktop
gsap.from("#skills-desktop #label", {
    y: 105,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills-desktop",
        scrub:true,
        start:"top 100%",
        pin:true
    }
});
gsap.from("#skills-desktop #mongo", {
    y: 455,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills-desktop",
        scrub:true,
        start:"top 80%",
    }
});

gsap.from("#skills-desktop #express", {
    y: 155,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills-desktop",
        scrub:true,
        start:"top 80%"
    }
});
gsap.from("#skills-desktop #react", {
    y: 155,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills-desktop",
        scrub:true,
        start:"top 80%"
    }
});
gsap.from("#skills-desktop #node", {
    y: 55,
    opacity: 0,
    scrollTrigger: {
        trigger:"#skills-desktop #node",
        scrub:true,
        start:"top 80%",

    }
});






gsap.from("#knowledge  #frontend", {
    y:100,
    opacity:0.5,
    marginTop:"500px",
    scrollTrigger: {
        trigger:"#knowledge",
        scrub:1,
        start:"top 10%",
    }
})

gsap.from("#knowledge  #backend", {
    y:100,
    opacity:0,
    marginTop:"500px",
    scrollTrigger: {
        trigger:"#frontend",
        scrub:1,
    }
})












// Projects
 
gsap.to("#projects  #img", {
    rotate:"-490",
    opacity:1,
    scrollTrigger: {
        trigger:"#projects",
        scrub:true,
        start:"end 100%",
        markers:true,
        start:"end 300%%"
    }
})
