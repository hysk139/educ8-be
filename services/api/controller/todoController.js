const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllTodoByTopicId = async (req,res) => {
    const topic_id = parseInt(req.params.topic_id);
    const query = 'SELECT * FROM todo WHERE topic_id = $1 ORDER by todo_id ;';

    try{
        const { rows } = await dbQueries(query, [topic_id]);
        const dbResponse = rows;
        if (dbResponse[0] === undefined) {
          errorMessage.error = 'There are no Todo';
          return res
            .status(status.error)
            .send(errorMessage.error + ' ' + error.code);
        }
        successMessage.data = dbResponse;
        return res  
          .status(status.success)
          .send(successMessage.data);
      } catch (error) {
        errorMessage.error = 'An error occured.'
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
}

const getAllTodo = async (req,res) => {
  const query = 'SELECT * FROM todo ORDER by todo_id;';

  try{
      const { rows } = await dbQueries(query);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no Todo';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
}

const getTodoById = async (req,res) => {
  const topic_id = parseInt(req.params.topic_id);
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM todo WHERE todo_id = $1;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no Todo';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
}

const addTodo = async (req, res) => {
  const title = (req.body.title);
  const description = (req.body.description);
  const deadline = (req.body.deadline);
  const type = (req.body.type);
  const topic_id = (req.body.topic_id);
  const query = 'INSERT INTO todo(title, description, deadline, type, topic_id) VALUES($1, $2, $3, $4, $5);';

    try {
        const { rows } = await dbQueries(query, [title, description, type, topic_id]);
        const dbResponse = rows;
        if (!dbResponse) {
            errorMessage.error = `Cannot add` ;
            return res
              .status(status.error)
              .send(errorMessage + ' ' + error.code);
        }
        successMessage.data = dbResponse;
        return res  
          .status(status.success)
          .send(successMessage.data);
      } catch (error) {
        errorMessage.error = 'An error occured.'
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
}

module.exports = {
    getAllTodo,
    getAllTodoByTopicId,
    getTodoById,
    addTodo
}