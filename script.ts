document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    let profilePicture = '';
    if (profilePictureInput?.files?.[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            profilePicture = event.target?.result as string;
            generateResume(profilePicture);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        generateResume('');
    }

    function generateResume(profilePicture: string) {
        const resumeHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            ${
                profilePicture
                    ? `<p><strong>Profile Picture:</strong> <img src="${profilePicture}" alt="Profile Picture" style="width: 150px; border-radius: 50%;"></p>`
                    : ''
            }
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
        } else {
            alert('Resume output element is missing.');
        }
    }
});
