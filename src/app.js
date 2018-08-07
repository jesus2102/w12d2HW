const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const FamilyInfoView = require('./views/family_info_view.js');

document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.querySelector('#instrument-families');
  const familiesDropdown = new SelectView(selectElement);
  familiesDropdown.bindEvents();
  console.log('JavaScript Loaded');

  const contentDiv = document.querySelector('.container');
  const familiesInfoDisplay = new FamilyInfoView(contentDiv);
  familiesInfoDisplay.bindEvents();

  const familiesDataSource = new InstrumentFamilies();
  familiesDataSource.bindEvents();
});
