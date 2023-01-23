module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  }, {
    underscored: true,
    timestamps: false
  });

  return Product;
};
