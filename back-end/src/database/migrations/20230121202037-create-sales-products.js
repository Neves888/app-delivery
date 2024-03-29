'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      sales_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'sales_id',
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');

  }
};
