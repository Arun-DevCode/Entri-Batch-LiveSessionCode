/*
  ====  Element Selector
*/
const form = document.querySelector("form");
const ListContainer = document.querySelector(".schedule-list-container");

const titleField = document.querySelector("#title");
const descriptionField = document.querySelector("#description");
const urlField = document.querySelector("#url");


// Display Schedule
function displaySchedules(data) {
  // Mapping
  data.map((schedule) => {
    const scheduleCard = document.createElement("div");
    console.log(schedule);

    // Append with parent
    ListContainer.appendChild(scheduleCard);

    // rendering schedule data
    return (scheduleCard.innerHTML = `
      <div>
      <div class="content">
        <h1>${schedule.title}</h1>
        <p>${schedule.description}</p>
        <span>${schedule.status}</span>
        <button class=${updateScheduleByID}>Update</button>
        <button class=${DELETEScheduleByID}>Delete</button>
      </div>
    </div>`);
  });
}

// URL
const ScheduleURL = "https://695fbf407f037703a814b3df.mockapi.io/schedules";

// API - Get all data
async function getAllSchedules() {
  const res = await fetch(ScheduleURL);
  // Conversion
  const data = await res.json();

  displaySchedules(data);
}

// Get all schedule data
getAllSchedules();

async function createSchedule(scheduleData) {
  const res = await fetch(ScheduleURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(scheduleData),
  });

  // Conversion
  const data = await res.json(); // JSON -> Object
  console.log(data);
}

// Add Event : To create
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop loading

  const title = titleField.value;
  const description = descriptionField.value;
  const url = urlField.value;

  // Object - DTO (Data Transfer Object)
  const payload = { title, description, url, status: "Not Completed" };

  // To post data in CMS
  createSchedule(payload);
});

// Update by Id
async function updateScheduleByID(scheduleID, updateScheduleData) {
  console.log("Update schedule");
  // const updateScheduleURL = `https://695fbf407f037703a814b3df.mockapi.io/schedules/${scheduleID}`;
  // console.log(updateScheduleURL);
  
  // const res = fetch(updateScheduleURL, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(updateScheduleData),
  // });
}

// Delet by Id
async function DELETEScheduleByID(scheduleID) {
  console.log("Delete triggered!");
  // const updateScheduleURL = `https://695fbf407f037703a814b3df.mockapi.io/schedules/${scheduleID}`;
  // console.log(updateScheduleURL);

  // const res = fetch(updateScheduleURL, {
  //   method: "DELETE",
  // });
}
