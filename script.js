var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var workExperience = document.getElementById('workExperience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePicture = '';
    if ((_a = profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            profilePicture = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            generateResume(profilePicture);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        generateResume('');
    }
    function generateResume(profilePicture) {
        var resumeHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            ").concat(profilePicture
            ? "<p><strong>Profile Picture:</strong> <img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\" style=\"width: 150px; border-radius: 50%;\"></p>")
            : '', "\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
        }
        else {
            alert('Resume output element is missing.');
        }
    }
});
