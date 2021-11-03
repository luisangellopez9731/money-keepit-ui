const faker = require("faker");

const accounts = () => {
  const result = [];

  for (var i = 0; i < 100; i++) {
    result.push({
      id: faker.datatype.uuid(),
      name: faker.name.title(),
      description: faker.lorem.paragraph(),
      amount: faker.datatype.number({ max: 999999, min: 0 }),
      type: faker.random.arrayElement(["expense", "income"]),
      createdDate: faker.date.between(
        new Date("2015-12-17T03:24:00"),
        new Date()
      ),
    });
  }

  return result;
};

const server = { accounts: accounts() };

module.exports = () => {
  return server;
};
