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
    .then(({businesses}) => {
        // Success
        console.log(businesses[0].location.city);
        
        for(let i = 0; i < 0; i++) 
        let rating = businesses[0].rating
        let name = businesses[0].name
        let url = businesses[0].url

        console.log(rating)
        console.log(name)
        console.log(url)
    })

    .catch(err => {
        //   Failure
        console.log(err);
    })