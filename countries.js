const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "Austria",
  "Ireland",
  "Japan",
  "Singapore",
  "United Arab Emirates"
];

function loadCountries(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.innerHTML = '<option value="">Select Country</option>';

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  });
}
const shippingRates = {
  "India": 12,
  "United States": 35,
  "United Kingdom": 30,
  "Canada": 32,
  "Australia": 38,
  "Germany": 28,
  "France": 28,
  "Italy": 29,
  "Spain": 29,
  "Netherlands": 27,
  "Belgium": 27,
  "Sweden": 31,
  "Norway": 33,
  "Denmark": 30,
  "Switzerland": 34,
  "Austria": 29,
  "Ireland": 30,
  "Japan": 36,
  "Singapore": 24,
  "United Arab Emirates": 20
};
