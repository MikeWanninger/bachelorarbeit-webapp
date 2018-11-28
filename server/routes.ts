import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import UserCtrl from './controllers/user';
import BurgerCtrl from './controllers/burger';
import IngredientCtrl from './controllers/ingredient';
import OrderCtrl from './controllers/order';
import DishCtrl from './controllers/dish';
import AddressCtrl from './controllers/address';
import SideDishCtrl from './controllers/side-dish';

export default function setRoutes(app) {
  const router = express.Router();

  const userCtrl = new UserCtrl();
  const burgerCtrl = new BurgerCtrl();
  const ingredientCtrl = new IngredientCtrl();
  const orderCtrl = new OrderCtrl();
  const dishCtrl = new DishCtrl();
  const sideDishCtrl = new SideDishCtrl();
  const adressCtrl = new AddressCtrl();

  // Users
  /**
   * @api {post} api/login Benutzer Anmeldung
   * @apiName login
   * @apiGroup User
   *
   * @apiParam {String} username Benutzername - Required
   * @apiParam {String} password Passwort - Required
   *
   * @apiSuccess {String} token Token zum verifizieren von Benutzern.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "token": "tokenstring"
   *     }
   *
   * @apiError LoginFailed Der Login ist fehlgeschlagen
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {}
   */
  router.route('/login').post(userCtrl.login);

  /**
   * @api {get} api/users Rückgabe aller Benutzer
   * @apiName getAll
   * @apiGroup User
   *
   * @apiSuccess {Array} user Liste aller Benutzer
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *          "username": "test",
   *          "email": "test@test.de",
   *          "address": {
   *              "name": "Mustermann",
   *              "firstName": "Max",
   *              "street": "Test Str.",
   *              "houseNumber": "20",
   *              "town": "Nordenham",
   *              "plz": "26954",
   *              "email": "test@test.de"
   *           }
   *        }
   *      ]
   *
   */
  router.route('/users').get(userCtrl.getAll);

  /**
   * @api {post} api/users/count Anzahl der registrierten Benutzer
   * @apiName count
   * @apiGroup User
   *
   * @apiSuccess {String} count Anzahl der registrierten Benutzer
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     2
   *
   */
  router.route('/users/count').get(userCtrl.count);

  /**
   * @api {post} api/user Benutzer hinzufügen
   * @apiName insert
   * @apiGroup User
   *
   * @apiParam {String} username Benutzername - Required
   * @apiParam {String} password Passwort - Required
   * @apiParam {String} email E-Mail - Required
   * @apiParam {Address} address Adresse des Benutzers
   *
   * @apiSuccess {String} user Benutzerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *    {
   *         "_id": "5a74c986cb7ba72ddce2ac5a",
   *         "username": "knq",
   *         "email": "test@test.com",
   *         "role": "admin",
   *         "__v": 0,
   *         "address": {
   *             "email": "test@test.com",
   *             "plz": "26954",
   *             "town": "Nordenham",
   *             "houseNumber": "2",
   *             "street": "Butjadinger Str.",
   *             "firstName": "aaaaaaaaa",
   *             "name": "Wanninger"
   *         }
   *     }
   *
   * @apiError CreationFailed Benutzer konnte nicht erstellt werden
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     Bad Request
   */
  router.route('/user').post(userCtrl.insert);

  /**
   * @api {get} api/user/:id Benutzer abfragen
   * @apiName get
   * @apiGroup User
   *
   * @apiParam {String} id ID des Benutzers - Required
   *
   * @apiSuccess {String} user Benutzerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *    {
   *         "_id": "5a74c986cb7ba72ddce2ac5a",
   *         "username": "knq",
   *         "email": "test@test.com",
   *         "role": "admin",
   *         "__v": 0,
   *         "address": {
   *             "email": "test@test.com",
   *             "plz": "26954",
   *             "town": "Nordenham",
   *             "houseNumber": "2",
   *             "street": "Butjadinger Str.",
   *             "firstName": "aaaaaaaaa",
   *             "name": "Wanninger"
   *         }
   *     }
   *
   * @apiError NoUserFound Es konnte kein Benutzer mit dieser ID gefunden werden
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     Bad Request
   */
  router.route('/user/:id').get(userCtrl.get);

  /**
   * @api {put} api/user/:id Benutzerdaten verändern
   * @apiName update
   * @apiGroup User
   *
   * @apiParam {String} username Benutzername - Required
   * @apiParam {String} email E-Mail
   * @apiParam {String} role Benutzerrolle (Admin | User)
   * @apiParam {Address} address Adresse des Benutzers
   *
   * @apiSuccess {String} status Status
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     OK
   *
   */
  router.route('/user/:id').put(userCtrl.update);

  /**
   * @api {delete} api/user/:id Benutzer löschen
   * @apiName delete
   * @apiGroup User
   *
   * @apiParam {String} id ID des Benutzers - Required
   *
   * @apiSuccess {String} user Benutzerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     OK
   *
   */
  router.route('/user/:id').delete(userCtrl.delete);

  // Burger
  /**
   * @api {get} api/burgers Abfrage aller Burger
   * @apiName getAll
   * @apiGroup Burger
   *
   *
   * @apiSuccess {String} burgerList Liste aller Burger
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *         {
   *             "_id": "5a5cf31bbaf76d3b881d19f7",
   *             "name": "Cheeseburger",
   *             "price": 1,
   *             "__v": 0,
   *             "ingredients": []
   *         },
   *         {
   *             "_id": "5a5cf31bbaf76d3b881d19f8",
   *             "name": "Hamburger",
   *             "price": 1,
   *             "__v": 0,
   *             "ingredients": []
   *         },
   *         {
   *             "_id": "5a6258fbd7bce9cdf8ecc773",
   *             "name": "Bacon-Burger",
   *             "price": 1,
   *             "__v": 0,
   *             "ingredients": []
   *         }
   *     ]
   *
   */
  router.route('/burgers').get(burgerCtrl.getAll);

  /**
   * @api {get} api/burgers/count Anzahl der Burger
   * @apiName count
   * @apiGroup Burger
   *
   * @apiSuccess {String} count Anzahl der Burger
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     2
   *
   */
  router.route('/burgers/count').get(burgerCtrl.count);

  /**
   * @api {post} api/burger?token Burger hinzufügen
   * @apiName insert
   * @apiGroup Burger
   *
   * @apiParam {String} id ID des Burgers - Required
   *
   * @apiSuccess {String} burger Burgerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "__v": 0,
   *         "name": "testburger",
   *         "price": 1,
   *         "_id": "5b0b29207ace7956a02f8af8",
   *         "ingredients": []
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/burger').post(burgerCtrl.insert);

  /**
   * @api {get} api/burger/:id Burger anhand der ID abrufen
   * @apiName get
   * @apiGroup Burger
   *
   * @apiSuccess {String} burger Burgerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "__v": 0,
   *         "name": "testburger",
   *         "price": 1,
   *         "_id": "5b0b29207ace7956a02f8af8",
   *         "ingredients": []
   *     }
   */
  router.route('/burger/:id').get(burgerCtrl.get);

  /**
   * @api {PUT} api/burger/:id?token Burger anhand der ID verändern
   * @apiName update
   * @apiGroup Burger
   *
   * @apiParam {String} name Name des Burgers
   * @apiParam {String} price Preis des Burgers
   * @apiParam {Array} ingredients Liste der Zutaten
   *
   * @apiSuccess {String} burger Burgerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "__v": 0,
   *         "name": "testburger",
   *         "price": 1,
   *         "_id": "5b0b29207ace7956a02f8af8",
   *         "ingredients": []
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/burger/:id').put(burgerCtrl.update);

  /**
   * @api {delete} api/burger/:id?token Burger anhand der ID löschen
   * @apiName delete
   * @apiGroup Burger
   *
   * @apiSuccess {String} burger Burgerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "__v": 0,
   *         "name": "testburger",
   *         "price": 1,
   *         "_id": "5b0b29207ace7956a02f8af8",
   *         "ingredients": []
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/burger/:id').delete(burgerCtrl.delete);

  // Ingredient

  /**
   * @api {get} api/ingredient Abfrage aller Zutaten
   * @apiName getAll
   * @apiGroup Ingredient
   *
   *
   * @apiSuccess {Array} ingredientList Liste aller Zutaten
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *           "_id": "5a578d9c4b60aa2bdb0f7345",
   *           "name": "Brötchen",
   *           "category": "Brot",
   *           "price": 1,
   *           "__v": 0
   *       },
   *       {
   *           "_id": "5a578db54b60aa2bdb0f7346",
   *           "name": "Rindfleisch",
   *           "category": "Fleisch",
   *           "price": 1,
   *           "__v": 0
   *       },
   *       {
   *           "_id": "5a578dcc4b60aa2bdb0f7347",
   *           "name": "Hähnchen",
   *           "category": "Fleisch",
   *           "price": 1,
   *           "__v": 0
   *       }
   *     ]
   *
   */
  router.route('/ingredients').get(ingredientCtrl.getAll);

  /**
   * @api {get} api/ingredients/count Anzahl der Burger
   * @apiName count
   * @apiGroup Ingredient
   *
   * @apiSuccess {String} count Anzahl der Zutaten
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     2
   *
   */
  router.route('/ingredients/count').get(ingredientCtrl.count);

  /**
   * @api {post} api/burger?token Burger hinzufügen
   * @apiName insert
   * @apiGroup Ingredient
   *
   * @apiParam {String} id ID des Burgers - Required
   *
   * @apiSuccess {String} ingredient Information über Zutat
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "_id": "5a578dcc4b60aa2bdb0f7347",
   *           "name": "Hähnchen",
   *           "category": "Fleisch",
   *           "price": 1,
   *           "__v": 0
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/ingredient').post(ingredientCtrl.insert);

  /**
   * @api {get} api/ingredient/:id Zutat anhand der ID abrufen
   * @apiName get
   * @apiGroup Ingredient
   *
   * @apiSuccess {String} ingredient Information über Zutat
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "__v": 0,
   *         "name": "testburger",
   *         "price": 1,
   *         "_id": "5b0b29207ace7956a02f8af8",
   *         "ingredients": []
   *     }
   */
  router.route('/ingredient/:id').get(ingredientCtrl.get);

  /**
   * @api {PUT} api/ingredient/:id?token Burger anhand der ID verändern
   * @apiName update
   * @apiGroup Ingredient
   *
   * @apiParam {String} name Name des Burgers
   * @apiParam {String} price Preis des Burgers
   * @apiParam {String} category Kategorie der Zutat
   *
   * @apiSuccess {String} ingredient Imformation über Zutat
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a578dcc4b60aa2bdb0f7347",
   *         "name": "Hähnchen",
   *         "category": "Fleisch",
   *         "price": 1,
   *         "__v": 0
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/ingredient/:id').put(ingredientCtrl.update);

  /**
   * @api {delete} api/ingredient/:id?token Burger anhand der ID löschen
   * @apiName delete
   * @apiGroup Ingredient
   *
   * @apiSuccess {String} ingredient Information über Zutat
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a578dcc4b60aa2bdb0f7347",
   *         "name": "Hähnchen",
   *         "category": "Fleisch",
   *         "price": 1,
   *         "__v": 0
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/ingredient/:id').delete(ingredientCtrl.delete);

  // Order

  /**
   * @api {get} api/orders Abfrage aller Burger
   * @apiName getAll
   * @apiGroup Order
   *
   *
   * @apiSuccess {String} orderList Liste aller Bestllungen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *         {
   *             "_id": "5a2df13e5e93f94174729986",
   *             "name": "cheese",
   *             "address": {
   *                 "_id": "5a2dcbea6c12b1493c71852e",
   *                 "street": "Butjadinger Str.",
   *                 "houseNumber": "61",
   *                 "location": "Nordenham",
   *                 "__v": 0
   *             },
   *             "price": 15,
   *             "__v": 0,
   *             "dishes": []
   *         },
   *         {
   *             "_id": "5a2df6680c08df280c8b1c9c",
   *             "name": "cheese",
   *             "address": {
   *                 "_id": "5a2dcbea6c12b1493c71852e",
   *                 "street": "Butjadinger Str.",
   *                 "houseNumber": "61",
   *                 "location": "Nordenham",
   *                 "__v": 0
   *             },
   *             "price": 15,
   *             "__v": 0,
   *             "dishes": []
   *         },
   *         {
   *             "_id": "5a2df7a6e41dd74128953bac",
   *             "name": "cheese",
   *             "address": {
   *                 "_id": "5a2dcbea6c12b1493c71852e",
   *                 "street": "Butjadinger Str.",
   *                 "houseNumber": "61",
   *                 "location": "Nordenham",
   *                 "__v": 0
   *             },
   *             "price": 15,
   *             "__v": 0,
   *             "dishes": []
   *         }
   *     ]
   *
   */
  router.route('/orders').get(orderCtrl.getAll);

  /**
   * @api {get} api/orders/count Anzahl der Bestellungen
   * @apiName count
   * @apiGroup Order
   *
   * @apiSuccess {String} count Anzahl der Bestellungen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     2
   *
   */
  router.route('/orders/count').get(orderCtrl.count);

  /**
   * @api {post} api/order?token Bestellung hinzufügen
   * @apiName insert
   * @apiGroup Order
   *
   * @apiParam {String} name Name des Benutzers
   * @apiParam {Address} address Adresse des Benutzers
   * @apiParam {String} price Preis der Bestellung
   * @apiParam {Array} dishes Liste von Gerichten
   *
   * @apiSuccess {String} burger Burgerinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2df13e5e93f94174729986",
   *         "name": "cheese",
   *         "address": {
   *             "_id": "5a2dcbea6c12b1493c71852e",
   *             "street": "Butjadinger Str.",
   *             "houseNumber": "61",
   *             "location": "Nordenham",
   *             "__v": 0
   *         },
   *         "price": 15,
   *         "__v": 0,
   *         "dishes": []
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/order').post(orderCtrl.insert);

  /**
   * @api {get} api/order/:id Bestellung anhand der ID abrufen
   * @apiName get
   * @apiGroup Order
   *
   * @apiSuccess {String} order Bestellinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2df13e5e93f94174729986",
   *         "name": "cheese",
   *         "address": {
   *             "_id": "5a2dcbea6c12b1493c71852e",
   *             "street": "Butjadinger Str.",
   *             "houseNumber": "61",
   *             "location": "Nordenham",
   *             "__v": 0
   *         },
   *         "price": 15,
   *         "__v": 0,
   *         "dishes": []
   *     }
   */
  router.route('/order/:id').get(orderCtrl.get);

  /**
   * @api {PUT} api/order/:id?token Bestellung anhand der ID verändern
   * @apiName update
   * @apiGroup Order
   *
   * @apiParam {String} name Name des Benutzers
   * @apiParam {Address} address Adresse des Benutzers
   * @apiParam {String} price Preis der Bestellung
   * @apiParam {Array} dishes Liste von Gerichten
   *
   * @apiSuccess {String} order Bestellinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2df13e5e93f94174729986",
   *         "name": "cheese",
   *         "address": {
   *             "_id": "5a2dcbea6c12b1493c71852e",
   *             "street": "Butjadinger Str.",
   *             "houseNumber": "61",
   *             "location": "Nordenham",
   *             "__v": 0
   *         },
   *         "price": 15,
   *         "__v": 0,
   *         "dishes": []
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/order/:id').put(orderCtrl.update);

  /**
   * @api {delete} api/order/:id?token Burger anhand der ID löschen
   * @apiName delete
   * @apiGroup Order
   *
   * @apiSuccess {String} order Bestellinformationen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2df13e5e93f94174729986",
   *         "name": "cheese",
   *         "address": {
   *             "_id": "5a2dcbea6c12b1493c71852e",
   *             "street": "Butjadinger Str.",
   *             "houseNumber": "61",
   *             "location": "Nordenham",
   *             "__v": 0
   *         },
   *         "price": 15,
   *         "__v": 0,
   *         "dishes": []
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/order/:id').delete(orderCtrl.delete);

  // Dish
  router.route('/dishes').get(dishCtrl.getAll);
  router.route('/dishes/count').get(dishCtrl.count);
  router.route('/dish').post(dishCtrl.insert);
  router.route('/dish/:id').get(dishCtrl.get);
  router.route('/dish/:id').put(dishCtrl.update);
  router.route('/dish/:id').delete(dishCtrl.delete);

  // Side-Dish

  /**
   * @api {get} api/side-dishes Abfrage aller Beilagen
   * @apiName getAll
   * @apiGroup Side-Dish
   *
   *
   * @apiSuccess {String} side-dishList Liste aller Beilagen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *         {
   *             "_id": "5a60cc130d2b0fa37cfc6753",
   *             "name": "Pommes",
   *             "price": 1,
   *             "__v": 0,
   *             "ingredients": []
   *         },
   *         {
   *             "_id": "5a6364c7aa0e6e1a3dd78e68",
   *             "name": "Nuggets",
   *             "price": 1,
   *             "__v": 0,
   *             "ingredients": []
   *         }
   *     ]
   *
   */
  router.route('/side-dishes').get(sideDishCtrl.getAll);

  /**
   * @api {get} api/side-dishes/count Anzahl der Beilagen
   * @apiName count
   * @apiGroup Side-Dish
   *
   * @apiSuccess {String} count Anzahl der Beilagen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     2
   *
   */
  router.route('/side-dishes/count').get(sideDishCtrl.count);

  /**
   * @api {post} api/side-dish?token Beilage hinzufügen
   * @apiName insert
   * @apiGroup Side-Dish
   *
   * @apiParam {String} id ID der Beilage - Required
   *
   * @apiSuccess {String} side-dish Informationen zur Beilage
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a60cc130d2b0fa37cfc6753",
   *         "name": "Pommes",
   *         "price": 1,
   *         "__v": 0,
   *         "ingredients": []
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/side-dish').post(sideDishCtrl.insert);

  /**
   * @api {get} api/side-dish/:id Beilage anhand der ID abrufen
   * @apiName get
   * @apiGroup Side-Dish
   *
   * @apiSuccess {String} side-dish Informationen zur Beilage
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a60cc130d2b0fa37cfc6753",
   *         "name": "Pommes",
   *         "price": 1,
   *         "__v": 0,
   *         "ingredients": []
   *     }
   */
  router.route('/side-dish/:id').get(sideDishCtrl.get);

  /**
   * @api {PUT} api/side-dish/:id?token Beilage anhand der ID verändern
   * @apiName update
   * @apiGroup Side-Dish
   *
   * @apiParam {String} name Name de Beilage
   * @apiParam {String} price Preis der Beilage
   * @apiParam {Array} ingredients Zutaten der Beilage
   *
   * @apiSuccess {String} side-dish Informationen zur Beilage
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a60cc130d2b0fa37cfc6753",
   *         "name": "Pommes",
   *         "price": 1,
   *         "__v": 0,
   *         "ingredients": []
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/side-dish/:id').put(sideDishCtrl.update);

  /**
   * @api {delete} api/side-dish/:id?token Beilage anhand der ID löschen
   * @apiName delete
   * @apiGroup Side-Dish
   *
   * @apiSuccess {String} side-dish Informationen zur Beilage
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a60cc130d2b0fa37cfc6753",
   *         "name": "Pommes",
   *         "price": 1,
   *         "__v": 0,
   *         "ingredients": []
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/side-dish/:id').delete(sideDishCtrl.delete);

  // Address

  /**
   * @api {get} api/addresses Abfrage aller Adressen
   * @apiName getAll
   * @apiGroup Address
   *
   *
   * @apiSuccess {String} addressList Liste aller Adressen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *         {
   *             "_id": "5a2dcbea6c12b1493c71852e",
   *             "street": "Butjadinger Str.",
   *             "houseNumber": "61",
   *             "location": "Nordenham",
   *             "__v": 0
   *         }
   *     ]
   *
   */
  router.route('/addresses').get(adressCtrl.getAll);

  /**
   * @api {get} api/addresses/count Anzahl der Adressen
   * @apiName count
   * @apiGroup Address
   *
   * @apiSuccess {String} count Anzahl der Adressen
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     2
   *
   */
  router.route('/addresses/count').get(adressCtrl.count);

  /**
   * @api {post} api/address?token Adresse hinzufügen
   * @apiName insert
   * @apiGroup Address
   *
   * @apiParam {String} id ID der Adresse - Required
   *
   * @apiSuccess {String} address Informationen zur Adresse
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2dcbea6c12b1493c71852e",
   *         "street": "Butjadinger Str.",
   *         "houseNumber": "61",
   *         "location": "Nordenham",
   *         "__v": 0
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/address').post(adressCtrl.insert);

  /**
   * @api {get} api/address/:id Adresse anhand der ID abrufen
   * @apiName get
   * @apiGroup Address
   *
   * @apiSuccess {String} address Informationen zur Adresse
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2dcbea6c12b1493c71852e",
   *         "street": "Butjadinger Str.",
   *         "houseNumber": "61",
   *         "location": "Nordenham",
   *         "__v": 0
   *     }
   */
  router.route('/address/:id').get(adressCtrl.get);

  /**
   * @api {PUT} api/address/:id?token Adresse anhand der ID verändern
   * @apiName update
   * @apiGroup Address
   *
   * @apiParam {String} street Straße
   * @apiParam {String} housenumber Hausnummer
   * @apiParam {Array} location Stadt
   *
   * @apiSuccess {String} address Informationen zur Adresse
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2dcbea6c12b1493c71852e",
   *         "street": "Butjadinger Str.",
   *         "houseNumber": "61",
   *         "location": "Nordenham",
   *         "__v": 0
   *     }
   *
   * @apiError AuthenticationFail Authentifizierung schlug fehl
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/address/:id').put(adressCtrl.update);

  /**
   * @api {delete} api/address/:id?token Adresse anhand der ID löschen
   * @apiName delete
   * @apiGroup Address
   *
   * @apiSuccess {String} address Informationen zur Adresse
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "_id": "5a2dcbea6c12b1493c71852e",
   *         "street": "Butjadinger Str.",
   *         "houseNumber": "61",
   *         "location": "Nordenham",
   *         "__v": 0
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Not Found
   *     {
   *       "title": "Not Authenticated",
   *       "error": {
   *           "name": "JsonWebTokenError",
   *           "message": "jwt must be provided"
   *        }
   *     }
   */
  router.route('/address/:id').delete(adressCtrl.delete);

  // define middleware for route protection
  app.post('*', (req, res, next) => {
    if (
      !(
        req.url === '/api/login' ||
        req.url === '/api/user' ||
        req.url === '/api/user/*'
      )
    ) {
      jwt.verify(req.query.token, process.env.SECRET_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            title: 'Not Authenticated',
            error: err
          });
        }
        // console.log('verified next');
        next();
      });
    } else {
      // console.log('login next');
      next();
    }
  });

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
}
