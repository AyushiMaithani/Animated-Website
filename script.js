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

var h4_all=document.querySelectorAll("#nav h4")
h4_all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
crsr.style.border="1px solid #fff"
crsr.style.backgroundColor="transparent"
crsr.style.transition = "all ease-out 0.2s"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
crsr.style.border="0px solid #EB7B84"
crsr.style.backgroundColor="#EB7B84"
crsr.style.transition = "all ease-out 0.1s"
    })
})