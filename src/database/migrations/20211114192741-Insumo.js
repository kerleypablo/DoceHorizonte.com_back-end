module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('insumos', {
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
        Marca: {
          allowNull: false,
          type: Sequelize.STRING(60),
        },
        fornecedor: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'fornecedor',
                key: 'id',
            },
            field: 'fornecedor_id',
        },
        valor: {
            allowNull: false,
            type: Sequelize.DECIMAL(10.2),
          },
        quantidade: {
            allowNull: false,
            type: Sequelize.DECIMAL(10.2),
          },
        unidade: {
            allowNull: false,
            type: Sequelize.STRING(3),
          },
        ultimoPreco: {
            allowNull: true,
            type: Sequelize.DECIMAL(10.2),
          },
        img: {
            allowNull: true,
            type: Sequelize.STRING(150),
          },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('insumos');
    },
  };