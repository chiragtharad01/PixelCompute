let error = document.getElementById("error")
const loadData = async() =>{
    try{
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,currencies,flag");
        if(!response.ok){
            throw new Error('error');
        }
        const data = await response.json();
        // data = dataa;
        let fromSelect = document.getElementById("from");
        let toSelect = document.getElementById("to");

        data.forEach((country)=>{
            let {flag,x,currencies} = country;
            let name,symbol,coun;
            if(currencies){
                coun = Object.keys(currencies)[0];
                name = Object.values(currencies)[0]?.name;
                symbol = Object.values(currencies)[0]?.symbol;
            }
            let dataToPopulate = `${flag} ${coun ?? ''} - ${name ?? ''}`
            let option = document.createElement("option");
            option.classList.add(coun);
            option.textContent = dataToPopulate;
            fromSelect.appendChild(option)
            let o1 = document.createElement("option");
            o1.classList.add(coun);
            o1.textContent = dataToPopulate;
            toSelect.appendChild(o1);
        })
    }catch(err){
        error.textContent = err;
        console.log(err);
    }
}
let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener('click',async()=>{
    let fromCurrency = document.getElementById("from");
    let fromId = fromCurrency.options[fromCurrency.selectedIndex].classList[0];
    let toCurrency = document.getElementById("to");
    let toId = toCurrency.options[toCurrency.selectedIndex].classList[0];
    let userInput = document.getElementById("user-amount")
    console.log(userInput.value);
    console.log(fromId);
    console.log(toId)
    try{
        const val = await fetch(`https://v6.exchangerate-api.com/v6/647a89d02d53e98744ce5051/pair/${fromId}/${toId}/${userInput.value}`)
        if(!val.ok){
            throw new Error("error");
        }
        const resposneData = await val.json();
        console.log(resposneData.conversion_result)
        let result = document.getElementById("result");
        result.textContent = `${userInput.value} ${fromId} = ${resposneData.conversion_result} ${toId}`
    }catch(err){
        error.textContent = err;
        console.log(err);
    }
})
document.addEventListener('DOMContentLoaded', () => {
  loadData();
});




