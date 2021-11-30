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
  /*const brand = (req.body.brand);
  const country = (req.body.country);
  const description = (req.body.description);*/
  const query = 'INSERT INTO topics(topic_name, materials, video, subject_id) VALUES(\'Software Architecture\', \'Pada materi ini dibahas SA\', \'https://www.youtube.com/watch?v=dQw4w9WgXcQ\', 1);';

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
    getAllTopic,
    getAllTopicBySubjectId,
    getTopicById,
    addTopic
}