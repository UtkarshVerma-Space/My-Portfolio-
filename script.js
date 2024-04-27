
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



// Tools And Skills


gsap.from("#skills h1", {
    y: 15,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills", // Define the trigger element
        start: "top 90%", // Trigger animation when the element is 80% from the top of the viewport
        scroller:"body",
        scrub:2
    }
});



gsap.from("#skills i", {
    y: 15,
    opacity:0,
    scrollTrigger: {
        trigger: "#skills", // Define the trigger element
        start: "top 90%", // Trigger animation when the element is 80% from the top of the viewport
        scroller:"body",
        scrub:2,
    },
});




// Projects
 
gsap.to("#projects  #img", {
    rotate:"-490",
    opacity:1,
    scrollTrigger: {
        trigger:"#projects",
        scrub:true,
        start:"end 100%",
    }
})
