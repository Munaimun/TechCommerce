import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Munaimun Bari',
    email: 'bari@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nuha Hossain',
    email: 'nuha@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
