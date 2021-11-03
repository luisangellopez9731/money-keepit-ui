const faker = require("faker");

const generateAccounts = () => {
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

const generateCategories = () => {
  const result = [];

  for (var i = 0; i < 100; i++) {
    result.push({
      id: faker.datatype.uuid(),
      name: faker.name.jobTitle(),
      description: faker.lorem.paragraph(),
      type: faker.random.arrayElement(["expense", "income"]),
      icon: faker.random.arrayElement([
        "home",
        "utensils",
        "hamburger",
        "plane",
        "car",
        "tshirt",
        "toilet",
        "bed",
        "laptop",
        "cocktail",
        "campground",
        "map",
        "mountain",
      ]),
      createdDate: faker.date.between(
        new Date("2015-12-17T03:24:00"),
        new Date()
      ),
    });
  }

  return result;
};

const generateTransactions = (accounts, categories) => {
  const result = [];

  for (var i = 0; i < 100; i++) {
    const type = faker.random.arrayElement(["expense", "income"]);
    const category = faker.random.arrayElement(
      categories.filter((e) => e.type === type)
    );
    const accountId = faker.random.arrayElement(accounts).id;

    result.push({
      id: faker.datatype.uuid(),
      description: faker.lorem.sentence(),
      amount: faker.datatype.number({ max: 999999, min: 0 }),
      type,
      categoryId: category.id,
      accountId,
      categoryIcon: category.icon,
      date: faker.date.between(new Date("2015-12-17T03:24:00"), new Date()),
      createdDate: faker.date.between(
        new Date("2015-12-17T03:24:00"),
        new Date()
      ),
    });
  }

  return result;
};

const accounts = generateAccounts();
const categories = generateCategories();
const transactions = generateTransactions(accounts, categories);

const server = { accounts, categories, transactions };

module.exports = () => {
  return server;
};
