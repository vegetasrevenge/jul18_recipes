//create generic divs with generic content to test

let dom_section = document.querySelector("#DOM-section");

fetch("https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=burgers")
  .then(function(response){
    return response.json();
  })

  .then(function(data){
    let html = "";
    for(let i = 0; i < data.results.length; i++ ){
      let foods = data.results[i];
      if (!foods.thumbnail) {
        foods.thumbnail = "http://via.placeholder.com/200x100";
        console.log('hello')
      };
      // console.log(foods);
      html +=
        `<div id="foodProfile"><a href="${foods.href}">
          <h2>${foods.title}</h2>
          <img src="${foods.thumbnail}"/></a>
        </div>`;
    }
    dom_section.innerHTML = html;
    console.log(html);
  })



//work on conditional for when no thumbnail is present


// let searchButton = document.querySelector('#search');
// let queryInput = document.querySelector('#query');
// let url = 'https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=shrimp'
//
// searchButton.addEventListener('click', function() {
//   let val = queryInput.value;
//   let finalUrl = url + val;
//
//   console.log(https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=shrimp);
// });
