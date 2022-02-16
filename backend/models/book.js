const mongoose = require('mongoose')

const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/'

console.log('connecting to', url)
mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const bookSchema = new mongoose.Schema({
  title: { type: String, minlength: 3 },
  author: { type: String, minlength: 3 },
  description: { type: String },
})

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Book', bookSchema)