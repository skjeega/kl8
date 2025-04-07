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

