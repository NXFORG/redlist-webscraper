const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.gov.uk/guidance/red-list-of-countries-and-territories';


axios(url)
.then(res => {
    const page = res.data
    const $ = cheerio.load(page)
    const countries = []
    $('td:even', page).each(function() {
        country = $(this).text()
        countries.push(country)
    })
    console.log(countries)
    //Do something else with the array here
})
.catch(err => console.log(err))



