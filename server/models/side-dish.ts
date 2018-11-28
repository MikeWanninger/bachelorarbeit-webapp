import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, require: true},
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
  price: {type: Number, required: true}
});

const SideDish = mongoose.model('SideDish', schema);

export default SideDish;
