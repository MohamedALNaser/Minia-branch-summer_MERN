let btn = document.querySelectorAll(".task button");
btn[0].addEventListener("click", () => {
  ((num1, num2) => {
    const sum = num1 + num2;
    alert(sum);
  })(5, 10);
});
btn[1].addEventListener("click", () => {
  // clear console
  console.clear();
  //for...in is used to iterate over the keys of an object or array
  console.log("For in loop");
  const arr1 = ["a", "b", "c"];
  for (const index in arr1) {
    console.log(index); // Outputs: 0, 1, 2
  }

  // for...of is used to iterate over the values of an iterable
  console.log("For of loop");

  const arr2 = ["a", "b", "c"];

  for (const value of arr2) {
    console.log(value); // Outputs: 'a', 'b', 'c'
  }
  // .forEach() is used to execute a callback function for each element in an array.
  console.log("For Each loop");

  const arr3 = ["a", "b", "c"];

  arr3.forEach((value, index) => {
    console.log(value, index); // Outputs: 'a' 0, 'b' 1, 'c' 2
  });
});
btn[2].addEventListener("click", () => {
  // Try spread operator with any array of your implementation.
  console.clear();
  console.log("Spread operator");
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  console.log("combination of two arrays");
  const combinedArray = [...arr1, ...arr2];
  console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

  console.log("cloning an array");
  const clonedArray = [...arr1];
  console.log(clonedArray); // Output: [1, 2, 3]

  console.log("adding an element to an array");
  const newArray = [...arr1, 4];
  console.log(newArray); // Output: [1, 2, 3, 4]
});
// Create a student class that contains: name, University, faculty, and final grade.
class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }
}
const student1 = new Student("Ahmed", "Ain Shams", "Computer Science", 90);
btn[3].addEventListener("click", () => {
  console.clear();
  console.log("Student class");
  console.log(student1);
  // print student data in the console using template literals in this format:
  // {Std_name} is a student in faculty of {fac_name} in university {Uni_name}
  // and he got {Std_grade} in the final exam.

  console.log(
    `${student1.name} is a student in faculty of ${student1.faculty} in university ${student1.university} and he got ${student1.finalGrade} in the final exam.`
  );
});
let lastTack = document.querySelector(".last-tack");

btn[4].addEventListener("click", () => {
  lastTack.classList.toggle("hide");
  function* tipGenerator() {
    const tips = [
      "Tip 1",
      "Tip 2",
      "Tip 3",
      "Tip 4",
      "Tip 5",
      "Tip 6",
      "Tip 7",
      "Tip 8",
      "Tip 9",
      "Tip 10",
    ];

    let index = 0;
    while (index < tips.length) {
      yield tips[index];
      index++;
    }
  }

  const tipDisplay = document.getElementById("tipDisplay");
  const displayAllBtn = document.getElementById("displayAllBtn");
  const displayIntervalBtn = document.getElementById("displayIntervalBtn");
  // Display all tips using for...of
  displayAllBtn.addEventListener("click", () => {
    tipDisplay.innerHTML = "";
    const generator = tipGenerator();
    for (const tip of generator) {
      tipDisplay.innerHTML += `<p>${tip}</p>`;
    }
  });

  // Display tips every 3 seconds using setInterval
  displayIntervalBtn.addEventListener("click", () => {
    tipDisplay.innerHTML = "";
    const generator = tipGenerator();
    const interval = setInterval(() => {
      const { value, done } = generator.next();
      if (done) {
        clearInterval(interval);
      } else {
        tipDisplay.innerHTML += `<p>${value}</p>`;
      }
    }, 3000);
  });
});
