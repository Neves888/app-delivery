module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      field: 'total_price',
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_address',
    },
    delivery_number: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_number',
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date',
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendente'
    }
  }, {
    underscored: true,
    timestamps: false
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'id'
    });
  }

  return Sale;
};
