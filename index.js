document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});


function handleDownload(event, link) {
    event.preventDefault(); 

    
    window.open(link, '_blank');

    var downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1V4L2YJ720MMZtaRdWjaDoxEHyqoo07zJ';
    downloadLink.setAttribute('download', 'Resume'); //
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  document.getElementById('resume-link-1').addEventListener('click', function(event) {
    handleDownload(event, this.href);
  });

  document.getElementById('resume-button-2').addEventListener('click', function(event) {
    handleDownload(event, this.querySelector('a').href);
  });

  document.getElementById('resume-link-3').addEventListener('click', function(event) {
    handleDownload(event, this.href);
  });


function showContactNumber() {
    var contactNumberDiv = document.getElementById('contact-number');

    // Toggle the display of the contact number
    if (contactNumberDiv.style.display === 'none') {
        contactNumberDiv.style.display = 'block';
    } else {
        contactNumberDiv.style.display = 'none';
    }
}

function showEmail() {
    var contactNumberDiv = document.getElementById('contact-email');

    // Toggle the display of the contact email
    if (contactNumberDiv.style.display === 'none') {
        contactNumberDiv.style.display = 'block';
    } else {
        contactNumberDiv.style.display = 'none';
    }
}


