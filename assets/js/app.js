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


$("#registerbtn").on("click", e => {
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

let card0 = {}
let card1 = {}
let card2 = {}

const genCardInfo = () => {

    let selectedSchools = document.querySelectorAll(`.selectedSchool`)
    let school0 = selectedSchools[0].dataset.schoolidnum
    let school1 = selectedSchools[1].dataset.schoolidnum
    let school2 = selectedSchools[2].dataset.schoolidnum
    let progOfInt = document.querySelector(`#selectedProgram`).dataset.programid
    let lat
    let lon
    let city

    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=${school0},${school1},${school2}&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,latest.academics.program.bachelors.${progOfInt},latest.academics.program_percentage.${progOfInt},school.minority_serving.hispanic,latest.admissions.admission_rate.overall,latest.student.size,latest.student.size,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
        .then(r => r.json())
        .then(({ results }) => {
            console.log(results)

            results.forEach(school => {
                lat = school["location.lat"]
                lon = school["location.lon"]
                city = school["school.city"]
                progOffered = school[`latest.academics.program.bachelors.${progOfInt}`]
                percGrad = school[`latest.academics.program_percentage.${progOfInt}`]
                admRate = Math.round(school["latest.admissions.admission_rate.overall"] * 100)
                cost = `"$"${school["latest.cost.attendance.academic_year"].toFixed(2)}`
                percFem = Math.round(school["latest.student.demographics.female_share"] * 100)



                //////////////////////////////////////////////////
                /////CALL WEATHER AND YELP API FUNCTIONS HERE/////
                //////////////////////////////////////////////////
                weather(lat, lon)

                console.log(lat)
                console.log(lon)
                console.log(city)
            });


        })
        .catch(e => console.error(e))

}
const weather = (lat, lon) => {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}5&units=imperial&appid=5c221ff448d1c7f08a04de1abb0653aa`)
        .then(r => r.json())
        .then(({ city, list }) => {
            // //Optional Place to Pull City Name
            // document.querySelector('.name').textContent = `${city.name} City Details`
            //Displays 5 Day Forecast
            let storeWeather = []
            let weatherIcon = []
            let iconElement
            let tempElement
            let mIconElement
            let mTempElement
            for (i = 0; i < list.length; i++) {

                if (list[i].dt_txt.includes("15:00:00")) {
                    // console.log(lat, lon)
                    // console.log(~~`${list[i].main.temp}`)
                    storeWeather.push(list[i].main.temp)
                    weatherIcon.push(list[i].weather[0].icon)
                }
            }

            for (j = 0; j < storeWeather.length; j++) {

                if (document.querySelector('#dWeather0').childElementCount >= 5) {
                    if (document.querySelector('#dWeather1').childElementCount >= 5) {
                        if (document.querySelector('#dWeather2').childElementCount >= 5) {

                        } else {

                            const dDayContainer = document.createElement('div')
                            const mDayContainer = document.createElement('div')
                            dDayContainer.setAttribute("class", "dayContainer")
                            mDayContainer.setAttribute("class", "dayContainer")
                            iconElement = document.createElement('div')
                            iconElement.setAttribute("class", "scrollContent")
                            tempElement = document.createElement('div')
                            tempElement.setAttribute("class", "scrollContent")
                            mIconElement = document.createElement('div')
                            mIconElement.setAttribute("class", "scrollContent")
                            mTempElement = document.createElement('div')
                            mTempElement.setAttribute("class", "scrollContent")
                            iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                            tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                            mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                            mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                            dDayContainer.append(iconElement)
                            dDayContainer.append(tempElement)
                            mDayContainer.append(mIconElement)
                            mDayContainer.append(mTempElement)
                            document.querySelector('#dWeather2').append(dDayContainer)
                            document.querySelector('#mWeather2').append(mDayContainer)

                        }

                    } else {
                        const dDayContainer = document.createElement('div')
                        const mDayContainer = document.createElement('div')
                        dDayContainer.setAttribute("class", "dayContainer")
                        mDayContainer.setAttribute("class", "dayContainer")
                        iconElement = document.createElement('div')
                        iconElement.setAttribute("class", "scrollContent")
                        tempElement = document.createElement('div')
                        tempElement.setAttribute("class", "scrollContent")
                        mIconElement = document.createElement('div')
                        mIconElement.setAttribute("class", "scrollContent")
                        mTempElement = document.createElement('div')
                        mTempElement.setAttribute("class", "scrollContent")
                        iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                        tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                        mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                        mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                        dDayContainer.append(iconElement)
                        dDayContainer.append(tempElement)
                        mDayContainer.append(mIconElement)
                        mDayContainer.append(mTempElement)
                        document.querySelector('#dWeather1').append(dDayContainer)
                        document.querySelector('#mWeather1').append(mDayContainer)
                    }
                } else {
                    const dDayContainer = document.createElement('div')
                    const mDayContainer = document.createElement('div')
                    dDayContainer.setAttribute("class","dayContainer")
                    mDayContainer.setAttribute("class","dayContainer")
                    iconElement = document.createElement('div')
                    iconElement.setAttribute("class", "scrollContent")
                    tempElement = document.createElement('div')
                    tempElement.setAttribute("class", "scrollContent")
                    mIconElement = document.createElement('div')
                    mIconElement.setAttribute("class", "scrollContent")
                    mTempElement = document.createElement('div')
                    mTempElement.setAttribute("class", "scrollContent")
                    iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                    tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                    mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                    mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                    dDayContainer.append(iconElement)
                    dDayContainer.append(tempElement)
                    mDayContainer.append(mIconElement)
                    mDayContainer.append(mTempElement)
                    document.querySelector('#dWeather0').append(dDayContainer)
                    document.querySelector('#mWeather0').append(mDayContainer)
                }
            }
        })

}

document.addEventListener('click', e => {
    if (document.querySelectorAll(`.selectedSchool`).length === 3) {
        if (e.target.id === "genCards") {
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
        let list, item, val = e.target.value, inputArea = e.target.id
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

                    if (inputArea === "schools") {
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
                    } else if (inputArea === "majors") {
                        document.querySelector('#selectedProgram').setAttribute('data-programid', `${id}`)
                        document.querySelector('#selectedProgram').setAttribute('data-programname', `${e.currentTarget.getElementsByTagName("input")[0].value}`)
                        document.querySelector('#selectedProgram').innerHTML = `
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

// Carousel JS
$(document).ready(function () {
    $("#myCarousel").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});
// Forces User to click arrow to change card
$('.carousel').carousel({
    interval: false
})