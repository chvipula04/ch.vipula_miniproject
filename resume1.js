document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resume-form');
    const resumeDetails = document.getElementById('resume-details');
    const resumeSection = document.getElementById('resume');

    resumeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(resumeForm);
        let resumeHTML = '<ul>';
        for (let [key, value] of formData.entries()) {
            resumeHTML += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        resumeHTML += '</ul>';

        resumeDetails.innerHTML = resumeHTML;
        resumeSection.classList.remove('hidden');
    });
});