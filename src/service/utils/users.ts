export const getUsers = async () => {
  const users = [
    {
      name: 'Francisco Perez',
      username: 'Fran804',
      email: 'Fran@gmail.com',
      phone: '(+52) 9992585072',
      address: {
        city: 'Mérida, Yucatán'
      }
    },
    {
      name: 'Luis Sánchez',
      username: 'LARS',
      email: 'Luis@gmail.com',
      phone: '(+52) 9992585070',
      address: {
        city: 'Mérida, Yucatán'
      }
    },
    {
      name: 'Kirsten Sánchez',
      username: 'Kitty',
      email: 'Kirs@gmail.com',
      phone: '(+52) 9992585060',
      address: {
        city: 'Mérida, Yucatán'
      }
    },
    {
      name: 'Miguel Fuentes',
      username: 'Migueluky69',
      email: 'Miguel@gmail.com',
      phone: '(+52) 9992585050',
      address: {
        city: 'Mérida, Yucatán'
      }
    },
    {
      name: 'Sergio Mendoza',
      username: 'Terminator',
      email: 'Sergiogmail.com',
      phone: '(+52) 9992585030',
      address: {
        city: 'Mérida, Yucatán'
      }
    },
  ]

  return users as unknown as User[];
};
