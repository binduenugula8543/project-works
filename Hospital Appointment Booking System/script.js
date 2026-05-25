document
.getElementById("appointmentForm")

.addEventListener("submit", function(event) {

  event.preventDefault();


  // Get Values

  let name =
    document.getElementById("name").value;

  let doctor =
    document.getElementById("doctor").value;

  let date =
    document.getElementById("date").value;

  let time =
    document.getElementById("time").value;

  let message =
    document.getElementById("message");


  // Validation

  if(name === "" ||
     doctor === "" ||
     date === "" ||
     time === "") {

    message.style.color = "red";

    message.innerHTML =
      "⚠ Please fill all fields!";

    return;
  }


  // Success Message

  message.style.color = "green";

  message.innerHTML =

  `✅ Appointment booked successfully! <br><br>

   👤 Patient Name:
   <b>${name}</b><br>

   🩺 Doctor:
   <b>${doctor}</b><br>

   📅 Date:
   <b>${date}</b><br>

   ⏰ Time:
   <b>${time}</b>`;
});