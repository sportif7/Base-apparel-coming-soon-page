const email = document.getElementById('email');
const form = document.querySelector('form');
const validEmail = 'john.lennon@gmail.com';


const error_message = document.querySelector(".error-message");
const error_message_compStyles = window.getComputedStyle(error_message);

function setErrorMessageON(){
    if(error_message_compStyles.display==="none"){
         error_message.style.display = "block";
    }
}
function removeErrorMessage(){
    if(error_message_compStyles.display==="block"){
         error_message.style.display = "none";
    }
}

const inputElement = document.querySelector('input');
const input_compStyle = window.getComputedStyle(inputElement);
const errorBorder = "2px solid hsl(0, 93%, 68%)";
const inputBorder = "1.5px solid hsla(var(--clr-desaturated-red), 0.4)";

function setErrorBorder(){
    if(!(input_compStyle.border === errorBorder)){
        inputElement.style.border = "none";
        inputElement.style.border = errorBorder; 
    }
}

function removeErrorOutline(){
    if(!(input_compStyle.border === inputBorder)){
        inputElement.style.border="none"; 
        inputElement.style.border = inputBorder;
    }
}


const error_icon = document.querySelector('.error-icon');
const error_icon_compStyles = window.getComputedStyle(error_icon);

function setErrorIconON(){
     if (error_icon_compStyles.display === "none"){
         error_icon.style.display="inline-block";
     }
}

function removeErrorIcon(){
    if (!(error_icon_compStyles.display === "none")){
        error_icon.style.display="none";
    }
}

function setEmailInputSuccess(){
         removeErrorMessage();
         removeErrorOutline();
         removeErrorIcon();
}

function setEmailInputError(){
         setErrorMessageON();
         setErrorBorder();
         setErrorIconON();
}

function validateEmailInput(){
      if(!(email.value.match(validEmail))){
          setEmailInputError();
      }
      else{
         setEmailInputSuccess();
      }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault(); 
    validateEmailInput();
});


