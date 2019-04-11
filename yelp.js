// const genCardInfo = () => {

//     let selectedSchools = document.querySelectorAll(`.selectedSchool`)
//     let school0 = selectedSchools[0].dataset.schoolidnum
//     let school1 = selectedSchools[1].dataset.schoolidnum
//     let school2 = selectedSchools[2].dataset.schoolidnum
//     let progOfInt = document.querySelector(`#selectedProgram`).dataset.programid
//     let lat
//     let lon
//     let city

//     fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?id=${school0},${school1},${school2}&_fields=location.lat,location.lon,id,school.name,school.city,school.zip,latest.academics.program.bachelors.${progOfInt},latest.academics.program_percentage.${progOfInt},school.minority_serving.hispanic,latest.admissions.admission_rate.overall,latest.student.size,latest.student.size,latest.cost.attendance.academic_year,latest.student.demographics.female_share,latest.student.demographics.first_generation,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.asian_pacific_islander,school.school_url&_per_page=32&api_key=IP4euHv2WjsUP1jrD2yCi4dQtC4B3jOARrFVQiLL`)
//         .then(r => r.json())
//         .then(({ results }) => {
//             console.log(results)

//             results.forEach(school => {
//                 lat = school["location.lat"]
//                 lon = school["location.lon"]
//                 city = school["school.city"]
//                 progOffered = school[`latest.academics.program.bachelors.${progOfInt}`]
//                 percGrad = school[`latest.academics.program_percentage.${progOfInt}`]
//                 admRate = Math.round(school["latest.admissions.admission_rate.overall"] * 100)
//                 cost = `"$"${school["latest.cost.attendance.academic_year"].toFixed(2)}`
//                 percFem = Math.round(school["latest.student.demographics.female_share"] * 100)



//                 //////////////////////////////////////////////////
//                 /////CALL WEATHER AND YELP API FUNCTIONS HERE/////
//                 //////////////////////////////////////////////////
//                 weather(lat, lon)
//                 yelp(lat,lon)

//                 console.log(lat)
//                 console.log(lon)
//                 console.log(city)
//             });


//         })
//         .catch(e => console.error(e))

// // // start of yelp api         
// // let apiKey = 'iVz6PibRAoLRoTSl56wquqWLvwwmn2iiP4Wo1iQ5s0mMnZCWH-z1fJxqUrJ28RPlnzVPnkwGmTuccBdYABv17K_608JxM8HAmq8syuOHiB59yKC8Pb5-djqI6KWfXHYx';
// // let yelp = new yelpAPI(apiKey);

// //  // parametersrs - latitude and longitude
// //         let params = [
// //             { latitude: `${lat}` },
// //             { longitude: `${lon}` }
// //         ];

// //         // Call the endpoint
// //         yelp.query('businesses/search', params)
// //         .then(data => {
// //           // Success
// //           console.log(data);
// //         })
// //         .catch(err => {
// //           // Failure
// // //           console.log(err);
// //         });

lat = [32.7757]
lon = [-117.0719]

let URL = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&term&categories=restaurant&limit=3`;

const API_KEY = `iVz6PibRAoLRoTSl56wquqWLvwwmn2iiP4Wo1iQ5s0mMnZCWH-z1fJxqUrJ28RPlnzVPnkwGmTuccBdYABv17K_608JxM8HAmq8syuOHiB59yKC8Pb5-djqI6KWfXHYx`;

let queryURL = `https://cors-anywhere.herokuapp.com/${URL}`;

fetch(queryURL, {

    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${API_KEY}`
    }
}).then(r => r.json())
.then(businesses => {
    // Success
    console.log(businesses.name);
    // document.querySelector('.name').textContent = `${businesses.name} Details`
})
    .catch(err => {
        //   Failure
        console.log(err);
                    // .then(businesses) => {
                    //     // //restaurant name
                    //     document.querySelector('.name').textContent = `${business.name} Details`
        //                 //Displays 5 Day Forecast
        //                 let storeWeather = []
        //                 let weatherIcon = []
        //                 let iconElement
        //                 let tempElement
        //                 let mIconElement
        //                 let mTempElement
        //                 console.log(mIconElement)
        //                 for (i = 0; i < list.length; i++) {

        //                     if (list[i].dt_txt.includes("15:00:00")) {
        //                         // console.log(lat, lon)
        //                         // console.log(~~`${list[i].main.temp}`)
        //                         storeWeather.push(list[i].main.temp)
        //                         weatherIcon.push(list[i].weather[0].icon)
        //                     }
        //                 }

        //                 for (j = 0; j < storeWeather.length; j++) {

        //                     if (document.querySelector('#dCard0').childElementCount >= 3) {
        //                         if (document.querySelector('#dCard1').childElementCount >= 3) {

        //                             if (document.querySelector('#dCard2').childElementCount >= 3) {

        //                             } else {

        //                                 iconElement = document.createElement('div')
        //                                 tempElement = document.createElement('div')
        //                                 mIconElement = document.createElement('div')
        //                                 mTempElement = document.createElement('div')
        //                                 iconElement.innerHTML = `#` alt= `${weatherIcon[j]}>`
        //                                 tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
        //                                 mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
        //                                 mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
        //                                 document.querySelector('#dCard2').append(iconElement)
        //                                 document.querySelector('#dCard2').append(tempElement)
        //                                 document.querySelector('#mCard2').append(mIconElement)
        //                                 document.querySelector('#mCard2').append(mTempElement)

        //                             }

        //                         } else {

        //                             iconElement = document.createElement('div')
        //                             tempElement = document.createElement('div')
        //                             mIconElement = document.createElement('div')
        //                             mTempElement = document.createElement('div')
        //                             iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
        //                             tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
        //                             mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
        //                             mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
        //                             document.querySelector('#dCard1').append(iconElement)
        //                             document.querySelector('#dCard1').append(tempElement)
        //                             document.querySelector('#mCard1').append(mIconElement)
        //                             document.querySelector('#mCard1').append(mTempElement)

        //                         }
        //                     } else {

        //                         iconElement = document.createElement('div')
        //                         tempElement = document.createElement('div')
        //                         mIconElement = document.createElement('div')
        //                         mTempElement = document.createElement('div')
        //                         iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
        //                         tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
        //                         mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
        //                         mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
        //                         document.querySelector('#dCard0').append(iconElement)
        //                         document.querySelector('#dCard0').append(tempElement)
        //                         document.querySelector('#mCard0').append(mIconElement)
        //                         document.querySelector('#mCard0').append(mTempElement)
        //                     }
        //                 }
        //             })

        //     }


        // }
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
                    console.log(mIconElement)
                    for (i = 0; i < list.length; i++) {

                        if (list[i].dt_txt.includes("15:00:00")) {
                            // console.log(lat, lon)
                            // console.log(~~`${list[i].main.temp}`)
                            storeWeather.push(list[i].main.temp)
                            weatherIcon.push(list[i].weather[0].icon)
                        }
                    }

                    for (j = 0; j < storeWeather.length; j++) {

                        if (document.querySelector('#dCard0').childElementCount >= 10) {
                            if (document.querySelector('#dCard1').childElementCount >= 10) {

                                if (document.querySelector('#dCard2').childElementCount >= 10) {

                                } else {

                                    iconElement = document.createElement('div')
                                    tempElement = document.createElement('div')
                                    mIconElement = document.createElement('div')
                                    mTempElement = document.createElement('div')
                                    iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                                    tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                                    mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                                    mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                                    document.querySelector('#dCard2').append(iconElement)
                                    document.querySelector('#dCard2').append(tempElement)
                                    document.querySelector('#mCard2').append(mIconElement)
                                    document.querySelector('#mCard2').append(mTempElement)

                                }

                            } else {

                                iconElement = document.createElement('div')
                                tempElement = document.createElement('div')
                                mIconElement = document.createElement('div')
                                mTempElement = document.createElement('div')
                                iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                                tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                                mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                                mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                                document.querySelector('#dCard1').append(iconElement)
                                document.querySelector('#dCard1').append(tempElement)
                                document.querySelector('#mCard1').append(mIconElement)
                                document.querySelector('#mCard1').append(mTempElement)

                            }
                        } else {

                            iconElement = document.createElement('div')
                            tempElement = document.createElement('div')
                            mIconElement = document.createElement('div')
                            mTempElement = document.createElement('div')
                            iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                            tempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                            mIconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherIcon[j]}.png" alt="${weatherIcon[j]}">`
                            mTempElement.innerHTML = ~~`${storeWeather[j]}` + "&#176"
                            document.querySelector('#dCard0').append(iconElement)
                            document.querySelector('#dCard0').append(tempElement)
                            document.querySelector('#mCard0').append(mIconElement)
                            document.querySelector('#mCard0').append(mTempElement)
                        }
                    }
                })

        }

    });
