import Burger from '../models/burger';
import BaseCtrl from './base';

export default class BurgerCtrl extends BaseCtrl {
  model = Burger;

  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    }).populate('ingredients');
  }
}
