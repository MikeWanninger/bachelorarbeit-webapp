import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  street: {type: String, require: true},
  houseNumber: {type: Number, require: true},
  location: {type: String, required: true}
});

const Address = mongoose.model('Address', schema);

export default Address;
