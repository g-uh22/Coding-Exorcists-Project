
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


const uniData = []


const schoolData = () => {

    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=110635,110644,110653,110662,445188,110671,110680,110705,110714,111188,110486,441937,110538,110547,110574,110556,110565,110583,110592,409698,110608,110617,110510,366711,110495,110422,110529,123572,122755,122409,115755,122597&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,school.degree_urbanization,school.minority_serving.hispanic,school.state_fips,latest.admissions.admission_rate.overall,latest.student.size,latest.academics.program_percentage.agriculture,latest.academics.program_percentage.resources,latest.academics.program_percentage.architecture,latest.academics.program_percentage.ethnic_cultural_gender,latest.academics.program_percentage.communication,latest.academics.program_percentage.computer,latest.academics.program_percentage.education,latest.academics.program_percentage.engineering,latest.academics.program_percentage.engineering_technology,latest.academics.program_percentage.language,latest.academics.program_percentage.family_consumer_science,latest.academics.program_percentage.english,latest.academics.program_percentage.humanities,latest.academics.program_percentage.biological,latest.academics.program_percentage.mathematics,latest.academics.program_percentage.multidiscipline,latest.academics.program_percentage.parks_recreation_fitness,latest.academics.program_percentage.philosophy_religious,latest.academics.program_percentage.physical_science,latest.academics.program_percentage.psychology,latest.academics.program_percentage.security_law_enforcement,latest.academics.program_percentage.public_administration_social_service,latest.academics.program_percentage.social_science,latest.academics.program_percentage.transportation,latest.academics.program_percentage.visual_performing,latest.academics.program_percentage.health,latest.student.size,latest.academics.program_percentage.business_marketing,latest.academics.program_percentage.history,latest.academics.program.bachelors.agriculture,latest.academics.program.bachelors.resources,latest.academics.program.bachelors.architecture,latest.academics.program.bachelors.ethnic_cultural_gender,latest.academics.program.bachelors.communication,latest.academics.program.bachelors.computer,latest.academics.program.bachelors.education,latest.academics.program.bachelors.engineering,latest.academics.program.bachelors.engineering_technology,latest.academics.program.bachelors.language,latest.academics.program.bachelors.family_consumer_science,latest.academics.program.bachelors.english,latest.academics.program.bachelors.humanities,latest.academics.program.bachelors.biological,latest.academics.program.bachelors.mathematics,latest.academics.program.bachelors.multidiscipline,latest.academics.program.bachelors.parks_recreation_fitness,latest.academics.program.bachelors.philosophy_religious,latest.academics.program.bachelors.physical_science,latest.academics.program.bachelors.psychology,latest.academics.program.bachelors.security_law_enforcement,latest.academics.program.bachelors.public_administration_social_service,latest.academics.program.bachelors.social_science,latest.academics.program.bachelors.transportation,latest.academics.program.bachelors.visual_performing,latest.academics.program.bachelors.health,latest.academics.program.bachelors.business_marketing,latest.academics.program.bachelors.history,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
        .then(r => r.json())
        .then(({ results }) => {

            console.log(results)
            for (let i = 0; i < 32; i++) {
                uniData.push({
                    school: results[i]["school.name"],
                    id: results[i].id,
                    lat: results[i]["location.lat"],
                    long: results[i]["location.lon"]

                })
            }
            console.log(uniData)

        })
        .catch(e => console.error(e))
}

// const schoolLocation = () => {

//     fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=110635,110644,110653,110662,445188,110671,110680,110705,110714,111188,110486,441937,110538,110547,110574,110556,110565,110583,110592,409698,110608,110617,110510,366711,110495,110422,110529,123572,122755,122409,115755,122597&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,school.degree_urbanization,school.minority_serving.hispanic,school.state_fips,latest.admissions.admission_rate.overall,latest.student.size,latest.academics.program_percentage.agriculture,latest.academics.program_percentage.resources,latest.academics.program_percentage.architecture,latest.academics.program_percentage.ethnic_cultural_gender,latest.academics.program_percentage.communication,latest.academics.program_percentage.computer,latest.academics.program_percentage.education,latest.academics.program_percentage.engineering,latest.academics.program_percentage.engineering_technology,latest.academics.program_percentage.language,latest.academics.program_percentage.family_consumer_science,latest.academics.program_percentage.english,latest.academics.program_percentage.humanities,latest.academics.program_percentage.biological,latest.academics.program_percentage.mathematics,latest.academics.program_percentage.multidiscipline,latest.academics.program_percentage.parks_recreation_fitness,latest.academics.program_percentage.philosophy_religious,latest.academics.program_percentage.physical_science,latest.academics.program_percentage.psychology,latest.academics.program_percentage.security_law_enforcement,latest.academics.program_percentage.public_administration_social_service,latest.academics.program_percentage.social_science,latest.academics.program_percentage.transportation,latest.academics.program_percentage.visual_performing,latest.academics.program_percentage.health,latest.student.size,latest.academics.program_percentage.business_marketing,latest.academics.program_percentage.history,latest.academics.program.bachelors.agriculture,latest.academics.program.bachelors.resources,latest.academics.program.bachelors.architecture,latest.academics.program.bachelors.ethnic_cultural_gender,latest.academics.program.bachelors.communication,latest.academics.program.bachelors.computer,latest.academics.program.bachelors.education,latest.academics.program.bachelors.engineering,latest.academics.program.bachelors.engineering_technology,latest.academics.program.bachelors.language,latest.academics.program.bachelors.family_consumer_science,latest.academics.program.bachelors.english,latest.academics.program.bachelors.humanities,latest.academics.program.bachelors.biological,latest.academics.program.bachelors.mathematics,latest.academics.program.bachelors.multidiscipline,latest.academics.program.bachelors.parks_recreation_fitness,latest.academics.program.bachelors.philosophy_religious,latest.academics.program.bachelors.physical_science,latest.academics.program.bachelors.psychology,latest.academics.program.bachelors.security_law_enforcement,latest.academics.program.bachelors.public_administration_social_service,latest.academics.program.bachelors.social_science,latest.academics.program.bachelors.transportation,latest.academics.program.bachelors.visual_performing,latest.academics.program.bachelors.health,latest.academics.program.bachelors.business_marketing,latest.academics.program.bachelors.history,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
//         .then(r => r.json())
//         .then(({ results }) => {

//             console.log(results)
//             for (let i = 0; i < 32; i++) {
//                 uniData.push({
//                     school: results[i]["school.name"],
//                     id: results[i].id,
//                     lat: results[i]["location.lat"],
//                     long: results[i]["location.lon"]

//                 })
//             }
//             console.log(uniData)

//         })
//         .catch(e => console.error(e))
// }

////REMOVED:////
//personal_culinary
//military
//theology_religious_vocation"
//science_technology
//construction
//mechanic_repair_technology"
//precision_production
//communications tech
//legal
//library



