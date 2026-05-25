function addPlan() {

    let subjectInput = document.getElementById("subject").value;

    let hours = document.getElementById("hours").value;

    let output = document.getElementById("output");


    // Validation
    if(subjectInput === "" || hours === "") {

        output.innerHTML = "⚠ Please fill all fields!";
        output.style.color = "red";
        return;
    }

    if(hours <= 0) {

        output.innerHTML = "⚠ Enter valid study hours!";
        output.style.color = "red";
        return;
    }


    // Split subjects using comma
    let subjects = subjectInput.split(",");

    let studyPlan = "";

    // Loop through subjects
    for(let i = 0; i < subjects.length; i++) {

        studyPlan += `
            <p>📘 <b>${subjects[i].trim()}</b> → ${hours} hours/day</p>
        `;
    }


    // Display Output
    output.style.color = "green";

    output.innerHTML = `
        <h2>📚 Study Plan Generated!</h2>

        ${studyPlan}

        <p>✅ Stay Consistent and Crack Your Exams!</p>
    `;
}