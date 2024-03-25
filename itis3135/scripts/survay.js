const coursesInput = document.getElementById("coursesInput");
const coursesTaking = document.getElementById("coursesTaking");
let count = 0;

function addCourse() {
    let courseContainer = document.createElement("div");
    courseContainer.className = "courseContainer";
    
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'userCourses';
    courseContainer.appendChild(input);
    
    let deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.className = "deleteButton";
    deleteButton.value = "Delete Course";
    deleteButton.addEventListener("click", () => {
        coursesInput.removeChild(courseContainer);
        count--;
    });
    courseContainer.appendChild(document.createTextNode(" "));
    courseContainer.appendChild(deleteButton);
    
    coursesInput.appendChild(courseContainer);
    
    count++;
}

coursesTaking.addEventListener("click", addCourse);


const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image").files[0];
    const caption = document.getElementById("caption").value;
    const personal = document.getElementById("personal").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const webdev = document.getElementById("webdev").value;
    const platform = document.getElementById("platform").value;
    const funny = document.getElementById("funny").value;
    const anything = document.getElementById("anything").value;
    const courses = Array.from(document.getElementsByClassName("userCourses")).map(input => input.value);

    const content = document.createElement("div");
    content.innerHTML = `
        <h2>Introduction</h2>
        <h2>${name} || ${mascot}</h2>
        <figure>
            <img src="${URL.createObjectURL(image)}" alt="${caption}">
            <figcaption>${caption}</figcaption>
        </figure>
        <ul>
            <li><b>Personal Background: </b>${personal}</li>
            <li><b>Professional Background: </b>${professional}</li>
            <li><b>Academic Background: </b>${academic}</li>
            <li><b>Web Development Background: </b>${webdev}</li>
            <li><b>Primary Computer Platform: </b>${platform}</li>
            <li><b>Courses I'm Taking: </b></li>
            <ul>
            ${courses.map(course => `<li>${course}</li>`).join("")}
            </ul>
            <li><b>Funny Thing? </b>${funny}</li>
            <li><b>Anything Else? </b>${anything}</li>
        </ul>
    `;

    form.replaceWith(content);
});

function reset() {
    window.location.reload();
}