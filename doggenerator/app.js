const dogGen = new DogGen;
const ui = new UI;
const dogBtn = document.querySelector('.get-dogs');
const dogNumber = document.querySelector('#number');


dogBtn.addEventListener('click', function(e){

  dogGen.getDogs().then(dogsData => ui.displayDogs(dogsData.response.message, dogNumber.value)).catch(err => console.log(err));
  e.preventDefault();
});
