// Ambil elemen HTML
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculateBtn");
const resultContainer = document.getElementById("resultContainer");
const errorMsg = document.getElementById("errorMsg");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const bmiDescription = document.getElementById("bmiDescription");

// Event listener untuk tombol hitung
calculateBtn.addEventListener("click", calculateBMI);

// Fungsi untuk hitung BMI
function calculateBMI() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validasi input
  if (!height || !weight || height <= 0 || weight <= 0) {
    errorMsg.textContent = "Masukkan tinggi dan berat badan yang valid!";
    errorMsg.classList.add("show");
    resultContainer.classList.remove("show");
    return;
  }

  // Clear error
  errorMsg.classList.remove("show");

  // Hitung BMI (berat / (tinggi dalam meter)^2)
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Tentukan kategori
  let category = "";
  let description = "";
  let categoryClass = "";

  if (bmi < 18.5) {
    category = "Kurus";
    description =
      "Anda memiliki berat badan kurang dari normal. Disarankan untuk meningkatkan asupan nutrisi dan melakukan olahraga teratur.";
    categoryClass = "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
    description =
      "Berat badan Anda berada dalam kategori normal dan sehat. Pertahankan gaya hidup sehat!";
    categoryClass = "normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Gemuk";
    description =
      "Anda memiliki berat badan berlebih. Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.";
    categoryClass = "overweight";
  } else {
    category = "Obesitas";
    description =
      "Anda memiliki berat badan sangat berlebih. Sangat disarankan untuk berkonsultasi dengan dokter dan mengikuti program diet.";
    categoryClass = "obese";
  }

  // Tampilkan hasil
  bmiValue.textContent = bmi.toFixed(1);
  bmiCategory.textContent = category;
  bmiCategory.className = "bmi-category " + categoryClass;
  bmiDescription.textContent = description;

  resultContainer.classList.add("show");
}

// Bonus: Hitung BMI dengan menekan Enter
heightInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") calculateBMI();
});

weightInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") calculateBMI();
});
