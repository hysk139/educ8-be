const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllTopic = async (req,res) => {
  const query = 'SELECT * FROM topics ORDER by topic_id;';

  try{
      const { rows } = await dbQueries(query);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no topic';
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

const getAllTopicBySubjectId = async (req,res) => {
    const subject_id = parseInt(req.params.subject_id);
    const query = 'SELECT * FROM topics WHERE subject_id = $1 ORDER by topic_id;';

    try{
        const { rows } = await dbQueries(query, [subject_id]);
        const dbResponse = rows;
        if (dbResponse[0] === undefined) {
          errorMessage.error = 'There are no topic';
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

const getTopicById = async (req,res) => {
  const id = parseInt(req.params.id);
  const subject_id = parseInt(req.params.subject_id);
  const query = 'SELECT * FROM topics WHERE topic_id = $1;';

  try{
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no topic';
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

const addTopic = async (req, res) => {

  const topic_name = (req.body.topic_name);
  const subject_id = (req.body.subject_id);
  const query = 'INSERT INTO topics(topic_name, subject_id) VALUES($1, $2);';

    try {
        const { rows } = await dbQueries(query,[topic_name, subject_id] );
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
    getAllTopic,
    getAllTopicBySubjectId,
    getTopicById,
    addTopic
}