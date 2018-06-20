// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

exports.helloWorld = (req, res) => {
  // Creates a client
  const datastore = new Datastore();

  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key('Activity');

  // Prepares the new entity
  const task = {
    key: taskKey,
    data: {
      start: new Date(),
      status: "active"
    },
  };

  // Saves the entity and responds
  datastore
    .save(task)
    .then(() => {
      console.log(`Saved ${task.key.name}: ${task.data.description}`);
      res.json({
        status: "success",
        result: task.data
      })
    })
    .catch(err => {
      console.error('ERROR:', err);
      res.status(500).end();
    });
};

