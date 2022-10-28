module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert(
        'users',
        [
          {
            name: 'Kerley Pablo',
            email: 'kerley.kls@gmail.com',
            password: 'klspablo529',
            type: 'admin'
          },
          {
            name: 'Francisco Igo',
            email: 'kerley.kls@gmail.com',
            password: 'klspablo529',
            type: 'admin'
          },
          {
            name: 'cliente teste',
            email: 'kerley.kls@gmail.com',
            password: 'klspablo529',
            type: 'client'
          },
        ],
        {},
      );
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };