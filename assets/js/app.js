
const uniData = []
const schools

const schoolData = () => {

    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=110635,110644,110653,110662,445188,110671,110680,110705,110714,111188,110486,441937,110538,110547,110574,110556,110565,110583,110592,409698,110608,110617,110510,366711,110495,110422,110529,123572,122755,122409,115755,122597&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,school.minority_serving.hispanic,school.state_fips,latest.admissions.admission_rate.overall,latest.student.size,latest.academics.program_percentage.agriculture,latest.academics.program_percentage.resources,latest.academics.program_percentage.architecture,latest.academics.program_percentage.ethnic_cultural_gender,latest.academics.program_percentage.communication,latest.academics.program_percentage.computer,latest.academics.program_percentage.education,latest.academics.program_percentage.engineering,latest.academics.program_percentage.engineering_technology,latest.academics.program_percentage.language,latest.academics.program_percentage.family_consumer_science,latest.academics.program_percentage.english,latest.academics.program_percentage.humanities,latest.academics.program_percentage.biological,latest.academics.program_percentage.mathematics,latest.academics.program_percentage.multidiscipline,latest.academics.program_percentage.parks_recreation_fitness,latest.academics.program_percentage.philosophy_religious,latest.academics.program_percentage.physical_science,latest.academics.program_percentage.psychology,latest.academics.program_percentage.security_law_enforcement,latest.academics.program_percentage.public_administration_social_service,latest.academics.program_percentage.social_science,latest.academics.program_percentage.transportation,latest.academics.program_percentage.visual_performing,latest.academics.program_percentage.health,latest.student.size,latest.academics.program_percentage.business_marketing,latest.academics.program_percentage.history,latest.academics.program.bachelors.agriculture,latest.academics.program.bachelors.resources,latest.academics.program.bachelors.architecture,latest.academics.program.bachelors.ethnic_cultural_gender,latest.academics.program.bachelors.communication,latest.academics.program.bachelors.computer,latest.academics.program.bachelors.education,latest.academics.program.bachelors.engineering,latest.academics.program.bachelors.engineering_technology,latest.academics.program.bachelors.language,latest.academics.program.bachelors.family_consumer_science,latest.academics.program.bachelors.english,latest.academics.program.bachelors.humanities,latest.academics.program.bachelors.biological,latest.academics.program.bachelors.mathematics,latest.academics.program.bachelors.multidiscipline,latest.academics.program.bachelors.parks_recreation_fitness,latest.academics.program.bachelors.philosophy_religious,latest.academics.program.bachelors.physical_science,latest.academics.program.bachelors.psychology,latest.academics.program.bachelors.security_law_enforcement,latest.academics.program.bachelors.public_administration_social_service,latest.academics.program.bachelors.social_science,latest.academics.program.bachelors.transportation,latest.academics.program.bachelors.visual_performing,latest.academics.program.bachelors.health,latest.academics.program.bachelors.business_marketing,latest.academics.program.bachelors.history,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
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

            for (let i = 0; i < 32; i++) {
                schools.push(results[i]["school.name"])
            }

        })
        .catch(e => console.error(e))
}

schoolData()


const schoolCoords = () => {

    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=110635,110644,110653,110662,445188,110671,110680,110705,110714,111188,110486,441937,110538,110547,110574,110556,110565,110583,110592,409698,110608,110617,110510,366711,110495,110422,110529,123572,122755,122409,115755,122597&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,school.minority_serving.hispanic,school.state_fips,latest.admissions.admission_rate.overall,latest.student.size,latest.academics.program_percentage.agriculture,latest.academics.program_percentage.resources,latest.academics.program_percentage.architecture,latest.academics.program_percentage.ethnic_cultural_gender,latest.academics.program_percentage.communication,latest.academics.program_percentage.computer,latest.academics.program_percentage.education,latest.academics.program_percentage.engineering,latest.academics.program_percentage.engineering_technology,latest.academics.program_percentage.language,latest.academics.program_percentage.family_consumer_science,latest.academics.program_percentage.english,latest.academics.program_percentage.humanities,latest.academics.program_percentage.biological,latest.academics.program_percentage.mathematics,latest.academics.program_percentage.multidiscipline,latest.academics.program_percentage.parks_recreation_fitness,latest.academics.program_percentage.philosophy_religious,latest.academics.program_percentage.physical_science,latest.academics.program_percentage.psychology,latest.academics.program_percentage.security_law_enforcement,latest.academics.program_percentage.public_administration_social_service,latest.academics.program_percentage.social_science,latest.academics.program_percentage.transportation,latest.academics.program_percentage.visual_performing,latest.academics.program_percentage.health,latest.student.size,latest.academics.program_percentage.business_marketing,latest.academics.program_percentage.history,latest.academics.program.bachelors.agriculture,latest.academics.program.bachelors.resources,latest.academics.program.bachelors.architecture,latest.academics.program.bachelors.ethnic_cultural_gender,latest.academics.program.bachelors.communication,latest.academics.program.bachelors.computer,latest.academics.program.bachelors.education,latest.academics.program.bachelors.engineering,latest.academics.program.bachelors.engineering_technology,latest.academics.program.bachelors.language,latest.academics.program.bachelors.family_consumer_science,latest.academics.program.bachelors.english,latest.academics.program.bachelors.humanities,latest.academics.program.bachelors.biological,latest.academics.program.bachelors.mathematics,latest.academics.program.bachelors.multidiscipline,latest.academics.program.bachelors.parks_recreation_fitness,latest.academics.program.bachelors.philosophy_religious,latest.academics.program.bachelors.physical_science,latest.academics.program.bachelors.psychology,latest.academics.program.bachelors.security_law_enforcement,latest.academics.program.bachelors.public_administration_social_service,latest.academics.program.bachelors.social_science,latest.academics.program.bachelors.transportation,latest.academics.program.bachelors.visual_performing,latest.academics.program.bachelors.health,latest.academics.program.bachelors.business_marketing,latest.academics.program.bachelors.history,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
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

            for (let i = 0; i < 32; i++) {
                console.log(results[i]["school.locale"])
            }

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


//`https://api.data.gov/ed/collegescorecard/v1/schools?id=110635,110644,110653,110662,445188,110671,110680,110705,110714,111188,110486,441937,110538,110547,110574,110556,110565,110583,110592,409698,110608,110617,110510,366711,110495,110422,110529,123572,122755,122409,115755,122597&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,school.degree_urbanization,school.minority_serving.hispanic,school.state_fips,latest.admissions.admission_rate.overall,latest.student.size,latest.academics.program_percentage.agriculture,latest.academics.program_percentage.resources,latest.academics.program_percentage.architecture,latest.academics.program_percentage.ethnic_cultural_gender,latest.academics.program_percentage.communication,latest.academics.program_percentage.computer,latest.academics.program_percentage.education,latest.academics.program_percentage.engineering,latest.academics.program_percentage.engineering_technology,latest.academics.program_percentage.language,latest.academics.program_percentage.family_consumer_science,latest.academics.program_percentage.english,latest.academics.program_percentage.humanities,latest.academics.program_percentage.biological,latest.academics.program_percentage.mathematics,latest.academics.program_percentage.multidiscipline,latest.academics.program_percentage.parks_recreation_fitness,latest.academics.program_percentage.philosophy_religious,latest.academics.program_percentage.physical_science,latest.academics.program_percentage.psychology,latest.academics.program_percentage.security_law_enforcement,latest.academics.program_percentage.public_administration_social_service,latest.academics.program_percentage.social_science,latest.academics.program_percentage.transportation,latest.academics.program_percentage.visual_performing,latest.academics.program_percentage.health,latest.student.size,latest.academics.program_percentage.business_marketing,latest.academics.program_percentage.history,latest.academics.program.bachelors.agriculture,latest.academics.program.bachelors.resources,latest.academics.program.bachelors.architecture,latest.academics.program.bachelors.ethnic_cultural_gender,latest.academics.program.bachelors.communication,latest.academics.program.bachelors.computer,latest.academics.program.bachelors.education,latest.academics.program.bachelors.engineering,latest.academics.program.bachelors.engineering_technology,latest.academics.program.bachelors.language,latest.academics.program.bachelors.family_consumer_science,latest.academics.program.bachelors.english,latest.academics.program.bachelors.humanities,latest.academics.program.bachelors.biological,latest.academics.program.bachelors.mathematics,latest.academics.program.bachelors.multidiscipline,latest.academics.program.bachelors.parks_recreation_fitness,latest.academics.program.bachelors.philosophy_religious,latest.academics.program.bachelors.physical_science,latest.academics.program.bachelors.psychology,latest.academics.program.bachelors.security_law_enforcement,latest.academics.program.bachelors.public_administration_social_service,latest.academics.program.bachelors.social_science,latest.academics.program.bachelors.transportation,latest.academics.program.bachelors.visual_performing,latest.academics.program.bachelors.health,latest.academics.program.bachelors.business_marketing,latest.academics.program.bachelors.history,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`


// const loadSignUp = () => {
//     document.querySelector(".signUp").innerHTML = `
//     <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
//   aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header text-center">
//         <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body mx-3">
//         <div class="md-form mb-5">
//           <i class="fas fa-envelope prefix grey-text"></i>
//           <input type="email" id="defaultForm-email" class="form-control validate">
//           <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
//         </div>

//         <div class="md-form mb-4">
//           <i class="fas fa-lock prefix grey-text"></i>
//           <input type="password" id="defaultForm-pass" class="form-control validate">
//           <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
//         </div>

//       </div>
//       <div class="modal-footer d-flex justify-content-center">
//         <button class="btn btn-default">Login</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `
// }

// loadSignUp()







// Form: Loads & prevents from closing
$(document).ready(function(){
    $("#signUp").modal({backdrop: 'static', keyboard:false, show:true});
  });


  let schools = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];



  const autocomplete = (inputField, searchArray) => {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus
    /*execute a function when someone writes in the text field:*/
    inputField.addEventListener("input", e => {
        let list, item, val = e.target.value
        /*close any already open lists of autocompleted values*/
        closeAllLists()
        if (!val) { return false;}
        currentFocus = -1
        /*create a DIV element that will contain the items (values):*/
        list = document.createElement("DIV")
        list.setAttribute("id", e.target.id + "autocomplete-list")
        list.setAttribute("class", "autocomplete-items")
        /*append the DIV element as a child of the autocomplete container:*/
        e.target.parentNode.appendChild(list)
        /*for each item in the array...*/
        for (let i = 0; i < searchArray.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (searchArray[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            item = document.createElement("DIV")
            /*make the matching letters bold:*/
            item.innerHTML = "<strong>" + searchArray[i].substr(0, val.length) + "</strong>";
            item.innerHTML += searchArray[i].substr(val.length)
            /*insert a input field that will hold the current array item's value:*/
            item.innerHTML += "<input type='hidden' value='" + searchArray[i] + "'>"
            /*execute a function when someone clicks on the item value (DIV element):*/
                item.addEventListener("click", e =>{
                /*insert the value for the autocomplete text field:*/
                inputField.value = e.target.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            list.appendChild(item);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inputField.addEventListener("keydown", e => {
        let list = document.getElementById(e.target.id + "autocomplete-list");
        if (list) list = list.getElementsByTagName("div")
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++
          /*and and make the current item more visible:*/
          addActive(list)
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--
          /*and and make the current item more visible:*/
          addActive(list)
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault()
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (list) list[currentFocus].click()
          }
        }
    });
    const addActive = (list) => {
      /*a function to classify an item as "active":*/
      if (!x) return false
      /*start by removing the "active" class on all items:*/
      removeActive(list)
      if (currentFocus >= list.length) currentFocus = 0
      if (currentFocus < 0) currentFocus = (list.length - 1)
      /*add class "autocomplete-active":*/
      list[currentFocus].classList.add("autocomplete-active")
    }
    const removeActive = (list) => {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("autocomplete-active");
      }
    }
    const closeAllLists = (elmnt) => {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      let list = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < list.length; i++) {
        if (elmnt != list[i] && elmnt != inputField) {
        list[i].parentNode.removeChild(list[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", e => {
      closeAllLists(e.target)
  });
  }


  autocomplete(document.getElementById("myInput"), schools);