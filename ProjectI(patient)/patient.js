let patients = [];
function addPatientDetails() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const age = document.getElementById("age").value;
  const diseases = document.getElementById("diseases").value;

  if (name && address && age && diseases) {
    const patient = {
      id: Date.now(),
      name,
      address,
      age,
      diseases,
    };

    patients.push(patient);
    displayPaitents();
    clearForm();
  } else {
    alert("please fill in all fields!");
  }
}

function displayPaitents() {
  const patientTable = document.getElementById('patientTable');
  patientTable.innerHTML = '';

  patients.forEach(patient => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.address}</td>
            <td>${patient.age}</td>
            <td>${patient.diseases}</td>

            <td>
                <button onclick="editPatient(${patient.id})">Edit </button>
                <button onclick="deletePatient(${patient.id})">Delete </button>
            </td>
        `;
    patientTable.appendChild(row);
  });
}

function editPatient(id) {
  const patient = patients.find((patient) => patient.id === id);
  if (patient) {
    document.getElementById('name').value = patient.name;
    document.getElementById('address').value = patient.address;
    document.getElementById('age').value = patient.age;
    document.getElementById('diseases').value = patient.diseases;

    deletePatient(id);
  }
}

function deletePatient(id) {
  //create a new array to store patients without the one to delete
  var updatePatients = [];

  //Iterate through the employees array
  for (var i = 0; i < patients.length; i++) {
    //check if the current patitent's id matches the id to delete
    if (patients[i].id !== id) {
      //if id don't match , add this patient to the updated array
      updatePatients.push(patients[i]);
    }
  }

  //update the patients array with the updated array (without the deleted patients)
  patients = updatePatients;
  displayPaitents();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("age").value = "";
  document.getElementById("diseases").value = "";
}
