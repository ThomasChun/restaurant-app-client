'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);

client.search({
  term:'aca grill',
  location: 'los angeles, ca'
}).then(response => {
  const restaurantsSearchResult = response.jsonBody.businesses;
  console.log(`Your search has returned ${restaurantsSearchResult.length} results!`);
  let filteredSearchData = restaurantsSearchResult.map(restaurant => {
    return {
      name: restaurant.name,
      id: restaurant.id,
      rating: restaurant.rating,
      price: restaurant.price,
      address: `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`,
      // image: restaurant.image_url,
      // url: restaurant.url,
    };
  });
  console.log(filteredSearchData);
}).catch(e => {
  console.log(e);
});

// client.search({
//   term:'aca grill',
//   location: 'los angeles, ca'
// }).then(response => {
//   console.log('total results', response.jsonBody.businesses.length);
//   console.log(response.jsonBody.businesses[0].name);
//   console.log(response.jsonBody.businesses[0].id);
//   console.log(response.jsonBody.businesses[0].alias);
//   console.log(response.jsonBody.businesses[0].rating);
//   console.log(response.jsonBody.businesses[0].price);
//   console.log(response.jsonBody.businesses[0].location.address1);
//   console.log(response.jsonBody.businesses[0].location.city);
//   console.log(response.jsonBody.businesses[0].location.zip_code);
//   console.log(response.jsonBody.businesses[0].location.display_address);
//   console.log(response.jsonBody.businesses[0].display_phone);
// }).catch(e => {
//   console.log(e);
// });