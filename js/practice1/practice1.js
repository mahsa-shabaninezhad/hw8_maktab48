let submit = document.querySelector(".btn")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let form = document.getElementById('form')
let inputs = document.getElementsByTagName('input')
let textArea = document.getElementById('subject')
let emailPatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let phonePatt = /^(09)+\d{9}$/g;

email.addEventListener("input", check);
phone.addEventListener("input", check);

function check(e){
    let id = this.id;
    let messeage,patt;
    
    id == "email" ? messeage = "ایمیل" : messeage = "شماره تماس";
    id == "email" ? patt = emailPatt : patt = phonePatt;

    patt.lastIndex = 0
    patt.test(this.value)
      ? document.getElementById(`auth-${id}`).innerHTML = ""
      : document.getElementById(`auth-${id}`).innerHTML = `لطفا ${messeage} را درست وارد کنید!`;

}


form.addEventListener('submit',function(e){
  //
  emailPatt.lastIndex = 0
  phonePatt.lastIndex = 0
  let submit = true
  
  for(let i=0; i< inputs.length; i++){
    if(inputs[i].value === ''){
      inputs[i].style.borderColor = 'red'
      submit = false
    }else{
      inputs[i].style.borderColor = 'rgb(219, 218, 218)'
    }
  }
  if (textArea.value === '') {
    textArea.style.borderColor = 'red'
    submit = false
  }else{
      textArea.style.borderColor = 'rgb(219, 218, 218)'
  }

  if(!phonePatt.test(phone.value)){
    submit = false
  }

  if(!emailPatt.test(email.value)){
    console.log('hello');
    submit = false
  }

  if(!submit){
    e.returnValue = false
  }
})

