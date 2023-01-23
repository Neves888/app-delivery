module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    sales_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    underscored: true,
    timestamps: false
  });

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'product',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sales_id',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'sale',
      through: SaleProduct,
      foreignKey: 'sales_id',
      otherKey: 'product_id',

    });
  }

  return SaleProduct;
};
