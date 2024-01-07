"use strict";

// DOM Variables

// -- Date and time
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const lastDate = new Date(year, month + 1, 0).getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
// console.log(minute);
const genarateMonth = function () {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthDropdown = document.querySelector(".months");
  monthList.forEach(function (x, index) {
    if (month > index) {
      monthDropdown.insertAdjacentHTML(
        "beforeend",
        `<p class="disable">${x}</p>`
      );
    } else monthDropdown.insertAdjacentHTML("beforeend", `<p>${x}</p>`);
  });
};

const genarateDates = function () {
  const dateDropdown = document.querySelector(".dates");
  for (let i = 1; i <= lastDate; i++) {
    const dateCondition = i < date ? 'class="disable"' : " ";
    dateDropdown.insertAdjacentHTML(
      "beforeend",
      `<p ${dateCondition}>${i}</p>`
    );
  }
};

const timeCondition = function () {
  const timeDropdown = document.querySelector(".times");
  const timeDropdownContents = timeDropdown.querySelectorAll("p");

  timeDropdownContents.forEach(function (x) {
    const timeText = x.textContent;
    const hourText = Number(timeText.substring(0, 2));
    const minuteText = Number(timeText.substring(3, 5));
    if (hourText <= hour && minuteText <= minute) {
      x.classList.add("disable");
    }
  });
};

genarateMonth();
genarateDates();
timeCondition();

// Get all paragraph elements within the div

// Month
const monthDiv = document.querySelector(".months.dropdown");
const monthParagraphElements = monthDiv.querySelectorAll("p");
console.log(monthParagraphElements);
// date
const dateDiv = document.querySelector(".dates.dropdown");
const dateParagraphElements = dateDiv.querySelectorAll("p");

// Time
const timesDiv = document.querySelector(".times.dropdown");
const timeParagraphElements = timesDiv.querySelectorAll("p");

// time lable
const monthLable = document.getElementById("monthLable");
const timeLable = document.getElementById("timeLable");
const dateLable = document.getElementById("dateLable");

// Attach click event listener to each paragraph element
monthParagraphElements.forEach(function (paragraph) {
  paragraph.addEventListener("click", function (event) {
    const text = event.target.textContent;
    monthLable.textContent = text;
  });
});

dateParagraphElements.forEach(function (paragraph) {
  paragraph.addEventListener("click", function (event) {
    const text = event.target.textContent;
    dateLable.textContent = text;
  });
});

timeParagraphElements.forEach(function (paragraph) {
  paragraph.addEventListener("click", function (event) {
    const text = event.target.textContent;
    timeLable.textContent = text;
  });
});
