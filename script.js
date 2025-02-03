
const pics = [
    "https://images.unsplash.com/photo-1542370285-b8eb8317691c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1677993185892-f7823f314c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
  ];


const btn = document.querySelector("button")






btn.addEventListener("click",()=>{
    let random =pics[Math.floor(Math.random()*pics.length)];
    
    const randomX = Math.floor(Math.random()*95);
    const randomY = Math.floor(Math.random()*95);
    const rotate = Math.floor(Math.random()*360);
    
    
    console.log("Clicked")
    console.log('random' + random)

    const image = document.createElement("img");
    image.src = random;

    image.style.width = "200px"
    image.style.position = "absolute"
    image.style.top = `${randomX}%`
    image.style.left = `${randomY}%`
    image.style.rotate = `${rotate}deg`

    document.querySelector('body').appendChild(image)
    // console.log(image)
})