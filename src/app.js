const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.querySelector('#instrument-families');
  const familiesDropdown = new SelectView(selectElement);
  familiesDropdown.bindEvents();
  console.log('JavaScript Loaded');

  const familiesDataSource = new InstrumentFamilies();
  familiesDataSource.bindEvents();
});
