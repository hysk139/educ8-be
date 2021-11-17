const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllUser = async (req,res) => {
    const query = 'SELECT * FROM users ORDER by user_id;';

    try{
        const { rows } = await dbQueries(query);
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

const getUserById = async (req,res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM users WHERE user_id = $1;';

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

const addUser = async (req, res) => {
  /*const brand = (req.body.brand);
  const country = (req.body.country);
  const description = (req.body.description);*/
  const query = 'INSERT INTO users(email, password, name, phone_number) VALUES(\'halo@gmail.com\', \'testing\', \'Leonardo Da Vinci\', 081290328008);';

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
    getAllUser,
    getUserById,
    addUser
}