const express = require ('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const helmet = require('helmet')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())


const userRoutes = require('./services/api/routes/userRoutes');
const subjectRoutes = require('./services/api/routes/subjectRoutes');
const topicRoutes = require('./services/api/routes/topicRoutes');
const todoRoutes = require('./services/api/routes/todoRoutes');
const editRoutes = require('./services/api/routes/editRoutes');
app.use(helmet());
app.use(logger('dev'));
app.use('/api/users', userRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/todo', todoRoutes);
app.use('/api/edit', editRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening at port ${process.env.PORT}`)
})