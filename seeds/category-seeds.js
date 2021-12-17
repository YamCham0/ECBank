const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Bottles',
  },
  {
    category_name: 'Shields',
  },
  {
    category_name: 'Swords',
  },
  {
    category_name: 'Bombs',
  },
  {
    category_name: 'Arrows',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
