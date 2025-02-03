
const pics = [
    "https://images.unsplash.com/photo-1542370285-b8eb8317691c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1677993185892-f7823f314c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/reserve/zU6fwmDaSVWZdCXcZfot_IMG_3838.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8Zm9EdUhobFZHbmd8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1614583225146-5177e6fbbe7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1627672360124-4ed09583e14c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1672478503001-d6c68cda3d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
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