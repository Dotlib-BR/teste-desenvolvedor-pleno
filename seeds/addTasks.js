const createTask = count => ({
  name: `Tarefa ${count}`
});

exports.seed = async knex => {
  // Delete ALL existing entries
  await knex("tasks").del();
  const desiredTasks = 10;
  const initialTasks = [];
  for (let i = 0; i < desiredTasks; i++) {
    initialTasks.push(createTask(i));
  }

  await knex("tasks").insert(initialTasks);
};
