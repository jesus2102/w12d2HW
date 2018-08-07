const InstrumentFamilies = require('./models/instrument_families.js')

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const familiesDropdown = new SelectView(selectElement);
  InstrumentFamilies.bindEvents();
  console.log('JavaScript Loaded');
});
