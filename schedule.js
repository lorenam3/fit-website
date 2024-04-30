document.addEventListener("DOMContentLoaded", function () {
  fetch("schedule.json")
    .then((response) => response.json())
    .then((data) => {
      const daysDiv = document.getElementById("days");
      const scheduleDiv = document.getElementById("schedule");

      const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];
      days.forEach((day) => {
        const button = document.createElement("button");
        button.textContent = day.charAt(0).toUpperCase() + day.slice(1);
        button.addEventListener("click", () =>
          showClassesForDay(data, day, scheduleDiv)
        );
        daysDiv.appendChild(button);
      });
    })
    .catch((error) => console.error("Error fetching schedule:", error));
});

function showClassesForDay(data, selectedDay, scheduleDiv) {
  scheduleDiv.innerHTML = "";

  const classesList = document.createElement("ul");
  data.classesList.forEach((classItem) => {
    classItem.schedule.forEach((training) => {
      if (training.day === selectedDay) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="class-item">
            <div class="class-name">${classItem.name}</div>
            <div class="class-time">${training.time}</div>
            </div>`;
        classesList.appendChild(listItem);
      }
    });
  });

  if (classesList.childNodes.length > 0) {
    const classInfo = document.createElement("div");
    classInfo.classList.add("class-info");
    classInfo.innerHTML = `
    <div class="class-header">
        <div class="class-name">Class name</div>
        <div class="class-time">Time</div>
        </div>`;
    scheduleDiv.appendChild(classInfo);
    scheduleDiv.appendChild(classesList);
  } else {
    scheduleDiv.textContent = "No classes scheduled for selected day.";
  }
}
