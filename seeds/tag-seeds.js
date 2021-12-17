const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Equipment',
  },
  {
    tag_name: 'Ammunition',
  },
  {
    tag_name: 'Consumables',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
