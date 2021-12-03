const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.gov.uk/guidance/red-list-of-countries-and-territories';

axios(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const countries = []
        $('td:even', html).each(function() {
            country = $(this).text()
            countries.push(country)
        })
        console.log(countries)
    })
    .catch(err => console.log(err))


