
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp:0.1,
    mobile: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
}

);

const target = document.querySelector('#js-target');
let scrolll = ()=>{
    scroll.scrollTo(target)
}







  Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  })