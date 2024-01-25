console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHour = new Date().getHours();
  console.log(currentHour);

  if (currentHour >= 6 && currentHour < 12) {
    return "Guten Morgen";
  } else if (currentHour >= 13 && currentHour < 18) {
    return "Good Afternoon";
  } else if (currentHour >= 19 && currentHour < 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  const currentDay = new Date().getDay();
  console.log(currentDay);

  switch (currentDay) {
    case 0: // Sunday
      return "hotpink";
    case 1: // Monday
      return "darkgray";
    case 2: // Tuesday
      return "lightblue";
    case 3: // Wednesday
      return "lightblue";
    case 4: // Thursday
      return "lightblue";
    case 5: // Friday
      return "lightblue";
    case 6: // Saturday
      return "hotpink";
    default:
      return "black"; // Invalid day
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

console.log(display.textContent);
