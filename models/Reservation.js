const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReservationSchema = new Schema({
userId: {
  required: true,
  type: mongoose.SchemaTypes.ObjectId,
  ref: "user"
},
  name: {
    type: String,
    required: true,
    ref: "user"
    // dropdowns: {type: [Schema.ObjectId], default: null}
  },
  service : {
    type: String,
    required: true
  },

  time : {
    type: String,
    required: true
  },
  date : {
    type: String,
    required: true
  }


//   name: {
//     type: String,
//     required: true
//   },
//   breed: {
//     type: String,
//     required: true
//   },
//   weight: {
//     type: String,
//     required: true
//   },
//   image:    {
//     data: Buffer,
//     contentType: String
// },
// userId: {
//   required: true,
//   type: mongoose.SchemaTypes.ObjectId,
//   ref: "user"
// },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

module.exports = Reservation = mongoose.model('reservation', ReservationSchema);
