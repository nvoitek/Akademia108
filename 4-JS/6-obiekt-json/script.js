let jsonPracownicy = {
  "pracownicy":[
      {"firstName": "Krystian", "lastName": "Dziopa"}, 
      {"firstName": "Anna", "lastName": "Szapiel"},
      {"firstName": "Piotr", "lastName": "Żmuda"}
  ]
};

jsonPracownicy.pracownicy.forEach( function(element, index) {
console.log(`${index} - ${element.firstName} ${element.lastName}`);
});