const PubSub = require('../helpers/pub_sub.js')

const FamilyInfoView = function (container) {
  this.container = container;
}

FamilyInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments', (event) => {
    const family = event.detail;
    this.render(family);
  })
};

FamilyInfoView.prototype.render = function () {

  const contentDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = family.name;

  const description = document.createElement('p');
  description.textContent = family.description;

  const listTitle = document.createElement('h3');
  listTitle.textContent = 'Instruments included:'

  const list = document.createElement('ul');

  family.instruments.forEach(instrument) => {
    const item = document.createElement('li');
    item.textContent = instrument.value;
    list.appendChild(item);
  }

  contentDiv.appendChild(title);
  contentDiv.appendChild(description);
  contentDiv.appendChild(listTitle);
  contentDiv.appendChild(list);

  this.container.innerHTML = '';
  this.container.appendChild(contentDiv);
};
