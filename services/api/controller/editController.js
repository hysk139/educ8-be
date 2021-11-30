const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const editUserById = async (req,res) => {
    
  const userId = parseInt(req.params.user_id);
  const email = (req.body.email);
  const password = (req.body.password);
  const name = (req.body.name);
  const phone_number = (req.body.phone_number);
  const query = 'UPDATE users SET email = $1, password = $2, name = $3, phone_number = $4  WHERE user_id = $5 returning *;';

    try{
        const { rows } = await dbQueries(query, [email, password, name, phone_number, userId]);
        const dbResponse = rows;
        if (dbResponse[0] === undefined) {
          errorMessage.error = 'There are no users';
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


const editSubjectById = async (req,res) => {
  const subject_id = parseInt(req.params.subject_id);
  const name = (req.body.name);
  const query = 'UPDATE subject SET name = $1 WHERE subject_id = $2 returning *;';

  try{
      const { rows } = await dbQueries(query, [name, subject_id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no subject';
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

const editTopicsById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'UPDATE topics SET topic_name = \'DMJ Meeting 2\', materials = \'Ini meeting kedua\', video = \'youtube.com\' WHERE topic_id = $1 returning *;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no topics';
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

const editTodoById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'UPDATE todo SET title = \'PR DMJ Meeting 2\', description = \'Ini PR meeting kedua\', deadline = \'2021-11-16 16:30:00\', type = \'TASK\' WHERE todo_id = $1 returning *;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no todo';
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

const deleteUsersById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM users WHERE user_id = $1;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no users';
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

const deleteSubjectById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM subject WHERE subject_id = $1;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no subjects';
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


const deleteTopicById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM topics WHERE topic_id = $1;';

  try{
      const { rows } = await dbQueries(query , [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no topics';
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


const deleteTodoById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM todo WHERE todo_id = $1;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no todo';
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



module.exports = {
    editUserById,
    editSubjectById,
    editTopicsById,
    editTodoById,
    deleteUsersById,
    deleteSubjectById,
    deleteTopicById,
    deleteTodoById
}