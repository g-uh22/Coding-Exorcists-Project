// Form: Loads & prevents from closing
$(document).ready(function () {
    $("#signUp").modal({ backdrop: 'static', keyboard: false, show: true });
    //$("#signUp").modal('show');
});


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


$("#registerbtn").on("click", e=> {
    e.preventDefault();
    $('#signUp').modal('hide')
});


// $('#registerbtn').submit(function(e) {
//     e.preventDefault();
//     // Coding
//     $('#signUp').modal('toggle'); //or  $('#IDModal').modal('hide');
//     return false;
// });


// $("#registerbtn").on("click", function(e) {
    // $("#myModal").removeClass("in");
    // $(".modal-backdrop").remove();
    // $('body').removeClass('modal-open');
    // $('body').css('padding-right', '');
    // $("#myModal").hide();
//   })

//latest.academics.program.bachelors.

const programs = [{
    id: "agriculture",
    programname: "Agricultural Studies"
},
{
    id: "resources",
    programname: "Natural Resouces & Conservation Studies"
},
{
    id: "architecture",
    programname: "Architectural Studies"
},
{
    id: "ethnic_cultural_gender",
    programname: "Ethnic, Cultural, and Gender Studies"
},
{
    id: "communication",
    programname: "Communication & Journalism Studies"
},
{
    id: "computer",
    programname: "Computer Science and Related"
},
{
    id: "education",
    programname: "Education Studies"
},
{
    id: "engineering",
    programname: "Engineering Sciences"
},
{
    id: "engineering_technology",
    programname: "Engineering Technologies"
},
{
    id: "language",
    programname: "Language Studies"
},
{
    id: "family_consumer_science",
    programname: "Family Studies"
},
{
    id: "english",
    programname: "English Studies"
},
{
    id: "humanities",
    programname: "Humanities"
},
{
    id: "biological",
    programname: "Biological & Biomedical Sciences"
},
{
    id: "mathematics",
    programname: "Mathematics & Statistics"
},
{
    id: "multidiscipline",
    programname: "Multi/Interdisciplinary Studies"
},
{
    id: "parks_recreation_fitness",
    programname: "Parks, Recreation, and Fitness Studies"
},
{
    id: "philosophy_religious",
    programname: "Philosophy & Religious Studies"
},
{
    id: "physical_science",
    programname: "Physical Sciences"
},
{
    id: "psychology",
    programname: "Psychology"
},
{
    id: "security_law_enforcement",
    programname: "Protective Services Studies"
},
{
    id: "public_administration_social_service",
    programname: "Public Administration & Social Service Studies"
},
{
    id: "social_science",
    programname: "Social Sciences"
},
{
    id: "transportation",
    programname: "Transportation and Material Studies" 
},
{
    id: "visual_performing",
    programname: "Visual & Performing Arts" 
},
{
    id: "health",
    programname: "Public Health & Related Programs" 
},
{
    id: "business_marketing",
    programname: "Business, Management, Marketing, & Economics" 
},
{
    id: "history",
    programname: "History Studies" 
},
    
]

const uniData = []


const schoolData = () => {

    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=110635,110644,110653,110662,445188,110671,110680,110705,110714,111188,110486,441937,110538,110547,110574,110556,110565,110583,110592,409698,110608,110617,110510,366711,110495,110422,110529,123572,122755,122409,115755,122597&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,school.minority_serving.hispanic,school.state_fips,latest.admissions.admission_rate.overall,latest.student.size,latest.academics.program_percentage.agriculture,latest.academics.program_percentage.resources,latest.academics.program_percentage.architecture,latest.academics.program_percentage.ethnic_cultural_gender,latest.academics.program_percentage.communication,latest.academics.program_percentage.computer,latest.academics.program_percentage.education,latest.academics.program_percentage.engineering,latest.academics.program_percentage.engineering_technology,latest.academics.program_percentage.language,latest.academics.program_percentage.family_consumer_science,latest.academics.program_percentage.english,latest.academics.program_percentage.humanities,latest.academics.program_percentage.biological,latest.academics.program_percentage.mathematics,latest.academics.program_percentage.multidiscipline,latest.academics.program_percentage.parks_recreation_fitness,latest.academics.program_percentage.philosophy_religious,latest.academics.program_percentage.physical_science,latest.academics.program_percentage.psychology,latest.academics.program_percentage.security_law_enforcement,latest.academics.program_percentage.public_administration_social_service,latest.academics.program_percentage.social_science,latest.academics.program_percentage.transportation,latest.academics.program_percentage.visual_performing,latest.academics.program_percentage.health,latest.academics.program_percentage.business_marketing,latest.academics.program_percentage.history,latest.academics.program.bachelors.agriculture,latest.academics.program.bachelors.resources,latest.academics.program.bachelors.architecture,latest.academics.program.bachelors.ethnic_cultural_gender,latest.academics.program.bachelors.communication,latest.academics.program.bachelors.computer,latest.academics.program.bachelors.education,latest.academics.program.bachelors.engineering,latest.academics.program.bachelors.engineering_technology,latest.academics.program.bachelors.language,latest.academics.program.bachelors.family_consumer_science,latest.academics.program.bachelors.english,latest.academics.program.bachelors.humanities,latest.academics.program.bachelors.biological,latest.academics.program.bachelors.mathematics,latest.academics.program.bachelors.multidiscipline,latest.academics.program.bachelors.parks_recreation_fitness,latest.academics.program.bachelors.philosophy_religious,latest.academics.program.bachelors.physical_science,latest.academics.program.bachelors.psychology,latest.academics.program.bachelors.security_law_enforcement,latest.academics.program.bachelors.public_administration_social_service,latest.academics.program.bachelors.social_science,latest.academics.program.bachelors.transportation,latest.academics.program.bachelors.visual_performing,latest.academics.program.bachelors.health,latest.academics.program.bachelors.business_marketing,latest.academics.program.bachelors.history,latest.student.size,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
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

            for (let i = 0; i < 32; i++) {

                schools.push(results[i]["school.name"])
                schoolsId.push(results[i].id)
            }

        })
        .catch(e => console.error(e))

}

schoolData()

let card0={}
let card1={}
let card2={}

const genCardInfo = () => {

    let selectedSchools = document.querySelectorAll(`.selectedSchool`)
    let school0 = selectedSchools[0].dataset.schoolidnum
    let school1 = selectedSchools[1].dataset.schoolidnum
    let school2 = selectedSchools[2].dataset.schoolidnum
    let lat
    let lon
    let city

    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=${school0},${school1},${school2}&_fields=location.lat,location.lon,id,school.name,school.city,school.zip&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
        .then(r => r.json())
        .then(({ results }) => {
console.log(results)
            
            results.forEach(school => {
                lat = school["location.lat"]
                lon = school["location.lon"]
                city = school["school.city"]

let URL = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&term&categories=restaurant&limit=3`;

const API_KEY = `iVz6PibRAoLRoTSl56wquqWLvwwmn2iiP4Wo1iQ5s0mMnZCWH-z1fJxqUrJ28RPlnzVPnkwGmTuccBdYABv17K_608JxM8HAmq8syuOHiB59yKC8Pb5-djqI6KWfXHYx`;

let queryURL = `https://cors-anywhere.herokuapp.com/${URL}`;

            fetch( queryURL, {
  
                method: "GET",
                headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin":"*",
                "Authorization": `Bearer ${API_KEY}`
            }
            }).then(res => res.json())
 
             .then(URL => {
            console.log(URL)
            });
                //////////////////////////////////////////////////
                /////CALL WEATHER AND YELP API FUNCTIONS HERE/////
                //////////////////////////////////////////////////

                console.log(lat)
                console.log(lon)
                console.log(city)
            });
            

        })
        .catch(e => console.error(e))

}
document.addEventListener('click', e =>{
    if (document.querySelectorAll(`.selectedSchool`).length===3){
    if (e.target.id==="genCards"){
        e.preventDefault();
        genCardInfo()
    }
}
})

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


let schools = [];
let schoolsId = []



const autocomplete = (inputField, searchArray, key) => {

    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus
    /*execute a function when someone writes in the text field:*/
    inputField.addEventListener("input", e => {
        let list, item, val = e.target.value, inputArea= e.target.id
        /*close any already open lists of autocompleted values*/
        closeAllLists()
        if (!val) { return false; }
        currentFocus = -1
        /*create a div element that will contain the items (values):*/
        list = document.createElement("div")
        list.setAttribute("id", e.target.id + "autocomplete-list")
        list.setAttribute("class", "autocomplete-items")
        /*append the DIV element as a child of the autocomplete container:*/
        e.target.parentNode.appendChild(list)
        /*for each item in the array...*/
        for (let i = 0; i < searchArray.length; i++) {
            let id = searchArray[i].id
            /*check if the item starts with the same letters as the text field value:*/
            if (searchArray[i][key].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a div element for each matching element:*/
                item = document.createElement("div")
                item.setAttribute("id", id)
                console.log(document.querySelector('#threeSchools').childElementCount)
                if (document.querySelector('#threeSchools').childElementCount > 0) {
                    console.log(document.querySelector('#threeSchools').childNodes[0])

                    for (let j = 0; j < document.querySelector('#threeSchools').childElementCount; j++) {
                        if (document.querySelector('#threeSchools').childNodes[j].id === item.id) {
                            item.setAttribute("class", "disabled")
                        }
                    }

                }
                if (item.className === "disabled") {
                    item.innerHTML += searchArray[i][key]
                } else {
                    /*make the matching letters bold:*/
                    item.innerHTML = "<strong>" + searchArray[i][key].substr(0, val.length) + "</strong>";
                    item.innerHTML += searchArray[i][key].substr(val.length)
                    /*insert a input field that will hold the current array item's value:*/
                    item.innerHTML += `<input type="hidden" value="${searchArray[i][key]}">`
                }


                /*execute a function when someone clicks on the item value (DIV element):*/
                item.addEventListener("click", e => {
                    console.log(e.currentTarget.getElementsByTagName("input")[0])
                    /*insert the value for the autocomplete text field:*/
                    inputField.value = ''
                    //inputField.value = e.currentTarget.getElementsByTagName("input")[0];

                    if (inputArea==="schools"){
                    selectedSchool = document.createElement("div")
                    selectedSchool.setAttribute("class", "selectedSchool")
                    selectedSchool.setAttribute("id", `${id}`)
                    selectedSchool.setAttribute("data-schoolname", `${e.currentTarget.getElementsByTagName("input")[0].value}`)
                    selectedSchool.setAttribute("data-schoolidnum", `${id}`)
                    selectedSchool.innerHTML = `
                    <p>${e.currentTarget.getElementsByTagName("input")[0].value}</p>
                    <input type="image" class="img-fluid delete" id="delete${id}" data-schoolid="${id}" src="./assets/images/garbage.svg" width="50px auto">
                    `
                    // selectedSchool.textContent = e.currentTarget.getElementsByTagName("input")[0].value;

                    document.querySelector('#threeSchools').appendChild(selectedSchool)
                    //document.getElementById(`${e.currentTarget.getElementsByTagName("input")[0].value}`).setAttribute("class", "disabled")
                    //console.log(document.getElementById(`${e.currentTarget.getElementsByTagName("input")[0].value}`))

                    if (document.querySelector('#threeSchools').childElementCount === 3) {
                        inputField.disabled = true
                        inputField.placeholder = "Please remove a school to search"
                    }
                }else if (inputArea==="majors"){
                    document.querySelector('#selectedProgram').setAttribute('data-programid',`${id}`)
                    document.querySelector('#selectedProgram').setAttribute('data-programname',`${e.currentTarget.getElementsByTagName("input")[0].value}`)
                    document.querySelector('#selectedProgram').innerHTML=`
                    <p>${e.currentTarget.getElementsByTagName("input")[0].value}</p>
                    `
                }
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                //document.getElementById(`${e.currentTarget.getElementsByTagName("input")[0].value}`).setAttribute("class", "disabled")

                list.appendChild(item);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inputField.addEventListener("keydown", e => {
        let autoCompleteList = document.getElementById(e.target.id + "autocomplete-list");
        if (autoCompleteList) autoCompleteList = autoCompleteList.getElementsByTagName("div")
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++
            /*and and make the current item more visible:*/
            addActive(autoCompleteList)
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--
            /*and and make the current item more visible:*/
            addActive(autoCompleteList)
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault()
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (autoCompleteList) list[currentFocus].click()
            }
        }
    });
    const addActive = (autoCompleteList) => {
        /*a function to classify an item as "active":*/
        if (!autoCompleteList) return false
        /*start by removing the "active" class on all items:*/
        removeActive(autoCompleteList)
        if (currentFocus >= autoCompleteList.length) currentFocus = 0
        if (currentFocus < 0) currentFocus = (autoCompleteList.length - 1)
        /*add class "autocomplete-active":*/
        autoCompleteList[currentFocus].classList.add("autocomplete-active")
    }
    const removeActive = (autoCompleteList) => {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < autoCompleteList.length; i++) {
            autoCompleteList[i].classList.remove("autocomplete-active");
        }
    }
    const closeAllLists = (elmnt) => {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let autoCompleteList = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < autoCompleteList.length; i++) {
            if (elmnt != autoCompleteList[i] && elmnt != inputField) {
                autoCompleteList[i].parentNode.removeChild(autoCompleteList[i]);
            }
        }
    }

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", e => {
        closeAllLists(e.target)
    });
}

document.addEventListener('click', ({ target }) => {


    if (target.id === `delete${target.dataset.schoolid}`) {
        console.log(document.querySelector(`#delete${target.dataset.schoolid}`))
        let element = document.getElementById(document.querySelector(`#delete${target.dataset.schoolid}`).dataset.schoolid)
        console.log(element)
        element.parentNode.removeChild(element);

        if (document.querySelector('#threeSchools').childElementCount < 3) {
            document.getElementById("schools").disabled = false
            document.getElementById("schools").placeholder = "Schools"
        }
    }
})

//console.log(uniData[0].school)
autocomplete(document.getElementById("schools"), uniData, "school")
autocomplete(document.getElementById("majors"), programs, "programname")







































// const object = [{
//     one: "test",
//     two: "subject"
// },
// {
//     one: "love",
//     two: "cool"
// }]

// const findKeys = (array, key) => {
//     for (let i = 0; i<array.length; i++){
//         console.log(array[i][key])
//     }
// }

// findKeys(object, "one")

// var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function(e) {
//         var a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//           /*check if the item starts with the same letters as the text field value:*/
//           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//             /*create a DIV element for each matching element:*/
//             b = document.createElement("DIV");
//             /*make the matching letters bold:*/
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//             b.innerHTML += arr[i].substr(val.length);
//             /*insert a input field that will hold the current array item's value:*/
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//             /*execute a function when someone clicks on the item value (DIV element):*/
//                 b.addEventListener("click", function(e) {
//                     console.log(e.currentTarget.getElementsByTagName("input")[0])
//                 /*insert the value for the autocomplete text field:*/
//                 inp.value = this.getElementsByTagName("input")[0].value;
//                 /*close the list of autocompleted values,
//                 (or any other open lists of autocompleted values:*/
//                 closeAllLists();
//             });
//             a.appendChild(b);
//           }
//         }
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//           /*If the arrow DOWN key is pressed,
//           increase the currentFocus variable:*/
//           currentFocus++;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 38) { //up
//           /*If the arrow UP key is pressed,
//           decrease the currentFocus variable:*/
//           currentFocus--;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 13) {
//           /*If the ENTER key is pressed, prevent the form from being submitted,*/
//           e.preventDefault();
//           if (currentFocus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (x) x[currentFocus].click();
//           }
//         }
//     });
//     function addActive(x) {
//       /*a function to classify an item as "active":*/
//       if (!x) return false;
//       /*start by removing the "active" class on all items:*/
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
//       /*add class "autocomplete-active":*/
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//       /*a function to remove the "active" class from all autocomplete items:*/
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
//       /*close all autocomplete lists in the document,
//       except the one passed as an argument:*/
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }
//   /*execute a function when someone clicks in the document:*/
//   document.addEventListener("click", function (e) {
//       closeAllLists(e.target);
//   });
//   }

//   autocomplete(document.getElementById("myInput"), countries);


// $('#closeModal').submit(function(e) {
//   e.preventDefault();
//     $('#signUp').modal('hide');
//     return false;
//   });

// $('#button').submit(function(e) {
//   e.preventDefault();
//   // Coding
//   $('#IDModal').modal('toggle'); //or  $('#IDModal').modal('hide');
//   return false;
// });

// document.addEventListener('click', ({target})=>{
//     if (target.id==="registerbtn"){
//         $('#signUp').modal('hide')
//         $('#secondmodalid').modal('show')
//     }
// })