document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('introForm').addEventListener('submit', function(event) {
        event.preventDefault();
        generateIntroPage();
    });
});

function addCourseInput() {
    var courseInputs = document.getElementById('courseInputs');
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'course[]';
    courseInputs.appendChild(input);
    courseInputs.appendChild(document.createElement('br'));
}

function generateIntroPage() {
    var form = document.getElementById('introForm');
    var formData = new FormData(form);

    var introPage = `
        <h2>Introduction Page</h2>
        <p><strong>Name:</strong> ${formData.get('name')}</p>
        <p><strong>Mascot:</strong> ${formData.get('mascot')}</p>
        <p><strong>Image Caption:</strong> ${formData.get('imageCaption')}</p>
        <p><strong>Personal Background:</strong> ${formData.get('personalBackground')}</p>
        <p><strong>Professional Background:</strong> ${formData.get('professionalBackground')}</p>
        <p><strong>Academic Background:</strong> ${formData.get('academicBackground')}</p>
        <p><strong>Background in Web Development:</strong> ${formData.get('webDevBackground')}</p>
        <p><strong>Primary Computer Platform:</strong> ${formData.get('computerPlatform')}</p>
        <p><strong>Courses currently taking:</strong></p>
        <ul>
    `;

    formData.getAll('course[]').forEach(function(course) {
        introPage += `<li>${course}</li>`;
    });

    introPage += `
        </ul>
        <p><strong>Funny thing?</strong> ${formData.get('funnyThing')}</p>
        <p><strong>Anything else?</strong> ${formData.get('anythingElse')}</p>
        <a href="byo_intro.html">Reset</a>
    `;

    document.querySelector('main').innerHTML = introPage;
}