const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade = "C") {
    points = 2
  } else if (grade === "D") {
    points = 1
  } else if (grade === "F") {
    points = 0
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

console.log(gpaPoints);
let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}
console.log(totalPoint);

let gpaAverage = totalPoint/gpaPoints.length

console.log(gpaAverage);

let fruit = ["watermelon", "peach", "apple", "tomato", "grape"];

let shortFruit = fruit.filter((item) => item.length < 6);
console.log(shortFruit);