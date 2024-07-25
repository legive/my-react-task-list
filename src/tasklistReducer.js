

export const tasklistReducer = (taskArrayInitial, action) => {
  switch (action.type) {
    case 'AddTask':
      return [...taskArrayInitial, action.payload];
    case 'DeleteTask':
      return taskArrayInitial.filter((task) => (task.id !== action.payload))
    case 'DeleteCompletedTasks':
      return taskArrayInitial.filter((task) => (task.isComplete === false))
    case 'UpdateTask':
      return taskArrayInitial.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );

    default: taskArrayInitial;
  }


}

