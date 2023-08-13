function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
    return;
  }
  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

const exampleObject = {
    name: "John",
    age: 30,
    city: "New York"
};


printObjectProperties(exampleObject);
