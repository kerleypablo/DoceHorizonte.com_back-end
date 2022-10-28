module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert(
        'insumos',
        [
          {
            name: 'leite condensado',
            marca: 'Cemil',
            fornecedor_id: 1,
            valor: 5.98,
            quantidade: 395,
            unidade: 'GRM',
            ultimoPreco: 0.0,
            img: '',
          },
          {
            name: 'Doce de leite',
            marca: 'itambe',
            fornecedor_id: 2,
            valor: 12.00,
            quantidade: 395,
            unidade: 'GRM',
            ultimoPreco: 0.0,
            img: '',
          },
          {
            name: 'leite',
            marca: 'itambe',
            fornecedor_id: 3,
            valor: 4.49,
            quantidade: 1000,
            unidade: 'MLT',
            ultimoPreco: 0.0,
            img: '',
          },
          {
            name: 'leite em Po',
            marca: 'Itambe',
            fornecedor_id: 1,
            valor: 45.00,
            quantidade: 1000,
            unidade: 'GRM',
            ultimoPreco: 0.0,
            img: '',
          },
        ],
        {},
      );
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('insumos', null, {});
    },
  };