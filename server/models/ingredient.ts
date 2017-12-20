import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, require: true},
  category: {type: String, required: true},
  price: {type: Number, required: true}
});

const ingredient = mongoose.model('Ingredient', schema);

export default ingredient;
