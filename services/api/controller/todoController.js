const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

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
  /*const brand = (req.body.brand);
  const country = (req.body.country);
  const description = (req.body.description);*/
  const query = 'INSERT INTO todo(title, description, deadline, type, topic_id) VALUES(\'Software Architecture Quiz\', \'Quiz Materi SA\', \'2021-11-18 16:30:00\', \'TEST\', 1);';

    try {
        const { rows } = await dbQueries(query);
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
    getTodoById,
    addTodo
}