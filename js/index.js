function togglePassword(fieldId) {
  const passField = document.getElementById(`${fieldId}-password`);
  const passIcon = document.getElementById(`${fieldId}-eye`);
  if (passField.type === "password") {
    passField.type = "text";
    passIcon.classList.remove("bi-eye");
    passIcon.classList.add("bi-eye-slash");
  } else {
    passField.type = "password";
    passIcon.classList.remove("bi-eye-slash");
    passIcon.classList.add("bi-eye");
  }
}

function toggleDetail(detailJob) {
  const detailContainer = document.getElementById(`${detailJob}-detail-job`);
  const cardNoJob = document.getElementById("card-no-job");
  if (detailContainer.classList.contains("hidden")) {
    detailContainer.classList.remove("hidden");
    cardNoJob.classList.add("hidden");
  } else {
    detailContainer.classList.add("hidden");
    cardNoJob.classList.remove("hidden");
  }
}

function toggleSuccess(detailJob) {
  const successContainer = document.getElementById(`card-success-job`);
  const detailContainer = document.getElementById(`${detailJob}-detail-job`);
  const cardNoJob = document.getElementById("card-no-job");
  if (successContainer.classList.contains("hidden")) {
    successContainer.classList.remove("hidden");
    successContainer.classList.add("show-detail");
    detailContainer.classList.add("hidden");
    cardNoJob.classList.add("hidden");
  } else {
    successContainer.classList.add("hidden");
  }
}

function selectFile(fieldId) {
  document.getElementById(fieldId).click();
}
function updateFileName(fieldId) {
  console.log(fieldId);
  const fileName = document.getElementById(fieldId).files[0].name;
  let nameShow = document.getElementById(`${fieldId}-name`);
  nameShow.style.color = "black";
  nameShow.innerHTML = fileName;
}
function saveFile(fieldId) {
  console.log();
  let nameShow = document.getElementById(`${fieldId}-name`);
  nameShow.style.color = "#2e8a01";
  nameShow.innerHTML = "file uploaded";
}

const button = document.querySelectorAll(".save-btn");
const inputField = document.querySelectorAll("[type=file]");
button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.add("hidden");
  });
  inputField[index].addEventListener("change", () => {
    btn.classList.remove("hidden");
  });
});
