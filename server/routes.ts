import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import BurgerCtrl from './controllers/burger';
import IngredientCtrl from './controllers/ingredient';
import OrderCtrl from './controllers/order';
import DishCtrl from './controllers/dish';
import AddressCtrl from './controllers/address';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const burgerCtrl = new BurgerCtrl();
  const ingredientCtrl = new IngredientCtrl();
  const orderCtrl = new OrderCtrl();
  const dishCtrl = new DishCtrl();
  const adressCtrl = new AddressCtrl();


  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Burger
  router.route('/burgers').get(burgerCtrl.getAll);
  router.route('/burgers/count').get(burgerCtrl.count);
  router.route('/burger').post(burgerCtrl.insert);
  router.route('/burger/:id').get(burgerCtrl.get);
  router.route('/burger/:id').put(burgerCtrl.update);
  router.route('/burger/:id').delete(burgerCtrl.delete);

  // Ingredient
  router.route('/ingredients').get(ingredientCtrl.getAll);
  router.route('/ingredients/count').get(ingredientCtrl.count);
  router.route('/ingredient').post(ingredientCtrl.insert);
  router.route('/ingredient/:id').get(ingredientCtrl.get);
  router.route('/ingredient/:id').put(ingredientCtrl.update);
  router.route('/ingredient/:id').delete(ingredientCtrl.delete);

  // Order
  router.route('/orders').get(orderCtrl.getAll);
  router.route('/orders/count').get(orderCtrl.count);
  router.route('/order').post(orderCtrl.insert);
  router.route('/order/:id').get(orderCtrl.get);
  router.route('/order/:id').put(orderCtrl.update);
  router.route('/order/:id').delete(orderCtrl.delete);

  // Dish
  router.route('/dishes').get(dishCtrl.getAll);
  router.route('/dishes/count').get(dishCtrl.count);
  router.route('/dish').post(dishCtrl.insert);
  router.route('/dish/:id').get(dishCtrl.get);
  router.route('/dish/:id').put(dishCtrl.update);
  router.route('/dish/:id').delete(dishCtrl.delete);

  // Address
  router.route('/addresses').get(adressCtrl.getAll);
  router.route('/addresses/count').get(adressCtrl.count);
  router.route('/address').post(adressCtrl.insert);
  router.route('/address/:id').get(adressCtrl.get);
  router.route('/address/:id').put(adressCtrl.update);
  router.route('/address/:id').delete(adressCtrl.delete);

  // define middleware for route protection
  app.post('*', (req, res, next) => {
    if (!(req.url === '/api/login' || req.url === '/api/user/*')) {
      console.log(req.query.token);
      jwt.verify(req.query.token, process.env.SECRET_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            title: 'Not Authenticated',
            error: err
          });
        }
        console.log('verified next');
        next();
      });
    }else {
      console.log('login next');
      next();
    }
  });

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);


}
