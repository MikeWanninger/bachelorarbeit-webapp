import Dish from '../models/dish';
import BaseCtrl from './base';

export default class DishCtrl extends BaseCtrl {
  model = Dish;
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    }).populate('ingredients');
  }
}
