// Write your solution in this file!
const employee = {};

employee.name = "Sam";
employee.streetAddress = "20th Avenue street";

function updateEmployeeWithKeyAndValue(obj = employee, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(
  obj = employee,
  key,
  value,
) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj = employee, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj = employee, key) {
  delete obj[key];
  return obj;
}
