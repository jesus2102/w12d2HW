const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments', (evt) => {
    const allFamilies = evt.detail;
    console.log('all Families', allFamilies);
    this.populate(allFamilies);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log('index transfered', selectedIndex);
    PubSub.publish('SelectedView:change', selectedIndex);
  })
};

SelectView.prototype.populate = function (familiesData) {
  familiesData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
