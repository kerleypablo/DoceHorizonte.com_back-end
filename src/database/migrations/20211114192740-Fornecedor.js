module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('fornecedores', {
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
        logo: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('fornecedores');
    },
  };