import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, require: true},
  address: {type: mongoose.Schema.Types.ObjectId, ref: 'Address'},
  dishes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dish'}],
  price: {type: Number, required: true}
});

const Order = mongoose.model('Order', schema);

export default Order;
