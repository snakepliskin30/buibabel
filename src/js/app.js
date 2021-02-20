import "../css/utilities.css";
import "../css/navbar.css";
import "../css/main.css";
import "../css/panel.css";
import "../css/media.css"; // always keep this css file imported last

import "core-js/stable/promise";
import "regenerator-runtime/runtime";
import "whatwg-fetch";

import { activateTab, closeTab, goToTab } from "./nav";
import { getData, callAlert, ShowContactsTable } from "./contacts";

//document.addEventListener("DOMContentLoaded", getAsyncData);

document
  .querySelectorAll("[data-tab-target]")
  .forEach((tab) => tab.addEventListener("click", activateTab));

document.querySelectorAll("[data-tab-link").forEach((e) => {
  e.addEventListener("click", goToTab);
});

document.getElementById("viewAllBtn").addEventListener("click", getAsyncData);

const contactLink = document.getElementById("contacts-table");
contactLink.addEventListener("click", callAlert);

export const records = [
  {
    id: 12,
    firstName: "Chris",
    lastName: "Webb",
    dob: "1984-07-30",
  },
  {
    id: 2,
    firstName: "Mark",
    lastName: "Castro",
    dob: "1965-12-23",
  },
  {
    id: 123,
    firstName: "Elly",
    lastName: "Buendia",
    dob: "1982-01-21",
  },
  {
    id: 103,
    firstName: "Pistol",
    lastName: "Pete",
    dob: "1998-07-24",
  },
  {
    id: 45,
    firstName: "Ravier",
    lastName: "Esguerra",
    dob: "1992-28-21",
  },
  {
    id: 16,
    firstName: "Maritez",
    lastName: "Samson",
    dob: "1983-11-18",
  },
  {
    id: 163,
    firstName: "Peter",
    lastName: "Drinklage",
    dob: "1991-02-14",
  },
  {
    id: 98,
    firstName: "Duncan",
    lastName: "Tim",
    dob: "1978-04-02",
  },
  {
    id: 171,
    firstName: "Denzel",
    lastName: "Washington",
    dob: "1994-05-18",
  },
  {
    id: 52,
    firstName: "Shani",
    lastName: "Pelini",
    dob: "1981-10-06",
  },
  {
    id: 77,
    firstName: "Tomek",
    lastName: "Aburashik",
    dob: "1984-07-30",
  },
];

global.contacts = records;

async function getAsyncData() {
  console.log("async invoked");

  //const result = await $.get("http://localhost:3001/contacts");
  //console.log(result.find((c) => c.id == 12).firstName);
  const result = await fetch("http://localhost:3001/contacts");
  const data = await result.json();
  console.log(data.find((d) => d.id == 171).firstName);
}
