document.addEventListener("DOMContentLoaded", function () {
  // Function to get the current day of the week
  function getCurrentDayOfTheWeek() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayIndex = currentDate.getUTCDay();
    return days[dayIndex];
  }

  // Function to get the current UTC time in milliseconds
  function getCurrentUTCTime() {
    return new Date().getTime();
  }

  // Update the elements with dynamic data
  document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  ).textContent = `Current Day: ${getCurrentDayOfTheWeek()}`;
  document.querySelector(
    "[data-testid='currentUTCTime']"
  ).textContent = `Current UTC Time (ms): ${getCurrentUTCTime()}`;
});
