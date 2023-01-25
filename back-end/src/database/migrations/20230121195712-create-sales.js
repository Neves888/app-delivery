'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      seller_id: {
        type: Sequelize.INTEGER,
        field: 'seller_id',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      total_price: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: 'total_price',
      },
      delivery_address: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_address',
      },
      delivery_number: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_number',
      },
      sale_date: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'sale_date',
        defaultValue: Sequelize.NOW
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pendente'
      }
    });


  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');

  }
};
