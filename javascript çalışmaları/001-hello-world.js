// ********** Merhaba Dunya Ornekleri ********** 

// Dokumana(document) Yazdirma Islemi ile Merhaba Dunya:
//  document.write('Merhaba Dunya');

// Uyari Mesaji (Alert) ile Merhaba Dunya:
//  alert("Merhaba Dunya")

// console.log ile Merhaba Dunya:
// console.log("Merhaba Dunya")


//let title = document.getElementsByTagName("h2")

// querySelector
//getElementById

///////////////  101      eleman alma yazma      
// let title = document.getElementById("title")
// title.innerHTML= "denemess"
// console.log(title.innerHTML)

// let link =document.querySelector("ul#list>li>a")
// link.innerHTML+=" değiştirildi"

// console.log(link)

// link.style.color="red"
// link.classList.add("btn")

////////   102       pronpt    bilgi alma

// let fullName = window.prompt("Lütfen Adınızı Giriniz")
// console.log(fullName)

// let greeting=document.querySelector("#greeting")

// greeting.innerHTML += ` ${fullName}<small style="color:red"> kasjdfkasjkasj </small>`


//////////// 103  liste içerindeki son elemana laşmak veya eleman eklemek


// let firstChild=document.querySelector("ul#list>li:first-child")
// console.log(firstChild)
// firstChild.innerHTML="ilk öğe değişti"

// let lastChild=document.querySelector("ul#list>li:last-child")
// console.log(lastChild)
// lastChild.innerHTML="son öğe değişti"

// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement("li")

// liDOM.innerHTML="Kendi oşturduğum öğe"

// ulDOM.prepend(liDOM)
// ulDOM.append(liDOM)
// console.log(ulDOM)

//  104     Class bilgisi ekleme yada çıkarma

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")  // birden fazla class ekleme

greeting.classList.remove("title", "second-class","third-class", "asfas") // birden fazla class çıkarma


console.log(greeting.classList)


// //   105 mantıksal operatörler

// let price=100
// let user ="guest"

// // Eşitse ==

// console.log ("eşitse")
// console.log ("==" , price == 1)
// console.log ("==" , price == 100)
// console.log ("==" , price == "100")

// // Hem değeri hem türü ===

// console.log ("hem eşit hem denk")
// console.log ("===" ,price === 100)
// console.log ("===" ,price === "100")
// //Eşit değilse  !=

// console.log ("!=" ,price != "100")
// console.log ("!=" ,price != "10")
// console.log ("!=" ,user != "guest")
// console.log ("!=" ,user != "aa")

// // küçükse büyükse küçük eşitse büyük eşitse

// console.log("küçükse 100 price<100",price <100)
// console.log("büyükse 100 price>100" ,price >100)
// console.log("küçük eşitse 100 price<=100" ,price <=100)

// //  && ve 

// console.log( price > 0  && user!="guest")

// //  || veya

// console.log( price > 0  || user!="guest")

// //  !  değil (tersi)

// console.log( !(price > 0  && !user!="guest"))

// //  106   eğer operatörü

// var userName = prompt("kullanıcı adınızı giriniz")

// while(1){

    
// if( userName != 0) {
//     console.log(`Kullanıcı Adınız ${userName}`);
//     break
// }
// else{

//     userName = prompt("kullanıcı adınızı giriniz")
    
// }
// }

// /// ////    107çOKLU kOŞULLARLA çALIŞIŞMAK


// let userName = prompt("Kullanıcı Adınız:")
// let age = prompt("Yaşınız")
// let info=document.querySelector("#info")

// if (userName && age>=18){

//     info.innerHTML= "Ehliyet alabilir"
// }
// else if ( !userName){
//     info.innerHTML= "kullanıcı adı yok "

// }
// else if ( !(age >=18)) {

//     info.innerHTML= "yaş bilginiz yok yada 18 yaşından küçüksünüz"
// }

// else {
//     info.innerHTML ="wjfgujgjkas"
// }



// ///    108   Tenary koşul yapısı ile çalışmak
// /// koşul ? doğru : yanlış

// let userName= prompt("kullanıcı adınızı yazınız")

// let info=document.querySelector("#info")

// info.innerHTML= ` ${userName.length > 0 ? userName : "Kullanıcı bilginiz bulunumadı"} `

//  bölüm sonu egzersezi


let examGrade = prompt("Puanı giriniz")

let textInfo;
let info = document.querySelector("#info")

const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`

const sad =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

if(  !(examGrade >100 || examGrade<0) && (examGrade!="undefined"))  {
    textInfo = smile
    info.classList.add("text-primary")
    if (examGrade >= 90 ){
    textInfo+= "AA"
    }
    else if( examGrade >= 85){
    textInfo+=" BA"
    }
    else if( examGrade >= 80){
    textInfo+=" BB"
    }
    else if( examGrade >= 75){
    textInfo+=" CB"
    }
    else if( examGrade >= 70){
    textInfo+=" CC"
    }
    else if( examGrade >= 65){
    textInfo+=" DC"
    }
    else if( examGrade >= 60){
    textInfo+=" DD"
    }
    else if( examGrade >= 55){
    textInfo+=" FD"
    }
    else if( examGrade < 55){
    textInfo=`${sad}  FF`
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
    }
}


else { 
    textInfo= " Lütfen tanımlı değer giriniz"
    console.log(typeof(textInfo))
}



info.innerHTML = textInfo


