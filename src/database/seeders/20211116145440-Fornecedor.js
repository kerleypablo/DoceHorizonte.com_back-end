module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert(
        'fornecedores',
        [
          {
            name: 'Vilefort',
            logo: '',
          },
          {
            name: 'Apoio',
            logo: '',
          },
          {
            name: 'Epa',
            logo: '',
          },
          {
            name: 'verdemar',
            logo: '',
          },
          {
            name: 'Maria Chocolate',
            logo: '',
          },
          {
            name: 'trigopane',
            logo: '',
          },
          {
            name: 'SuperNosso',
            logo: '',
          },
        ],
        {},
      );
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('fornecedores', null, {});
    },
  };