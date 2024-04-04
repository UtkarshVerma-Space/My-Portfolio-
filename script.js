
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
