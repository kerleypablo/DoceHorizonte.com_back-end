module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(60),
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        type: {
          type: Sequelize.STRING(15),
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('users');
    },
  };