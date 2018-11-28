import BaseCtrl from './base';
import SideDish from '../models/side-dish';

export default class SideDishCtrl extends BaseCtrl {
  model = SideDish;

  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    }).populate('ingredients');
  }
}
