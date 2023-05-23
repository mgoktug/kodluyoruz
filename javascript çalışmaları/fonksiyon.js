//  ilk fonksiyonu yazalım

// function helloWorld(){
//     console.log("Hello World")
// }

// function hello()  {
//     console.log("merhaba")
//     helloWorld()
// }

// function userCheck(){
    
    
// if (userName && age >= 18) {
//     info.innerHTML = "ehliyet alabilirsiniz"
// } else if (!userName) {
//     info.innerHTML = "Kullanici Adiniz Yok"
// } else if ( !(age >= 18) ) {
//     info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
// }
// }


// hello()
// hello()
// hello()
// hello()

// function sayacartir() {
//     let sayac = 0;
  
//     return function () {
//       return sayac++;
//     };
//   }
  
//   let counter = makeCounter();
  
//   console.log(sayacartir()); // 0
//   console.log(sayacartir()); // 1
//   console.log(sayacartir()); // 2

//   İKinci ders

let firstName ="Lorem"

function greeting(firstName, lastname =""){
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastname}`)
}  // default parametre alıyor

console.log(firstName)  //değişken
greeting()   // fonksiyona parametre göndermedik


greeting("Murat")
greeting("Murat", "Eker")


function greeting2(firstName,lastName){
    let abc = `Merhaba ${firstName} ${lastName}`
    return abc
}
let abc =greeting2("Ad","Soyad")
console.log(abc)

function domIdWriteInfo(id,info){

    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo("greeting", greeting2("Lorem","Ipsum"))


let HTMLinfo =`<span style="color:red"> Color REEDDD</span>`

domIdWriteInfo("greeting", HTMLinfo)
domIdWriteInfo("info", greeting2("Lorem","Ipsum"))