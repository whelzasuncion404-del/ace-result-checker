// Applicants Database

const applicants = [

  {
    name: "ASUNCION, WHELZ C.",
    studentId: "24-09988",
    status: "PASSED",
    position: "PRESIDENT"
  },

  {
    name: "CORPUZ, JOHN AEROSH C.",
    studentId: "25-03612",
    status: "PASSED",
    position: "ASSISTANT TREASURER, 2ND YEAR REPRESENTATIVE, TECH AND PROD OFFICER"
  },

  {
    name: "AGUDA, RICHELLE JEANNE L.",
    studentId: "23-70314",
    status: "PASSED",
    position: "4TH YEAR REPRESENTATIVE"
  },

  {
    name: "DAYAG, JESAH M.",
    studentId: "25-03386",
    status: "PASSED",
    position: "ASSISTANT TREASURER, SPORTS COMMITTEE"
  },

  {
    name: "BAGGAY, TRISHA MAE E.",
    studentId: "25-19286",
    status: "PASSED",
    position: "ASSISTANT SECRETARY, TREASURER, 2ND YEAR REPRESENTATIVE, LOGISTICS OFFICER, SPORTS COMMITTEE"
  },

  {
    name: "GUEVARRA, LOURENCE MAR P.",
    studentId: "25-08753",
    status: "PASSED",
    position: "2ND YEAR REPRESENTATIVE, PUBLIC RELATIONS OFFICER"
  },

  {
    name: "CAWILAN, SONEYDAD M.",
    studentId: "25-07261",
    status: "PASSED",
    position: "ASSISTANT SECRETARY, BUSINESS MANAGER"
  },

  {
    name: "ERASMO, CHARLES ANDREW B.",
    studentId: "25-01014",
    status: "PASSED",
    position: "2ND YEAR REPRESENTATIVE, SOCIO-CULTURAL COMMITTEE"
  },

  {
    name: "QUIMING, CARMELA R.",
    studentId: "24-07076",
    status: "PASSED",
    position: "PUBLIC INFORMATION OFFICER"
  },

  {
    name: "BALINGIT, IVEY MHAE V.",
    studentId: "25-05354",
    status: "PASSED",
    position: "ACADEMIC COMMITTEE, GRAPHIC ARTIST OFFICER"
  },

  {
    name: "DELA CRUZ, CLYDE HENRICH C.",
    studentId: "24-01612",
    status: "PASSED",
    position: "EXECUTIVE SECRETARY"
  },

  {
    name: "MATEO, CHARIZE ANNE B.",
    studentId: "25-06578",
    status: "PASSED",
    position: "ASSISTANT TREASURER, 2ND YEAR REPRESENTATIVE, BUSINESS MANAGER, ACADEMIC COMMITTEE, TECH AND PROD OFFICER"
  },

  {
    name: "SABADO, DISIRY",
    studentId: "25-06535",
    status: "PASSED",
    position: "SOCIO-CULTURAL COMMITTEE"
  },

  {
    name: "MAGLAQUE, BRENELLA JANELLE D.",
    studentId: "25-03607",
    status: "PASSED",
    position: "TECH AND PROD OFFICER"
  },

  {
    name: "ESTEBAN, DRAHCIR ADLEIGH M.",
    studentId: "25-05256",
    status: "PASSED",
    position: "PUBLIC INFORMATION OFFICER"
  },

  {
    name: "MEDINA, MICHAEL ANGELO J.",
    studentId: "25-19411",
    status: "PASSED",
    position: "2ND YEAR REPRESENTATIVE, LOGISTICS OFFICER"
  }

];

function checkResult(){

  const input = document
    .getElementById("nameInput")
    .value
    .trim()
    .toUpperCase();

  const resultBox = document.getElementById("resultBox");

  // Find applicant
  const applicant = applicants.find(
    app => app.name.toUpperCase() === input
  );

  // If applicant exists
  if(applicant){

    resultBox.style.display = "block";

    resultBox.className = "result-box passed";

    resultBox.innerHTML = `
      <h2>🎉 CONGRATULATIONS 🎉</h2>

      <p><strong>Name:</strong><br>${applicant.name}</p>

      <p><strong>Student ID:</strong><br>${applicant.studentId}</p>

      <p><strong>Status:</strong><br>${applicant.status}</p>

      <p><strong>Approved Position:</strong><br>${applicant.position}</p>
    `;

  }

  // If not found
  else{

    resultBox.style.display = "block";

    resultBox.className = "result-box failed";

    resultBox.innerHTML = `
      <h2>❌ RESULT NOT FOUND</h2>

      <p>Name is not on the approved list.</p>
    `;
  }

}