function kontrolEt(){

    let ram = Number(document.getElementById("ram").value);
    let gpu = Number(document.getElementById("gpu").value);

    let minRam = Number(document.getElementById("minRam").value);
    let minGpu = Number(document.getElementById("minGpu").value);

    let sonuc = document.getElementById("sonuc");

    if(ram >= minRam && gpu >= minGpu){
        sonuc.innerHTML =
        "✅ Oyun çalışır";
    }
    else{
        sonuc.innerHTML =
        "❌ Sistem yetersiz";
    }
}
