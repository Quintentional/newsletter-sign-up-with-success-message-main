// --------------------Form Submission----------------------------

const email = document.querySelector('#email');
const error = document.querySelector('#error');
const subscribe = document.querySelector('#form-button');


subscribe.addEventListener('click', (event) => {
    event.preventDefault();
    if(!validateEmail(email.value)) {
        error.style.display="inline-block";
        email.classList.add('errored');
     }else{
        error.style.display = "none"; // Hide the error message if input is valid
        email.classList.remove('errored');
        email.value ="";
        const signUp = document.querySelector('#layout');
        const success = document.querySelector('#success');
        signUp.style.display="none";
        success.style.display="flex";
     }

})

  
  function validateEmail (email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(String(email).toLowerCase());
  }
  



// --------------------------------Return to main page-------------------------------


const dismiss = document.querySelector('#success-button');

dismiss.addEventListener('click', ()=> {
    const signUp = document.querySelector('#layout');
    const success = document.querySelector('#success');
    signUp.style.display="flex";
    success.style.display="none";
})



