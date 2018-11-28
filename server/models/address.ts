import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, require: true},
  firstName: {type: String, require: true},
  street: {type: String, require: true},
  houseNumber: {type: String, require: true},
  town: {type: String, require: true},
  plz: {type: String, require: true},
  email: {type: String, require: true}
});

const Address = mongoose.model('Address', schema);

export default Address;
