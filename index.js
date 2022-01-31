const employee = {
    name: "Sam",
    streetAddress: "12 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return [employee], {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const cloneEmployee = Object.assign({}, employee);
    delete cloneEmployee[key];
    return cloneEmployee;
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}