// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category,{
  foriegnKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product,{
  foriegnKey:'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  foriegnKey:'product_id',
  through: ProductTag,
  as: 'throughproducttag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag,
  as: 'throughproducttag',
  foriegnKey: 'product_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
