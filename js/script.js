
let rubIhave = document.querySelector('.rub-ihave')
let usdIhave = document.querySelector('.usd-ihave')
let eurIhave = document.querySelector('.eur-ihave')
let gbpIhave = document.querySelector('.gbp-ihave')

let rubIbuy = document.querySelector('.rub-ibuy')
let usdIbuy = document.querySelector('.usd-ibuy')
let eurIbuy = document.querySelector('.eur-ibuy')
let gbpIbuy = document.querySelector('.gbp-ibuy')

let formIhave = document.querySelector('.currency-input-ihave')

let currencyIhave = "RUB";

let currencyIbuy = "USD";

updateValue1InverseClick() 
updateValue2InverseClickiNIT()

// Получаем значение первого инпута

rubIhave.setAttribute("button-on", "1")


rubIhave.addEventListener('click', function (event) {
   
    rubIhave.setAttribute("button-on", "1")
    usdIhave.setAttribute("button-on", "0")
    eurIhave.setAttribute("button-on", "0")
    gbpIhave.setAttribute("button-on", "0")

    rubIhave.style.background = "#833AE0";
    rubIhave.style.borderColor = "#833AE0";
    rubIhave.style.color = "#FFFFFF";

    usdIhave.style.background = "#FFFFFF";
    usdIhave.style.borderColor = "#E5E5E5";
    usdIhave.style.color = "#C6C6C6";

    eurIhave.style.background = "#FFFFFF";
    eurIhave.style.borderColor = "#E5E5E5";
    eurIhave.style.color = "#C6C6C6";

    gbpIhave.style.background = "#FFFFFF";
    gbpIhave.style.borderColor = "#E5E5E5";
    gbpIhave.style.color = "#C6C6C6";

    currencyIhave = "RUB";

    updateValue1Click(input1.value)
    updateValue1InverseClick() 

})

usdIhave.addEventListener('click', function (event) {
   
    usdIhave.setAttribute("button-on", "1")
    rubIhave.setAttribute("button-on", "0")
    eurIhave.setAttribute("button-on", "0")
    gbpIhave.setAttribute("button-on", "0")

    usdIhave.style.background = "#833AE0";
    usdIhave.style.borderColor = "#833AE0";
    usdIhave.style.color = "#FFFFFF";

    rubIhave.style.background = "#FFFFFF";
    rubIhave.style.borderColor = "#E5E5E5";
    rubIhave.style.color = "#C6C6C6";
    
    eurIhave.style.background = "#FFFFFF";
    eurIhave.style.borderColor = "#E5E5E5";
    eurIhave.style.color = "#C6C6C6";

    gbpIhave.style.background = "#FFFFFF";
    gbpIhave.style.borderColor = "#E5E5E5";
    gbpIhave.style.color = "#C6C6C6";

    currencyIhave = "USD";

    updateValue1Click(input1.value)
    updateValue1InverseClick()
    
})

eurIhave.addEventListener('click', function (event) {
   
    eurIhave.setAttribute("button-on", "1")
    usdIhave.setAttribute("button-on", "0")
    rubIhave.setAttribute("button-on", "0")
    gbpIhave.setAttribute("button-on", "0")

    eurIhave.style.background = "#833AE0";
    eurIhave.style.borderColor = "#833AE0";
    eurIhave.style.color = "#FFFFFF";

    rubIhave.style.background = "#FFFFFF";
    rubIhave.style.borderColor = "#E5E5E5";
    rubIhave.style.color = "#C6C6C6";

    usdIhave.style.background = "#FFFFFF";
    usdIhave.style.borderColor = "#E5E5E5";
    usdIhave.style.color = "#C6C6C6";

    gbpIhave.style.background = "#FFFFFF";
    gbpIhave.style.borderColor = "#E5E5E5";
    gbpIhave.style.color = "#C6C6C6";

    currencyIhave = "EUR";

    updateValue1Click(input1.value)
    updateValue1InverseClick() 
})

gbpIhave.addEventListener('click', function (event) {
   
    gbpIhave.setAttribute("button-on", "1")
    eurIhave.setAttribute("button-on", "0")
    usdIhave.setAttribute("button-on", "0")
    rubIhave.setAttribute("button-on", "0")

    gbpIhave.style.background = "#833AE0";
    gbpIhave.style.borderColor = "#833AE0";
    gbpIhave.style.color = "#FFFFFF";

    rubIhave.style.background = "#FFFFFF";
    rubIhave.style.borderColor = "#E5E5E5";
    rubIhave.style.color = "#C6C6C6";

    usdIhave.style.background = "#FFFFFF";
    usdIhave.style.borderColor = "#E5E5E5";
    usdIhave.style.color = "#C6C6C6";

    eurIhave.style.background = "#FFFFFF";
    eurIhave.style.borderColor = "#E5E5E5";
    eurIhave.style.color = "#C6C6C6";

    currencyIhave = "GBP";

    updateValue1Click(input1.value)
    updateValue1InverseClick() 
    
})


// Получаем значение второго инпута

rubIbuy.addEventListener('click', function (event) {
   
    rubIbuy.setAttribute("button-on", "1")
    usdIbuy.setAttribute("button-on", "0")
    eurIbuy.setAttribute("button-on", "0")
    gbpIbuy.setAttribute("button-on", "0")

    rubIbuy.style.background = "#833AE0";
    rubIbuy.style.borderColor = "#833AE0";
    rubIbuy.style.color = "#FFFFFF";

    usdIbuy.style.background = "#FFFFFF";
    usdIbuy.style.borderColor = "#E5E5E5";
    usdIbuy.style.color = "#C6C6C6";

    eurIbuy.style.background = "#FFFFFF";
    eurIbuy.style.borderColor = "#E5E5E5";
    eurIbuy.style.color = "#C6C6C6";

    gbpIbuy.style.background = "#FFFFFF";
    gbpIbuy.style.borderColor = "#E5E5E5";
    gbpIbuy.style.color = "#C6C6C6";

    currencyIbuy = "RUB";

    updateValue2Click(input2.value)
    updateValue2InverseClick()
   
})

usdIbuy.addEventListener('click', function (event) {
   
    usdIbuy.setAttribute("button-on", "1")
    rubIbuy.setAttribute("button-on", "0")
    eurIbuy.setAttribute("button-on", "0")
    gbpIbuy.setAttribute("button-on", "0")

    usdIbuy.style.background = "#833AE0";
    usdIbuy.style.borderColor = "#833AE0";
    usdIbuy.style.color = "#FFFFFF";

    rubIbuy.style.background = "#FFFFFF";
    rubIbuy.style.borderColor = "#E5E5E5";
    rubIbuy.style.color = "#C6C6C6";
    
    eurIbuy.style.background = "#FFFFFF";
    eurIbuy.style.borderColor = "#E5E5E5";
    eurIbuy.style.color = "#C6C6C6";

    gbpIbuy.style.background = "#FFFFFF";
    gbpIbuy.style.borderColor = "#E5E5E5";
    gbpIbuy.style.color = "#C6C6C6";

    currencyIbuy = "USD";

    updateValue2Click(input2.value)
    updateValue2InverseClick()

})

eurIbuy.addEventListener('click', function (event) {
   
    eurIbuy.setAttribute("button-on", "1")
    usdIbuy.setAttribute("button-on", "0")
    rubIbuy.setAttribute("button-on", "0")
    gbpIbuy.setAttribute("button-on", "0")

    eurIbuy.style.background = "#833AE0";
    eurIbuy.style.borderColor = "#833AE0";
    eurIbuy.style.color = "#FFFFFF";

    rubIbuy.style.background = "#FFFFFF";
    rubIbuy.style.borderColor = "#E5E5E5";
    rubIbuy.style.color = "#C6C6C6";

    usdIbuy.style.background = "#FFFFFF";
    usdIbuy.style.borderColor = "#E5E5E5";
    usdIbuy.style.color = "#C6C6C6";

    gbpIbuy.style.background = "#FFFFFF";
    gbpIbuy.style.borderColor = "#E5E5E5";
    gbpIbuy.style.color = "#C6C6C6";

    currencyIbuy = "EUR";

    updateValue2Click(input2.value)
    updateValue2InverseClick()


})

gbpIbuy.addEventListener('click', function (event) {
   
    gbpIbuy.setAttribute("button-on", "1")
    eurIbuy.setAttribute("button-on", "0")
    usdIbuy.setAttribute("button-on", "0")
    rubIbuy.setAttribute("button-on", "0")

    gbpIbuy.style.background = "#833AE0";
    gbpIbuy.style.borderColor = "#833AE0";
    gbpIbuy.style.color = "#FFFFFF";

    rubIbuy.style.background = "#FFFFFF";
    rubIbuy.style.borderColor = "#E5E5E5";
    rubIbuy.style.color = "#C6C6C6";

    usdIbuy.style.background = "#FFFFFF";
    usdIbuy.style.borderColor = "#E5E5E5";
    usdIbuy.style.color = "#C6C6C6";

    eurIbuy.style.background = "#FFFFFF";
    eurIbuy.style.borderColor = "#E5E5E5";
    eurIbuy.style.color = "#C6C6C6";


    currencyIbuy = "GBP";

    updateValue2Click(input2.value)
    updateValue2InverseClick()

    
})

// Отслаживаем ввод формы 1/2 и определяем значение первой переменной

const input1 = document.querySelector('.first-box');
const input2 = document.querySelector('.second-box');

input1.addEventListener('input', updateValue1);
input2.addEventListener('input', updateValue2);

function updateValue1(e) {

    fetch(`https://api.exchangerate.host/latest?base=${currencyIhave}&symbols=${currencyIbuy}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIbuy]
    
  
     let converter = data.rates[currencyIbuy];
  
     console.log(converter)

     console.log(currencyIhave)
  
     input2.value = (e.target.value * converter).toFixed(4);
     
    })

    .catch(() => alert('Произошла ошибка, попробуйте позже'));
}

function updateValue2(e) {
    fetch(`https://api.exchangerate.host/latest?base=${currencyIbuy}&symbols=${currencyIhave}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIhave]
 
  
     let converter = data.rates[currencyIhave];
  
     console.log(converter)
  
     input1.value = (e.target.value * converter).toFixed(4);

    })

    .catch(() => alert('Произошла ошибка, попробуйте позже'));

}

// Прописываем расчеты при переключении кнопок


function updateValue1Click(e) {

    fetch(`https://api.exchangerate.host/latest?base=${currencyIhave}&symbols=${currencyIbuy}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIbuy]
   
  
     let converter = data.rates[currencyIbuy];
  
     console.log(converter)

     console.log(currencyIhave)
  
     input2.value = (e * converter).toFixed(4);

     bottomCurs1.innerText = `1 ${currencyIhave} = ${converter.toFixed(4)} ${currencyIbuy} `
  
    })
    .catch(() => alert('Произошла ошибка, попробуйте позже'));

}

function updateValue2Click(e) {
    fetch(`https://api.exchangerate.host/latest?base=${currencyIbuy}&symbols=${currencyIhave}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIhave]
    
  
     let converter = data.rates[currencyIhave];
  
     console.log(converter)
  
     input1.value = (e * converter).toFixed(4);

     bottomCurs2.innerText = `1 ${currencyIbuy} = ${converter.toFixed(4)} ${currencyIhave} `

     

    })

    .catch(() => alert('Произошла ошибка, попробуйте позже'));

}

function updateValue1InverseClick() {

    fetch(`https://api.exchangerate.host/latest?base=${currencyIhave}&symbols=${currencyIbuy}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIbuy]
   
  
     let converter = data.rates[currencyIbuy];

     let fixed = 1/converter
  
     bottomCurs2.innerText = `1 ${currencyIbuy} = ${fixed.toFixed(4)} ${currencyIhave} `
        

     
    })

    .catch(() => alert('Произошла ошибка, попробуйте позже'));

}

function updateValue2InverseClick() {

    fetch(`https://api.exchangerate.host/latest?base=${currencyIhave}&symbols=${currencyIbuy}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIbuy]
    
  
     let converter = data.rates[currencyIbuy];
  
     bottomCurs1.innerText = `1 ${currencyIbuy} = ${converter.toFixed(4)} ${currencyIhave} `

     
  
    }
    )

    .catch(() => alert('Произошла ошибка, попробуйте позже'));



}

function updateValue2InverseClickiNIT() {

    fetch(`https://api.exchangerate.host/latest?base=${currencyIhave}&symbols=${currencyIbuy}`)
    .then(response => response.json())
    .then(data => {data.rates[currencyIbuy]
    
    
  
     let converter = data.rates[currencyIbuy];

     let fixed = 1/converter;

     input2.value= fixed.toFixed(4)
  
     bottomCurs1.innerText = `1 ${currencyIhave} = ${converter.toFixed(4)} ${currencyIbuy} `

    
  
    })

    .catch(() => alert('Произошла ошибка, попробуйте позже'));

}


// Прописываем логику нижней плашки

const bottomCurs1 = document.querySelector('.bottom-label');
const bottomCurs2 = document.querySelector('.bottom-labe2');