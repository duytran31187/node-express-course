const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
    trim: true,
    minlength:5
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  }
},
  {
    versionKey: false, // _v field 
    toJSON: { virtuals: true } // <-- include virtuals in `JSON.stringify()`
  }
)
// add one more property base on what it has
productSchema.virtual('ProductNameFormatted').get(function () {
  return this.name.toUpperCase()
});

// add more static
// Do not declare statics using ES6 arrow functions (=>). Arrow functions explicitly prevent binding this, so the above examples will not work because of the value of this.
productSchema.static('getValidCompanyNames', function () {
  return ['ikea', 'liddy', 'caressa', 'marcos']
})

module.exports = mongoose.model('Product', productSchema)
