/* Grouping Objects by a Property
You are given an array of objects, where each object represents a person with a name and a city.
Write a function called groupPeopleByCity that takes this array as an argument.

The function should process the array and return a new object.
In this new object, the keys should be the city names,
and the values should be arrays containing the names of all the people who live in that city.

Output should look like:
{
  London: ['Alice', 'Charlie'],
  Paris: ['Bob', 'Eve'],
  'New York': ['Diana']
}
*/

function groupPeopleByCity(peopleArray) {
    const result = {}                         // 1. Start with an empty object
    for (const person of peopleArray) {
      const cityName = person.city;
      const personName = person.name;

      if (person.city in result) {            // 2. Check if the city key already exists
        result[cityName].push(personName)     // 3. If YES, push the new name into the existing array
      } else {
        result[cityName] = [personName]       // 4. If NO, create a new key with a new array containing the name
      }
    }

    return result
  }

  const people = [
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "London" },
    { name: "Diana", city: "New York" },
    { name: "Eve", city: "Paris" },
  ];
  
  const grouped = groupPeopleByCity(people);
  console.log(grouped);