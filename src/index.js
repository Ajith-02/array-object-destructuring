import animals, { useAnimal } from "./data";

console.log(animals);

const [cat, dog] = animals;

// console.log(useAnimal(dog));
const [animal, makeSound] = useAnimal(dog);
console.log(animal);
makeSound();

// console.log(cat);
// const { name, sound } = dog;
// console.log(sound);

// const {
//   name,
//   sound,
//   feeding: { food, water }
// } = cat;
// // console.log(feeding);

// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
