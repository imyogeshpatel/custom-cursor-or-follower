let main = document.querySelector(".main")
let crosshair = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){

    crosshair.style.left = dets.x+"px"
    crosshair.style.top = dets.y+"px"
    console.log(dets.x)
    console.log(dets.y)
})