import { Global, records } from "./app";

let table = {};

export function adjustTable() {
  table.columns.adjust().draw();
}

export async function getData() {
  //const response = await fetch("http://localhost:3001/contacts/");
  //Global.contacts = records;
  //console.log(Global.contacts);
  //console.log(records);
  console.log(global.contacts);
  //showContactBtn.disabled = false;
  ShowContactsTable();
  const data = localStorage.getItem("accountData");
  document.getElementById("acct-name").innerText = localStorage.getItem(
    "accountName"
  );
  localStorage.removeItem("accountName");
}

export function callAlert(e) {
  e.stopPropagation();
  if (e.target.classList.contains("dataColumnLink")) {
    const id = e.target.getAttribute("data-id");
    let contactObj = Global.contacts.find((contact) => contact.id == id);
    Global.selectedContact = contactObj;
    //const contactpanel = document.getElementById("detalye");
    const test = $("#firstName");
    $("#selectedcontactfname").text(Global.selectedContact.firstName);
    $("#selectedcontactlname").text(Global.selectedContact.lastName);
    $("#selectedcontactdob").text(Global.selectedContact.dob);
  }
}

export function ShowContactsTable() {
  table = $("#contacts-table").DataTable();
  table.destroy();
  //console.log("test");
  //console.log(Global.contacts);
  let contacts = global.contacts;
  table = $("#contacts-table").DataTable({
    data: contacts,
    columns: [
      { data: "firstName" },
      { data: "lastName" },
      { data: "dob" },
      { data: "id" },
    ],
    scrollY: "410",
    scrollCollapse: false,
    bLengthChange: false,
    bFilter: false,
    bInfo: false,
    bAutoWidth: false,
    columnDefs: [
      {
        targets: 0,
        width: 300,
      },
      {
        targets: 1,
        width: 300,
      },
      {
        targets: 2,
        data: "dob",
        render: function (data, type, row) {
          return (
            '<a class="dataColumnLink" data-id=' + row.id + ">" + data + "</a>"
          );
        },
      },
      {
        targets: 3,
        visible: false,
        searchable: false,
      },
    ],
  });
}

//END OF CONTACTS
