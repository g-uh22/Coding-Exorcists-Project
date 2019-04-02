const uniData = [{
    school: 'University of California-Irvine',
    id: 110653
},
{
    school: 'University of California-Irvine',//replace university
    id: 110653 //replace id
}
]

fetch('https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=5c221ff448d1c7f08a04de1abb0653aa')
    .then(r => r.json())
    .then(r => {
        console.log(r);
    })

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=37.8719&lon=-122.2585&units=imperial&appid=5c221ff448d1c7f08a04de1abb0653aa`)
    .then(r => r.json())
    .then(r => {
        console.log(r);
    })