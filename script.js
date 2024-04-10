gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -5%",
        end:"top -8%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        // markers:true,
        scrub:2,
    }
})

var crsr = document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x -100+"px";
    blur.style.top=dets.y-100+"px";
})
