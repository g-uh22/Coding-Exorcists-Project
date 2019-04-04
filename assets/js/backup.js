// Form: Loads & prevents from closing
$(document).ready(function(){
  $("#signUp").modal({backdrop: 'static', keyboard:false, show:true});
});

// const isValidEmail = emailField.checkValidity();
// if ( isValidEmail ) {
//   document.write("")
// } else {
//   document.write('Please enter a valuid email')
// }

// // emailField.addEventListener('keyup', function (event) {
// //   isValidEmail = emailField.checkValidity();
// // });

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

// $('#submit-btn').click(function(){
//   errorMessage = "please enter a valid email",
//       $email = $('#email');
// }
// Form errors
// document.querySelector('#defaultForm-email')


  // let email = document.getElementById('#email') 
  // let filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // $(".form-errors").text("The form is not complete").show();

  
  // if (!filter.test(email.value) {
  //   messa
  // })


  // function validate() {
  //   var $result = $("#result");
  //   var email = $("#email").val();
  //   $result.text("");
  
  //   if (validateEmail(email)) {
  //     $result.text(email + " is valid :)")();
  //     // $result.css("color", "green");
  //   } else {
  //     $result.text(email + " is not valid :(");
  //     $result.css("color", "red");
  //   }
  //   return false;
  // }
  
  // $("#validate").on("click", validate);
  
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });
//   rapid 

// Successful Sign-up
// function() {
//     let msg = document.getElementById('msg');
// }



// //Get Modal Element
// const modal = document.getElementById('registerModal');
// //open modal button
// const modalBtn = document.getElementById('modalBtn');
// //Close Button
// const closebtn = document.getElementsByClassName('closebtn')

// //Listen for open click
// modalBtn.addEventListener('click', openModal);
// //Listen for close click
// modalBtn.addEventListener('click', closeModal);
// //Listen for outside Click
// modalBtn.addEventListener('click', outsideClick);

// //Function to open modal
// function openModal() {
//     modal.style.display = 'block';
// }