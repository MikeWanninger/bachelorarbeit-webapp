import Order from '../models/order';
import BaseCtrl from './base';

export default class OrderCtrl extends BaseCtrl {
  model = Order;

  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    }).populate('address')
      .populate({
        path: 'dishes',
        populate: {
          path: 'ingredients'
        }
      });
  }
}
