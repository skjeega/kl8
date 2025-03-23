// Atrod pogu pēc tās ID
const butt = document.getElementById("manaPoga");

// Pievieno notikuma klausītāju pogas klikšķim
butt.addEventListener("click", function() {
    // Parāda paziņojumu
    alert("Poga ir nospiesta!");
});

let fails = document.getElementById("fails")

fails.addEventListener("change", function(){
  let nosaukums = fails.files[0].name;
  let izmers = fails.files[0].size;
  
  console.log(nosaukums);
  console.log(izmers);
  document.getElementById("izvade").innerHTML = "Faila nosaukums: " + nosaukums + "<br>" + "Faila izmērs: " + izmers + " baiti"
});

// Zīmēšanas spēles programma
// definē mainīgos, kas norāda, ka tiks strādāts ar canvas elementu un norāda zīmēšanas kontekstu
let laukums = document.getElementById("laukums");
let ctx = laukums.getContext("2d");

// Iestata zīmēšanas laukuma izmērus - platums un augstums
laukums.width = 300;
laukums.height = 300;

// Izveido nepieciešamos programmas mainīgos
let x, y, platums, augstums, krasa;
// definē mainīgo, kas norāda, ka tiks strādāts ar pogas elementu
let poga = document.getElementById("poga");
// Pievieno pogas elementam notikumu klausītāju, kas izpildīs kodu, kad uz pogas tiks noklikšķināts
poga.addEventListener("click", function(){
  x = document.getElementById("x").value; // nolasa ievades lauka vērtību
  y = document.getElementById("y").value;// nolasa ievades lauka vērtību
  augstums = document.getElementById("augstums").value;// nolasa ievades lauka vērtību
  platums = document.getElementById("platums").value;// nolasa ievades lauka vērtību
  krasa = document.getElementById("krāsa").value;// nolasa krāsas ievades lauka vērtību

  
  ctx.fillStyle = krasa;// iestata četrstūra zīmēšanas krāsu
  ctx.fillRect(x, y, augstums, platums) // uzzīmē četrstūri, kura vērtības tiek nolasītas no ievades laukiem
})
