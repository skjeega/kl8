// vienas rindas komentārs

/*
vairāku rinndu koment
*/ 

let fails=document.getElementById("fails")

fails.addEventListener("change", function(){
    let nosaukums=fails.files[0].name;
    let izmers=fails.files[0].size;
document.getElementById("izvade").innerHTML="Faila nosaukums:   "+nosaukums+"<br>"+"Faila izmērs:   "+izmers+" baiti"
    
})


// zīmēšanas spēle
let laukums=document.getElementById("laukums");
let ctx=laukums.getContext("2d");
 
laukums.width=400;
laukums.height=300;

let x, y, platums, augstums, kraasa;
let poga=document.getElementById("poga");

poga.addEventListener("click", function(){
    x=document.getElementById("x").value;
    y=document.getElementById("y").value;
    platums=document.getElementById("platums").value;
    augstums=document.getElementById("augstums").value;
    kraasa=document.getElementById("kraasa").value;

    ctx.fillStyle=kraasa;
    ctx.fillRect(x, y, augstums, platums);
})