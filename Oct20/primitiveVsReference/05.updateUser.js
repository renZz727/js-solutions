function updateUserNoMutation(user) {
  newObj = Object.assign(user);
  newObj.lastActive = false;
  return user;
}

function updateUser(user) {
  let newObj = {};
  for (let obj in user) {
    newObj[obj] = user[obj];
  }
  newObj.lastActive = false;
  return newObj;
}

user = {
  name: "username",
  lastActive: true,
};

console.log("Object Not Changed");
console.log(user);
console.log(updateUserNoMutation(user));
console.log(user);

user2 = {
  name: "username",
  lastActive: true,
};

console.log("Object Changed");
console.log(user2);
console.log(updateUser(user2));
console.log(user2);
