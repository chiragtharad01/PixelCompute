let passwordGeneratedSection = document.getElementById("generated-password");
// passwordGeneratedSection.value = "QJFLKDS"

const generatePassword = () =>{
    let passwordLength = document.getElementById("set-password-length").value;
    if(document.querySelectorAll("input[name]:checked").length===0){
        let optionAlert = document.getElementById("options-alert");
        optionAlert.style.display = 'block'
        setTimeout(()=>{
            optionAlert.style.display = 'none'
        },3000)
        return;
    }
    let select = document.querySelectorAll("input[name]:checked");
    let number, letter, mixed, punctuation;
    Array.from(select).forEach((check)=>{
        if(check.id === 'number'){
            number = true;
        }else if(check.id === 'letter'){
            letter = true;
        }else if(check.id === 'mixed'){
            mixed = true;
        }else{
            punctuation = true;
        }
    })
    let arr = "";
    if(number) arr = arr+"0123456789";
    if(letter) arr = arr+"qwertyuiopasdfghjklzxcvbnm";
    if(mixed) {
        if(letter){
            arr = arr+"QWERTYUIOPASDFGHJKLZXCVBNM";
        }else{
            arr = arr+"qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
        }
    }
    if(punctuation){
        arr = arr+"!@#$%^&*./";
    }
    console.log(arr)
    let length = arr.length;
    let password = "";
    for(let i = 0;i<passwordLength;i++){
        password = password+arr[Math.floor(Math.random()*(arr.length-1))]
    }
    passwordGeneratedSection.value = password
}

let copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener('click',()=>{
    let password = document.getElementById("generated-password").value;
    console.log(password)
    if(!password){
        return;
    }
      navigator.clipboard.writeText(password);
      let copyAlert = document.getElementById("copy-alert");
      copyAlert.style.display = 'block';
      setTimeout(()=>{
        copyAlert.style.display = 'none'
      },3000)

}) 
window.addEventListener('DOMContentLoaded',()=>{
    generatePassword()
})