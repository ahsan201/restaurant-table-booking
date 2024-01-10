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
console.log(hour);
console.log(minute);
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
// time condition
const timeCondition = function () {
  const timeDropdown = document.querySelector(".times");
  const timeDropdownContents = timeDropdown.querySelectorAll("p");

  timeDropdownContents.forEach(function (x) {
    const timeText = x.textContent;
    const hourText = Number(timeText.substring(0, 2));
    const minuteText = Number(timeText.substring(3, 5));

    if (hourText <= hour) {
      x.classList.add("disable");
      if (hourText == hour && minuteText > minute) {
        x.classList.toggle("disable");
      }
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

// Table selection
const tableList = document.querySelector(".tableList");
const table = tableList.querySelectorAll("li");
const selectedTableList = new Set();

table.forEach(function (tableIteam) {
  tableIteam.addEventListener("click", function (event) {
    const targetTable = event.target.parentNode.children;
    const tableName = event.target.parentNode.previousElementSibling;
    for (let i = 0; i < targetTable.length; i++) {
      targetTable[i].classList.toggle("tableSelected");
    }
    if (selectedTableList.has(tableName.textContent)) {
      selectedTableList.delete(tableName.textContent);
    } else {
      selectedTableList.add(tableName.textContent);
    }
  });
});
// book now button
// form -
const firstName = document.getElementById("firstName");

const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const getDate = document.getElementById("dateLable");
const getMonth = document.getElementById("monthLable");
const getTime = document.getElementById("timeLable");

// submit popup -
const bookNowBTN = document.getElementById("btn");
const overLay = document.querySelector(".overlay");
const popupContainer = document.querySelector(".popupContainer");
const btnClose = document.getElementById("btnClose");
// texts
const nameText = document.getElementById("name");
const tableText = document.getElementById("tableText");
const dateText = document.getElementById("dateText");
const monthText = document.getElementById("monthText");
const timeText = document.getElementById("timeText");
const emailText = document.getElementById("emailText");
const phoneText = document.getElementById("phoneText");

bookNowBTN.addEventListener("click", function (e) {
  e.preventDefault();
  let tableListArray = [...selectedTableList].join(", ");
  nameText.textContent = firstName.value;
  tableText.textContent = tableListArray;
  console.log(tableListArray);
  dateText.textContent = getDate.textContent;
  monthText.textContent = getMonth.textContent;
  timeText.textContent = getTime.textContent;
  emailText.textContent = email.value;
  phoneText.textContent = phone.value;

  overLay.classList.remove("diplayClass");
  popupContainer.classList.remove("diplayClass");
});
const closeAndReset = function () {
  firstName.value = "";
  lastName.value = "";
  phone.value = "";
  email.value = "";
  tableText.textContent = "";
  getDate.textContent = "Date";
  getMonth.textContent = "Month";
  getTime.textContent = "Time";

  overLay.classList.add("diplayClass");
  popupContainer.classList.add("diplayClass");
};

btnClose.addEventListener("click", closeAndReset);
overLay.addEventListener("click", closeAndReset);
