// Form: Loads & prevents from closing
$(document).ready(function () {
    $("#signUp").modal({ backdrop: 'static', keyboard: false, show: true });
    //$("#signUp").modal('show');
});


$("#registerbtn").on("click", e => {
    e.preventDefault();
    $('#signUp').modal('hide')
});


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
            for (let i = 0; i < 32; i++) {
                uniData.push({
                    school: results[i]["school.name"],
                    id: results[i].id,
                    lat: results[i]["location.lat"],
                    long: results[i]["location.lon"]

                })
            }

        })
        .catch(e => console.error(e))

}

schoolData()

let card0 = {}
let card1 = {}
let card2 = {}

//this function takes a number and adds thousands separtors to it.
//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const numberWithCommas = (cost) => {
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const genCardInfo = () => {

    let selectedSchools = document.querySelectorAll(`.selectedSchool`)
    let school0 = selectedSchools[0].dataset.schoolidnum
    let school1 = selectedSchools[1].dataset.schoolidnum
    let school2 = selectedSchools[2].dataset.schoolidnum
    let progOfInt = document.querySelector(`#selectedProgram`).dataset.programid
    let card = 0
    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=${school0},${school1},${school2}&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,school.locale,latest.academics.program.bachelors.${progOfInt},latest.academics.program_percentage.${progOfInt},school.minority_serving.hispanic,latest.admissions.admission_rate.overall,latest.student.size,latest.student.size,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
        .then(r => r.json())
        .then(({ results }) => {

            results.forEach(school => {
                let id = school.id
                let lat = school["location.lat"]
                let lon = school["location.lon"]
                let city = school["school.city"]
                let name = school["school.name"]
                let size = school["school.locale"]
                let url = school["school.school_url"]
                let progOffered = school[`latest.academics.program.bachelors.${progOfInt}`]
                let progOfferedText
                let percGrad = Math.round(school[`latest.academics.program_percentage.${progOfInt}`] * 100)
                let admRate = Math.round(school["latest.admissions.admission_rate.overall"] * 100)
                let cost = `$${numberWithCommas(school["latest.cost.attendance.academic_year"].toFixed(2))}`
                let percFem = Math.round(school["latest.student.demographics.female_share"] * 100)
                let firstGen = Math.round(school["latest.student.demographics.first_generation"] * 100)
                let aian = Math.round(school["latest.student.demographics.race_ethnicity.aian"] * 100)
                let asian = Math.round(school["latest.student.demographics.race_ethnicity.asian"] * 100)
                let api = Math.round(school["latest.student.demographics.race_ethnicity.asian_pacific_islander"] * 100)
                let black = Math.round(school["latest.student.demographics.race_ethnicity.black"] * 100)
                let hispanic = Math.round(school["latest.student.demographics.race_ethnicity.hispanic"] * 100)
                let nhpi = Math.round(school["latest.student.demographics.race_ethnicity.nhpi"] * 100)
                let white = Math.round(school["latest.student.demographics.race_ethnicity.white"] * 100)
                let hsi = school["school.minority_serving.hispanic"]



                switch (hsi) {
                    case 0:
                        hsi = "This is not a Hispanic Serving Institution"

                    case 1:

                        hsi = "This is a Hispanic Serving Institution"
                }

                //////////////////////////////////////////////////
                /////CALL WEATHER AND YELP API FUNCTIONS HERE/////
                //////////////////////////////////////////////////

                weather(lat, lon, card)
                nearbyRestaurants(lat, lon, card)


                //ENVIRONMENT IMAGES


                weather(lat, lon, card)
                nearbyRestaurants(lat, lon, card)


                /////SCHOOL IMGES
                // document.querySelector(`#mLogo${card}`).setAttribute("src", `"./assets/images/${school0}.png"`)
                // document.querySelector(`#dLogo${card}`).setAttribute("src", `"./assets/images/${school0}.png"`)

                // document.querySelector(`#dLogo${card}`).setAttribute("src", `"./assets/images/${school1}.png"`)
                // document.querySelector(`#mLogo${card}`).setAttribute("src", `"./assets/images/${school1}.png"`)


                // document.querySelector(`#dLogo${card}`).setAttribute("src", `"./assets/images/${school2}.png"`)
                // document.querySelector(`#mLogo${card}`).setAttribute("src", `"./assets/images/${school2}.png"`)

                if (size <= 13) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/cityscape.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/cityscape.svg")
                }
                if (size > 13 && size <= 23) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/home.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/home.svg")
                    
                }
                if (size > 23 && size <= 33) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/village.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/village.svg")
                }
                if (size > 33 && size <= 43) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/fields.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/fields.svg")

                }


                document.querySelector(`#mTitle${card}`).innerHTML = name
                document.querySelector(`#dTitle${card}`).innerHTML = name

                switch (progOffered) {
                    case 0:
                        progOfferedText = "This program is not offered here."
                        document.querySelector(`#mSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>`

                        document.querySelector(`#dSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>`
                    case 1:
                        progOfferedText = "This Program is offfered here!"
                        document.querySelector(`#mSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>
                        
                        <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percGrad}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of students that graduated from this program last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${admRate}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of applicants that were accepted to the University last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${cost}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Approximate annual cost of attending this institution including tuition, housing, textbooks and supplies, and food.</p>
                        </div>
                      </div>

                        `

                        document.querySelector(`#dSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>
                        
                        <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percGrad}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of students that graduated from this program last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${admRate}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of applicants that were accepted to the University last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${cost}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Approximate annual cost of attending this institution including tuition, housing, textbooks and supplies, and food.</p>
                        </div>
                      </div>

                        `
                }

               

                document.querySelector(`#mDemDetails${card}`).innerHTML = `
                <h3 class="sectionTitle align-middle">Demographics Snapshot:</h3>
                <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percFem}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of student body that is female.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${firstGen}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students who are the first in their families to attend higher education.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${hispanic}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hispanic.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${black}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of African descent.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${aian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as American Indian or Alaskan Native.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${white}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of Students who are Caucasian.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${asian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian background.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${api}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian or Pacific Islander heritage.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${nhpi}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hawaian or Pacific Islander.</p>
                      </div>
                    </div>

                `


                document.querySelector(`#dDemDetails${card}`).innerHTML = `
                <h3 class="sectionTitle align-middle">Demographics Snapshot:</h3>
                <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percFem}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of student body that is female.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${firstGen}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students who are the first in their families to attend higher education.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${hispanic}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hispanic.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${black}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of African descent.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${aian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as American Indian or Alaskan Native.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${white}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of Students who are Caucasian.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${asian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian background.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${api}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian or Pacific Islander heritage.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${nhpi}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hawaian or Pacific Islander.</p>
                      </div>
                    </div>

                `
                card++

            });

                if (size <= 13) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/cityscape.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/cityscape.svg")
                }
                if (size > 13 && size <= 23) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/home.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/home.svg")

                }
                if (size > 23 && size <= 33) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/village.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/village.svg")
                }
                if (size > 33 && size <= 43) {
                    document.querySelector(`#mEnv${card}`).setAttribute("src", "./assets/images/fields.svg")
                    document.querySelector(`#dEnv${card}`).setAttribute("src", "./assets/images/fields.svg")

                }

                //CARDS: SCHOOL INFORMATION
                //PROGRAM INFO
                document.querySelector(`#mTitle${card}`).innerHTML = name
                document.querySelector(`#dTitle${card}`).innerHTML = name

                switch (progOffered) {
                    case 0:
                        progOfferedText = "This program is not offered here."
                        document.querySelector(`#mSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>`

                        document.querySelector(`#dSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>`
                    case 1:
                        progOfferedText = "This Program is offfered here!"
                        document.querySelector(`#mSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>
                        
                        <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percGrad}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of students that graduated from this program last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${admRate}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of applicants that were accepted to the University last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${cost}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Approximate annual cost of attending this institution including tuition, housing, textbooks and supplies, and food.</p>
                        </div>
                      </div>

                        `

                        document.querySelector(`#dSchool${card}`).innerHTML = `
                        <h3 sectionTitle align-middle>${progOfferedText}</h3>
                        
                        <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percGrad}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of students that graduated from this program last year.</p>
                        </div>
                      </div>
                        
                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${admRate}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of applicants that were accepted to the University last year.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${cost}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Approximate annual cost of attending this institution including tuition, housing, textbooks and supplies, and food.</p>
                        </div>
                      </div>

                        `
                }

                document.querySelector(`#mDemDetails${card}`).innerHTML = `
                <h3 class="sectionTitle align-middle">Demographics Snapshot:</h3>
                <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percFem}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of student body that is female.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${firstGen}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students who are the first in their families to attend higher education.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${hispanic}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hispanic.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${black}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of African descent.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${aian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as American Indian or Alaskan Native.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${white}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of Students who are Caucasian.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${asian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian background.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${api}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian or Pacific Islander heritage.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${nhpi}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hawaian or Pacific Islander.</p>
                      </div>
                    </div>

                `


                document.querySelector(`#dDemDetails${card}`).innerHTML = `
                <h3 class="sectionTitle align-middle">Demographics Snapshot:</h3>
                <div class="card scrollContent" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${percFem}%</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="info">Percent of student body that is female.</p>
                        </div>
                      </div>

                      <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${firstGen}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students who are the first in their families to attend higher education.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${hispanic}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hispanic.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${black}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of African descent.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${aian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as American Indian or Alaskan Native.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${white}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of Students who are Caucasian.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${asian}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian background.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${api}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students of Asian or Pacific Islander heritage.</p>
                      </div>
                    </div>

                    <div class="card scrollContent" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title">${nhpi}%</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="info">Percent of students identifying as Hawaian or Pacific Islander.</p>
                      </div>
                    </div>

                `


                //SCHOOL IMAGES 
                document.querySelector(`#mLogo${card}`).setAttribute("src", `./assets/images/${id}.png`)
                document.querySelector(`#dLogo${card}`).setAttribute("src", `./assets/images/${id}.png`)

                card++

            });

        })
        .catch(e => console.error(e))

}

//WEATHER API

const weather = (lat, lon, card) => {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}5&units=imperial&appid=5c221ff448d1c7f08a04de1abb0653aa`)
        .then(r => r.json())
        .then(({ city, list }) => {
            let storeWeather = []
            let weatherIcon = []
            let iconElement
            let tempElement
            let mIconElement
            let mTempElement
            for (i = 0; i < list.length; i++) {

                if (list[i].dt_txt.includes("15:00:00")) {
                    storeWeather.push(list[i].main.temp)
                    weatherIcon.push(list[i].weather[0].icon)
                }
            }

            for (j = 0; j < storeWeather.length; j++) {

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
                document.querySelector(`#dWeather${card}`).append(dDayContainer)
                document.querySelector(`#mWeather${card}`).append(mDayContainer)

            }
        })
        .catch(e => console.error(e))
}



document.addEventListener('click', e => {
    e.preventDefault();
    if (document.querySelectorAll(`.selectedSchool`).length === 3 && document.querySelector('#selectedProgram').childElementCount === 1) {
        if (e.target.id === "genCards") {
            document.querySelector(`#beginSearch`).style.display = "none"
            document.querySelector(`.logoBackground`).style.display = "none"
            document.querySelector(`#myCarousel`).style.display = "block"

            genCardInfo()
        }
    }
})

//AUTOCOMPLETE
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
                if (document.querySelector('#threeSchools').childElementCount > 0) {
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
                    <input type="image" class="img-fluid delete" id="delete${id}" data-schoolid="${id}" src="./assets/images/garbage.svg" width="40px auto">
                    `
                        document.querySelector('#threeSchools').appendChild(selectedSchool)

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
                if (autoCompleteList) autoCompleteList[currentFocus].click()
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
        let element = document.getElementById(document.querySelector(`#delete${target.dataset.schoolid}`).dataset.schoolid)
        element.parentNode.removeChild(element);

        if (document.querySelector('#threeSchools').childElementCount < 3) {
            document.getElementById("schools").disabled = false
            document.getElementById("schools").placeholder = "Schools"
        }
    }
})

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

//YELP API

const API_KEY = `iVz6PibRAoLRoTSl56wquqWLvwwmn2iiP4Wo1iQ5s0mMnZCWH-z1fJxqUrJ28RPlnzVPnkwGmTuccBdYABv17K_608JxM8HAmq8syuOHiB59yKC8Pb5-djqI6KWfXHYx`;
let queryURL
let urlYelp

const nearbyRestaurants = (lat, lon, card) => {

    urlYelp = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&term&categories=restaurant&limit=3`;

    queryURL = `https://cors-anywhere.herokuapp.com/${urlYelp}`;
    let rating = []
    let name = []
    let url = []
    let price = []
    let address1 = []
    let address2 = []
    let city = []
    let state = []
    let zipcode = []
    let type = []
    // let image = []


    fetch(queryURL, {

        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${API_KEY}`
        }
    }).then(r => r.json())
        .then(({ businesses }) => {

            for (let i = 0; i < 3; i++) {


                rating.push(businesses[i].rating)
                name.push(businesses[i].name)
                url.push(businesses[i].url)
                price.push(businesses[i].price)
                address1.push(businesses[i].location.address1)
                address2.push(businesses[i].location.address2)
                city.push(businesses[i].location.city)
                state.push(businesses[i].location.state)
                zipcode.push(businesses[i].location.zip_code)
                type.push(businesses[i].categories[0].title)
                // image.push(businesses[i].image_url)

            }
            //CARDS: YELP INFORMATION
            document.querySelector(`#mYelp${card}`).innerHTML = `
                                <div class="card scrollContent" style="width: 18rem;">
                                 <div class="card-body text-center">
                                 <h5><a class="card-title text-bold" a href="${url[0]}">${name[0]} </a></h5>
                                 <p class="text-muted">${type[0]}</p>
                                 <h9 class="card-subtitle mb-2"><b>Rating:</b> ${rating[0]} out of 5</h9>
                                 <br>
                                  <p><b>Price:</b> ${price[0]}</p>
                                 <p>
                                 ${address1[0]} ${address2[0]}<br>
                                ${city[0]}, ${state[0]}<br>
                                 ${zipcode[0]}
                                 </p>

                                   </div>
                                </div>

                                <div class="card scrollContent" style="width: 18rem;">
                                    <div class="card-body text-center">
                                    <h5><a class="card-title text-bold" a href="${url[1]}">${name[1]} </a></h5>
                                    <p><h9 class="text-muted">${type[1]}</p></h9>
                                    <h9 class="card-subtitle mb-2"><b>Rating:</b> ${rating[1]} out of 5</h9>
                                    <br>
                                     <p><b>Price:</b>${price[1]}</p>
                                    <p>
                                    ${address1[1]} ${address2[1]}<br>
                                   ${city[1]}, ${state[1]}<br>
                                    ${zipcode[1]}
                                    </p>
                          </p>
                                     </div>
                                 </div>

                            <div class="card scrollContent" style="width: 18rem;">
                                 <div class="card-body text-center">
                                 <h5><a class="card-title text-bold" a href="${url[2]}">${name[2]} </a></h5>
                                 <p><h9 class="text-muted">${type[2]}</p></h9>
                                 <h9 class="card-subtitle mb-2"><b>Rating:</b> ${rating[2]} out of 5</h9>
                                 <br>
                                  <p><b>Price:</b> ${price[2]}</p>
                                 <p>
                                 ${address1[2]} ${address2[2]}<br>
                                ${city[2]}, ${state[2]}<br>
                                 ${zipcode[2]}
                                 </p>
                                </div>
                            </div>
                         `

            document.querySelector(`#dYelp${card}`).innerHTML = `
                         <div class="card scrollContent" style="width: 18rem;">
<
                          <div class="card-body text-center">
                          <h5><a class="card-title text-bold" a href="${url[0]}">${name[0]} </a></h5>
                          <p><h9 class="text-muted">${type[0]}</p></h9>
                          <h9 class="card-subtitle mb-2 text-muted"><b>Rating:</b> ${rating[0]} out of 5</h9>
                          <br>
                          <p><b>Price:</b>${price[0]}</p>
                          <p>
                          ${address1[0]} ${address2[0]}<br>
                          ${city[0]}, ${state[0]}<br>
                          ${zipcode[0]}
                          </p>
                             </div>
                         </div>

                         <div class="card scrollContent" style="width: 18rem;">
                             <div class="card-body text-center">
                             <h5><a class="card-title text-bold" a href="${url[1]}">${name[1]} </a></h5>
                             <p><h9 class="text-muted">${type[1]}</p></h9>
                          <h9 class="card-subtitle mb-2 text-muted"><b>Rating:</b> ${rating[1]} out of 5</h9>
                          <p><b>Price:</b>${price[1]}</p>
                          <p>
                          ${address1[1]} ${address2[1]}<br>
                          ${city[1]}, ${state[1]}<br>
                          ${zipcode[1]}
                          </p>
                              </div>
                          </div>

                     <div class="card scrollContent" style="width: 18rem;">
                          <div class="card-body text-center">
                          <h5><a class="card-title text-bold" a href="${url[2]}">${name[2]} </a></h5>
                          <p><h9 class="text-muted">${type[2]}</p></h9>
                          <h9 class="card-subtitle mb-2 text-muted"><b>Rating:</b> ${rating[2]} out of 5</h9>
                          <br>
                          <p><b>Price:</b>${price[2]}</p>
                          <p>
                          ${address1[2]} ${address2[2]}<br>
                          ${city[2]}, ${state[2]}<br>
                          ${zipcode[2]}
                          </p>
                         </div>
                     </div>
                  `

        })
}
