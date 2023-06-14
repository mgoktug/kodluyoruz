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

// let firstName ="Lorem"

// function greeting(firstName, lastname =""){
//     // console.log(`Merhaba ${firstName ? firstName : ""}`)
//     console.log(`Merhaba ${firstName}`)
//     console.log(`Merhaba ${firstName} ${lastname}`)
// }  // default parametre alıyor

// console.log(firstName)  //değişken
// greeting()   // fonksiyona parametre göndermedik

// greeting("Murat")
// greeting("Murat", "Eker")

// function greeting2(firstName,lastName){
//     let abc = `Merhaba ${firstName} ${lastName}`
//     return abc
// }
// let abc =greeting2("Ad","Soyad")
// console.log(abc)

// function domIdWriteInfo(id,info){

//     let domObject = document.querySelector(`#${id}`)
//     domObject.innerHTML = info
// }

// domIdWriteInfo("greeting", greeting2("Lorem","Ipsum"))

// let HTMLinfo =`<span <> Color REEDDD</span>`

// domIdWriteInfo("greeting", HTMLinfo)
// domIdWriteInfo("info", greeting2("Lorem","Ipsum"))

//      Fat ARROW FUNCTIONS

function hello(name) {
  console.log(`Hello ${name}`);
}

hello("Javascript");

const helloFuncV1 = (first) => {
  console.log(`Merhaba ${first}`);
};

helloFuncV1("FuncitonV1");

const helloFuncV2 = (first) => {
  console.log(`Merhaba ${first}`);
};

helloFuncV2("FunctionV2");

const helloFuncV3 = (first) => console.log(`Merhaba ${first}`);

helloFuncV3("FunctionV3");

const helloFuncV4 = (first, Second) => {
  let info = `Merhaba ${first} ${Second}`;
  console.log(info);
  return info;
};

helloFuncV4("FunctionV4", "İnfo");

//    DOM EVENT İLE ÇALIŞMAK

// let Greeting1 = document.querySelector("#greeting")
// Greeting1.style.color="aqua"
// Greeting1.addEventListener("mouseenter",domClick )
// Greeting1.addEventListener("click", domClick2)

// function domClick(){
//     console.log("etkinlik denetlendi")
//     this.style.color =="aqua"
//     this.style.color =="aqua" ?  this.style.color ="red" : this.style.color="aqua"

// }0

// function domClick2(){
//    this.innerHTML=("Değişti")
//     this.innerHTML == "Değişti"
// }

// // Bölüm Sonu egezersizi

// let counter  = localStorage.getItem("count") ? Number(localStorage.getItem("count") ): 0
// let counterDOM=document.querySelector("#counter")
// let increaseDOM =document.querySelector("#increase")
// let decreaseDOM = document.querySelector("#decrease")
// counterDOM.innerHTML= counter

// increaseDOM.addEventListener("click", IncDec )
// decreaseDOM.addEventListener("click", IncDec )

// function IncDec (){
//     console.log(this.id)
//      this.id == "decrease" ? counter-=1 : counter+=1
//      counterDOM.innerHTML= counter
//      localStorage.setItem("count", counter)
// }

//  localStorage.setItem

//  localStorage.setItem("mycat" ,"Keddy")

// console.log( localStorage.getItem("mycat") )

// let user={userName : "muratgokugeker" , isActive: true}
// console.log(user)
// localStorage.setItem("userInfo", JSON.stringify(user))

// let userInfo = localStorage.getItem("userInfo")
// userInfo=JSON.parse(userInfo)

// console.log(userInfo)

//     FORMM  İLE  ÇALIŞMAK  /////////////////

let userformDOM = document.querySelector("#userForm");
userformDOM.addEventListener("submit", formHandler);

const alertfunction = (
  message,
  title,
  classname = "warning"
) => `<div class="alert alert-${classname} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
const ALERTDOM = document.querySelector(".alert");

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username1");
  const SCORE = document.querySelector("#score1");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    console.log("Değer Gir");
    ALERTDOM.innerHTML = alertfunction(
      "Hatalı giriş yapıldı lütfen düzeltin",
      "HATA",
      "danger"
    );
  }
}

// <li
// class="list-group-item d-flex justify-content-between align-items-start"
// >
// <div class="ms-2 me-auto">
//   <div class="fw-bold">Subheading</div>
//   Content for list item
// </div>
// <span class="badge bg-primary rounded-pill">14</span>
// </li>

let userListDOM = document.querySelector("#userlist");
const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>  `;
  liDOM.classList.add(
    `list-group-item`,
    `d-flex`,
    `justify-content-between`,
    `align-items-start`
  );
  userListDOM.append(liDOM);
};

///////////  ARRAY ///////////////////////

let domain = "kodluyoruz";

let isActive_array = false;

let items_array = [10, 20, 30, isActive_array, domain];

console.log(items_array);

let empty_array = []; // boş liste

//// array içerinde eleman sayısı öğrenmek

console.log(
  items_array.length // array içibndeki eleman sayısı
);

// Array içindeki ilk elemana ulaşmak

console.log(items_array[0]);

/// Array içindeki son eleman

console.log(items_array[items_array.length - 1]);

// Değişken içindeki bilginin array olup lmadığının kontrol edilmesi
console.log(
  typeof items_array // object olarak çıktı veriyor
);

console.log(Array.isArray(items_array));

//hangileri araay

console.log("[] :", Array.isArray([]));
console.log("1 :", Array.isArray(1));
console.log("true :", Array.isArray(true));

// Array sona öge eklemek

items_array.push(50);
console.log(items_array);

// Array İlk eleman ekleme
items_array.unshift("İlk eleman");

console.log(items_array);
// Array son eleman çıkarmak
items_array.pop();

console.log(items_array, "son eleman çıktı");

// baştaki elemanı çıkarmak

items_array.shift();

console.log(items_array, "ilk eleman çıktı");

// array içindeki bilgiyi değiştirmek

items_array[0] = "ilk öğe değişti";

console.log(items_array);

// array içindeki son öğeyi değiştirme

items_array[items_array.length - 1] = "son öğe değişti";

console.log(items_array);

////////// çok kullanılan array metodları
let femaleUser = ["Ayşe", "Hülya", "Merve"];
let maleUSer = ["Ahmet", "Hasan", "Mehmet"];

items_array.unshift(femaleUser);

items_array.push(maleUSer);

console.log(items_array);

items_array[0][0];
console.log(items_array[0][0]);
console.log(items_array[0].length);

//array içerisindeki öğeleri ayırna

let newItems = items_array.splice(0, 4);

console.log("NewItems :", newItems);

// array içerisindeki bilginin index bilgisini bulmak => indexOF("value")

items_array.unshift("lorem");
items_array.push("ipsum");
console.log(items_array);
console.log(items_array.indexOf("ipsum"));

// Array kopyalamak  slice

let copyItems = items_array;

console.log(items_array);
copyItems.pop();

console.log("copyitems", copyItems);
console.log("itemsarray", items_array);
///////// iki değeri eşitlediğimizde çıkarıldığında ikisinden de çıkar

copyItems = items_array.slice();

console.log(items_array);
copyItems.pop();

console.log("copyitems", copyItems);
console.log("itemsarray", items_array);

let es6items_array = [...items_array]; // es6 ile clon yapısı oluşturmak

console.log(es6items_array);

// Arrayin içindeki bilgileri birleştirmek,

let allUser = [...femaleUser, ...maleUSer];

//Arrayin içindeki bilgiyi stringe çevirme

console.log(allUser.toString());
console.log(allUser.join(" --- "));

// istediğimniz index bilgisine göre öğe eklemek

allUser.splice(allUser.length - 1, 0, "Melisa");
allUser.splice(Math.floor(allUser.length / 2), 0, "Lorem");

console.log(allUser);

/////////////////////////////////////////////  DÖNGÜLER İLE ÇALIŞMAK

let users = ["lorem", "ipsum", "dolor"];
let index = 0;

const userList_Dongu = document.querySelector("#userlist_Dongu");
for (; index < users.length; index++) {
  const li_Dongu = document.createElement("li");
  li_Dongu.innerHTML = users[index];
  userList_Dongu.appendChild(li_Dongu);
  console.log(users[index]);
}

let userNameWhile;

counter = 0;

/*while (!userNameWhile) {
  userNameWhile = prompt("Kullanıcı adınızı Gİriniz");
  console.log(userNameWhile);
}
*/
const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouese",
  "Keyboard",
];

// PRODUCTS.forEach((product,index,array) => console.log(array[index] = product +" 111" ));
PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);

console.log(PRODUCTS);
const productDOM1 = document.querySelector("#products");

PRODUCTS.forEach((product) => {
  let ProductDOM = document.createElement("li");
  ProductDOM.innerHTML = product;
  productDOM1.append(ProductDOM);
});

const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length < 6);

console.log(NEW_PRODUCTS, "Fİlter");

const USER_fılter = [
  { fullName: "Ayşe Sunar", isActive: false },
  { fullName: "Ahmet URGAN", isActive: true },
  { fullName: "Asya BAŞAR", isActive: true },
  { fullName: "Aksel DURMAz", isActive: false },
];

let ACTIVE_USERS = USER_fılter.filter((user) => user.isActive === true);

console.log(ACTIVE_USERS);

//  Map kullanımı

const USERS = ["AYŞE", "MeHmet", "TuGÇe", "AKSEL"];

const NEW_USERS = USERS.map((user) => user.toLocaleLowerCase());

console.log(USERS, "users");
console.log(NEW_USERS);

const USERS_OBJ = USERS.map((item) => {
  return {
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
  };
});

console.log(USERS_OBJ);

//////////////////////OBJE KULLANIMI

let arrayObj = [1, 2, 3];

let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj);
console.log("object1", typeof object1);

let iten1 = new Object(); /// Obje Tanımlama

let iten2 = {}; /// Obje Tanımlama

console.log(object1);

///// OBJELERDE KEY VALUE İLİŞKİŞİ

let Laptop1 = {
  brand: "Apple",
  model: "Mac Book Pro",
  "2kg": 2,
  //madel-name : "Macbook PRo"
  madel_name: "Macbook PRo",
};

console.log(Laptop1.brand, Laptop1["brand"]);
console.log(Laptop1.model, Laptop1["model"]);
console.log(Laptop1["2kg"]);

// Anahtar bilgisine yeni değer eklemek

Laptop1.brand = "Mac";

console.log(Laptop1);

Laptop1["brand"] = "Mac1";

console.log(Laptop1);

/// yeni bir bigli ekleme

Laptop1.version = "10.15.7";

console.log(Laptop1);

/// Anahtar bilgilerine ulaşmak  .keys

let keys = Object.keys(Laptop1);

console.log(keys);

console.log(Object.keys(Laptop1));

keys.forEach((key) => {
  console.log(key, ":", Laptop1[key]);
});

/// Value değerlerine ulaşmak

console.log(Object.values(Laptop1));

///////////  Metodlar Eklemek

let user1 = {
  FirstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.FirstName} ${this.lastName}`;
  },
};

console.log(user1.shortName());

let settings = {
  userName: "loremIpsum",
  password: "BoolPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

// Object Destructive

//Obje içerisindeki bilgilerin tek seferde çıkarılması
// let userName1 = settings.userName;
// console.log(userName1);

let { userName: user, password, isActive, ip: serverip, servername } = settings;
// Username bilgisini user değşken adı olarak dışarıya aldık
// rename and destructing
console.log(user, password, isActive, serverip, servername);
console.log(settings);
console.log(user);

// Obje içindeki bazı bilgilerin çıakrtılıp bazı bilgilerin settings içerisine eklenmesş

let {
  userName,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;
// değişken ismi daha önce verildiğinden yeni değerler tanımlandı
console.log(newSettings);
console.log(userName, password2, isActive2);

// objenin destructing ile kopyalanması

let settings2 = settings;

settings2.userName = "Değişen Bilgi";
//// Kopyalama işlemi gerçekleşmediğinden orninal nesne bilgiside değişmiş oldu
console.log("settings", settings);
console.log("settings2", settings2);

settings2 = { ...settings };

settings2.userName = "İkinci değişen bilgi";

console.log("Birinci bilgi önceden değişmişti şimdi değişmedi", settings);
console.log(settings2);

let scoreA = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = scoreA;

console.log(score1, score2, otherScore);

let scoreCopy = [...scoreA];

scoreCopy[0] = 500;

console.log(scoreA);
console.log("Kopyalanmış ve değiştirilmiş", scoreCopy);

//// Try ve Catch kullanımı

let itemstry;
try {
  itemstry.forEach((item) => console.log(item));

  console.log("hata yönetimi düzgün çalışıyor");
} catch (error) {
  console.log("error", error);
  itemstry = [1, 2, 3];
  itemstry.forEach((item) => console.log(item));
}

let infotry = "Kodluyoruz";

console.log(infotry);

//  FETCH API

// JSON Dosyadan veri çekildi 
fetch("settings.json").then(
  response => {
  return response.json()
}
).then(responseJson => {
  console.log(responseJson)
})

let fetchDOM=document.querySelector("#fetch")
let a=1 

// API Üzerinden veri çekildi
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response=>{ return response.json()}
).then(

  responseJson=>{responseJson.forEach(item => {
    
   let liekle= document.createElement("li")
   liekle.innerHTML=`${a} ${item.title}`
   fetchDOM.append(liekle)
    a++
  })}
)

