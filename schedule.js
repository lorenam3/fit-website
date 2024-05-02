document.addEventListener("DOMContentLoaded", function () {
  fetch("schedule.json")
    .then((response) => response.json())
    .then((data) => {
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

      showClassesForDay(data, "monday", scheduleDiv);

      days.forEach((day) => {
        const button = document.createElement("button");
        button.textContent = day.charAt(0).toUpperCase() + day.slice(1);
        button.addEventListener("click", () => {
          const buttons = document.querySelectorAll("#days button");
          buttons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");
          scheduleDiv.innerHTML = "";
          showClassesForDay(data, day, scheduleDiv);
        });
        document.getElementById("days").appendChild(button);
      });
    })
    .catch((error) => console.error("Error fetching schedule:", error));
});

function showClassesForDay(data, selectedDay, scheduleDiv) {
  const classesList = document.createElement("ul");
  data.classesList.forEach((classItem) => {
    classItem.schedule.forEach((training) => {
      if (training.day === selectedDay) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="class-item">
            <div class="class-name">${classItem.name}</div>
            <div class="class-time">${training.time}</div>
            <button class="join-button">Join Now</button<
            </div>`;

        const joinButton = listItem.querySelector(".join-button");
        joinButton.addEventListener("click", () => {
          window.location.href = "contact.html";
        });

        classesList.appendChild(listItem);
      }
    });
  });

  if (classesList.childNodes.length > 0) {
    const classInfo = document.createElement("div");
    classInfo.classList.add("class-info");
    classInfo.innerHTML = `
    <div class="class-header">
        <div class="name-of-class">Class name</div>
        <div class="time-class">Time</div>
        </div>`;
    scheduleDiv.appendChild(classInfo);
    scheduleDiv.appendChild(classesList);
  } else {
    scheduleDiv.textContent = "No classes scheduled for selected day.";
  }
}
