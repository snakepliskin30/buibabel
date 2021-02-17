import "../css/styles.css";
import { activateTab, closeTab, goToTab } from "./nav";
import { getData, callAlert, ShowContactsTable } from "./contacts";

//document.addEventListener("DOMContentLoaded", getData);

document
  .querySelectorAll("[data-tab-target]")
  .forEach((tab) => tab.addEventListener("click", activateTab));

document.querySelectorAll("[data-tab-link").forEach((e) => {
  e.addEventListener("click", goToTab);
});

const contactLink = document.getElementById("contacts-table");
contactLink.addEventListener("click", callAlert);

//export let Global = {};

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
