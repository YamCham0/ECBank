const { Product } = require('../models');

const productData = [
  {
    product_name: 'Ice Arrow',
    price: 10.55,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Fire Arrow',
    price: 10.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Bomb-chu',
    price: 20.45,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: "Mustard Sword",
    price: 99.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: "Green Potion",
    price: 9.99,
    stock: 50,
    category_id: 1,
  },
  {
    product_name: 'Hylian Shield',
    price: 29.99,
    stock: 20,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
