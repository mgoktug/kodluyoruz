//  Değişken tanımlamalar  let ve const 

//  var iledeğişken tanımlama

// var serverName = "kodluyoruz.org";

// console.log(serverName);


//let ile değişken tanımlama

let serverName;

console.log(serverName) ;

serverName = "htpps://kodluyoruz.org" ;

console.log(serverName) ;


let password = 1234

console.log(password)

let fullName= "Murat Göktuğ";

// let ile tanımlanan değişkeeni değiştirme

fullName = "let ile tanımlanan ikinci değişken"

// birleştirme ve ekleme işlemi

console.log(fullName)

fullName = fullName + " deneme"

console.log(fullName + " Test Bilgisi")

fullName = "sıfırlandı"
fullName += " ve yeni bilgi eklendi"

console.log(fullName)


// const ile değişkeni tanımlama


//const serverPassword;
const SERVER_PASSWORD ="jhjhjhjhjhj"

console.log(SERVER_PASSWORD)


// SERVER_PASSWORD = 1234     DEĞİŞTİRİLEMEZ !!

// console.log(SERVER_PASSWORD)   


let price =100
let tax = 0.18
let priceTax = price * tax
// console.log("Fiyat"+ price , "Kdv Oranı " +tax,"KDV Tutarı"priceTax)

console.log(
    "Fiyat", price,
    "KDV Oranı", tax,
    "KDV Tutarı",priceTax,
    "Fİyat",priceTax+price,
)

let counter = 320
counter = counter+1

console.log(counter)

counter += 1
console.log(counter)

counter++
console.log(counter)

counter--
console.log(counter)

counter*=10
console.log(counter)

counter/=2
console.log(counter)

console.log ((2+3)*10)


// mod alma %
//sayı tek mi çift mi
let sayi=667

console.log(sayi%2)
// 8 den kalan

console.log((2**155)%7)

// üs alma **

console.log( 2**5)

//aŞAĞI YUVARLAMA    Math.floor

console.log( Math.floor(1.7))

// yukarı yuvarlama

console.log ("Ykarı yuvarlama", Math.ceil(2.9))

//yakına yuvarlama  Math.round

console.log("Yakına yuvarlama", Math.round(1.5), " Yakına yuvarla", Math.round(1,2))


let stringNumber ="11";

console.log(stringNumber)

let newNumber = Number(stringNumber)

console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi",newNumber)


//  Boolean Veri türü ile çalışmak

//   0 ve 1 'i anlamak

let isActive= false // 0
isActive=true //1 

console.log(isActive)

let userName;
let isUserName = Boolean(userName) 

console.log(isUserName)


Boolean (11)   //true
Boolean ("0")  //true
Boolean ("")  //false

Boolean(0)            // false
Boolean(-0)     // false
Boolean(-0,1)     // true
Boolean ( 0===0 )  //true

// karar yapıları 
userName ="jıkjk"
console.log(userName)

console.log (Boolean (userName.length>0) )


//veri türünü öğrenmek typeof

let price1= 111
let stringprice="111"
let hasPassword= true

console.log(
    "price ",
    typeof(price1)
)

console.log(
    "stringprice",
    typeof(stringprice)

)
console.log(
        "hasPassword",
        typeof(hasPassword)
)


let number1= "11"
let number2="11px"
let number3="11.4px"

console.log(
    "number1: ", parseInt(number1)
)
console.log(
    "number 2 asyı değeri ", parseInt(number2)
)
console.log(
    "number 2  ", number2 )

    let number5="11.7px"

number5=number5.toString()

console.log(number5,typeof(number5))

// Template Lİterals
userName =  "hakan"
const DOMAIN= "kodluyoruz.org"
let email = userName + "@" + DOMAIN

console.log("Merhaba" , userName , "sitemize hoşgeldin" ," mail adresin " , email)


let info = `Merhaba ${userName} sitemize hoşgeldin.. mail adresin ${email}
mail adresinin uzunluğu ${email.length}
borcunuz: ${(2+3)*10} tl
günün saat bilgisi : ${ new Date().getHours()}
kısa isminiz : ${userName[0]}.

`

console.log(info)

//String İşlemleri

let firstName="Hakan"
let lastName="Yalçınkaya"
email="hakanyalcinkaya@kodluyoruz.org"

//string karekter sayısı

console.log(email.length)

//ilk karekter bulma

console.log(firstName[0])
console.log(firstName.charAt(0))

//büyük küçük harf
//firstName=firstName.toUpperCase()
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
// string içinde istediğimiz bilgiyi aramak yerini bulmak  !!search()
// string içinde istediğimiz bilgiyi aramak yerini bulmak  !!indexOf()

console.log(email.search("@"))

console.log(email.slice(15))  // domain bilgisi

console.log(email.search("asddasds"))  //--> -1
console.log(email[15])
//  belirli yerleri yazdırma !! slice

let mailDomain = email.slice(email.search("@")+1,email.indexOf(".")) //sadece alan adı yazma
console.log(mailDomain)



// belli yeri değiştirme


console.log(email.replace("kodluyoruz.org","gmail.com"))

// istenilen bilgi var mı sorgulama

console.log(email.includes("@"))  // true
console.log(email.includes("kjkj"))  //false

// istediğim bilgi ile bitti mi , başladı mı


console.log(email.startsWith("ha"))
console.log(email.startsWith("org"))
console.log(email.endsWith("org"))
console.log(email.endsWith("ha"))


//ilk harfleri büyük yapmak
firstName="firStname"
lastName="lastnaMe"
fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}  `

console.log(fullName)


console.log(document.location)
console.log(document.body)
console.log(document.head)
console.log(document.baseURI)

document.body.style.backgroundColor="aqua"
