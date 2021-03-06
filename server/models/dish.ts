import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, require: true},
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
  price: {type: Number, required: true}
});

const Dish = mongoose.model('Dish', schema);

export default Dish;
