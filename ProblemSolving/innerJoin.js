const directory = [
  { name: "Maggie", age: 14, id: 0, phone: "+123456" },
  { name: "Joseph", age: 24, id: 1, phone: "+123453" },
  { name: "Margaret", age: 11, id: 2, phone: "+12332" },
  { name: "Elizabeth", age: 61, id: 3, phone: "+144453" },
  { name: "Julio", age: 24, id: 4, phone: "+14433253" },
  { name: "Kevin", age: 664, id: 5, phone: "+144423" },
  { name: "Martin", age: 71, id: 6, phone: "+142453" },
  { name: "Aaron", age: 30, id: 7, phone: "+1467853" },
];

const registrations = [
  {
    name: "Maggie",
    age: 14,
    id: 0,
    email: "maggie@notreal.com",
    confirmed: true,
  },
  {
    name: "Elizabeth",
    age: 61,
    id: 1,
    email: "elizabeth@notreal.com",
    confirmed: false,
  },
  {
    name: "Martin",
    age: 71,
    id: 2,
    email: "martin@notreal.com",
    confirmed: false,
  },
  {
    name: "Aaron",
    age: 30,
    id: 3,
    email: "aaron@notreal.com",
    confirmed: true,
  },
];

function innerJoin({ left = [], right = [], key = "" }) {
  const hashByKey = left.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});

  const merged = right.map((element) => {
    return hashByKey[element[key]]
      ? { ...element, ...hashByKey[element[key]] }
      : element;
  });

  return merged;
}

console.log(innerJoin({ left: directory, right: registrations, key: "name" }));
