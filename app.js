let z = confirm("Bo'sh qolganingizda qo'ylarni sanang!")
if (z == true){
    alert("Bowladi unda 🤝")
    let count = +prompt("Son kiriting...")
    while(count == "" || isNaN(count)){
        count = +prompt("Son kiritin diyildi 🤦🏻‍♂️")
    }
    for(let i = 1; i <= count; i++){
        i == 1 ? console.log(i + " qo'y") : console.log(i + "q'oylar");
    }
    alert("Consolni oching!")
}else{
    alert("Xayr so bo'luras 👋🏻")
}