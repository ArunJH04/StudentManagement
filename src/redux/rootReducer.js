import students from '../data/students';
let rootReducer = function(currentState = students, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return addStudentFun(currentState, action.student);
    case 'DELETE_STUDENT':
      return deleteStudentFun(currentState, action.student);
    default:
      return currentState;
  }
};

let addStudentFun = function(state, data) {
  let newObj = [...state, data];
  console.log(newObj);
  return newObj;
};

let deleteStudentFun = function(state, id) {
  console.log(id);
  let index = students.indexOf(id);
  return state.filter(state => state.id != id);
  // return [...state.slice(0, index), ...state.slice(index + 1)];
};

export default rootReducer;
