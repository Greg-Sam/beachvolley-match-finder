module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
  console.error(err.message)
  process.exit(1)
})