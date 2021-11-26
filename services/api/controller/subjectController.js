const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllSubject = async (req,res) => {
    const query = 'SELECT * FROM subject ORDER by subject_id;';

    try{
        const { rows } = await dbQueries(query);
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

const getSubjectByUserId = async (req,res) => {
  const user_id = parseInt(req.params.user_id);
  const query = 'SELECT * FROM subject WHERE user_id = $1 ORDER by subject_id;';

  try{
      const { rows } = await dbQueries(query, [user_id]);
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

const getSubjectById = async (req,res) => {
  const id = parseInt(req.params.id);
  const user_id = parseInt(req.params.user_id);
  const query = 'SELECT * FROM subject WHERE subject_id = $1 AND user_id = $2;';

  try{
      const { rows } = await dbQueries(query, [id, user_id]);
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

const addSubject = async (req, res) => {
  /*const brand = (req.body.brand);
  const country = (req.body.country);
  const description = (req.body.description);*/
  const query = 'INSERT INTO subject(name, user_id) VALUES(\'DMJ\', 3);';

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
    getAllSubject,
    getSubjectById,
    addSubject,
    getSubjectByUserId
    
}