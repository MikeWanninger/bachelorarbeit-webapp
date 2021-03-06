define({ "api": [
  {
    "type": "get",
    "url": "api/addresses/count",
    "title": "Anzahl der Adressen",
    "name": "count",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Anzahl der Adressen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n2",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Address"
  },
  {
    "type": "delete",
    "url": "api/address/:id?token",
    "title": "Adresse anhand der ID löschen",
    "name": "delete",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Informationen zur Adresse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2dcbea6c12b1493c71852e\",\n    \"street\": \"Butjadinger Str.\",\n    \"houseNumber\": \"61\",\n    \"location\": \"Nordenham\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "api/address/:id",
    "title": "Adresse anhand der ID abrufen",
    "name": "get",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Informationen zur Adresse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2dcbea6c12b1493c71852e\",\n    \"street\": \"Butjadinger Str.\",\n    \"houseNumber\": \"61\",\n    \"location\": \"Nordenham\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "api/addresses",
    "title": "Abfrage aller Adressen",
    "name": "getAll",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressList",
            "description": "<p>Liste aller Adressen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5a2dcbea6c12b1493c71852e\",\n        \"street\": \"Butjadinger Str.\",\n        \"houseNumber\": \"61\",\n        \"location\": \"Nordenham\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "api/address?token",
    "title": "Adresse hinzufügen",
    "name": "insert",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID der Adresse - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Informationen zur Adresse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2dcbea6c12b1493c71852e\",\n    \"street\": \"Butjadinger Str.\",\n    \"houseNumber\": \"61\",\n    \"location\": \"Nordenham\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Address"
  },
  {
    "type": "PUT",
    "url": "api/address/:id?token",
    "title": "Adresse anhand der ID verändern",
    "name": "update",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>Straße</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "housenumber",
            "description": "<p>Hausnummer</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "location",
            "description": "<p>Stadt</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Informationen zur Adresse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2dcbea6c12b1493c71852e\",\n    \"street\": \"Butjadinger Str.\",\n    \"houseNumber\": \"61\",\n    \"location\": \"Nordenham\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "api/burgers/count",
    "title": "Anzahl der Burger",
    "name": "count",
    "group": "Burger",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Anzahl der Burger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n2",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Burger"
  },
  {
    "type": "delete",
    "url": "api/burger/:id?token",
    "title": "Burger anhand der ID löschen",
    "name": "delete",
    "group": "Burger",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burger",
            "description": "<p>Burgerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"__v\": 0,\n    \"name\": \"testburger\",\n    \"price\": 1,\n    \"_id\": \"5b0b29207ace7956a02f8af8\",\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Burger"
  },
  {
    "type": "get",
    "url": "api/burger/:id",
    "title": "Burger anhand der ID abrufen",
    "name": "get",
    "group": "Burger",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burger",
            "description": "<p>Burgerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"__v\": 0,\n    \"name\": \"testburger\",\n    \"price\": 1,\n    \"_id\": \"5b0b29207ace7956a02f8af8\",\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Burger"
  },
  {
    "type": "get",
    "url": "api/burgers",
    "title": "Abfrage aller Burger",
    "name": "getAll",
    "group": "Burger",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burgerList",
            "description": "<p>Liste aller Burger</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5a5cf31bbaf76d3b881d19f7\",\n        \"name\": \"Cheeseburger\",\n        \"price\": 1,\n        \"__v\": 0,\n        \"ingredients\": []\n    },\n    {\n        \"_id\": \"5a5cf31bbaf76d3b881d19f8\",\n        \"name\": \"Hamburger\",\n        \"price\": 1,\n        \"__v\": 0,\n        \"ingredients\": []\n    },\n    {\n        \"_id\": \"5a6258fbd7bce9cdf8ecc773\",\n        \"name\": \"Bacon-Burger\",\n        \"price\": 1,\n        \"__v\": 0,\n        \"ingredients\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Burger"
  },
  {
    "type": "post",
    "url": "api/burger?token",
    "title": "Burger hinzufügen",
    "name": "insert",
    "group": "Burger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID des Burgers - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burger",
            "description": "<p>Burgerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"__v\": 0,\n    \"name\": \"testburger\",\n    \"price\": 1,\n    \"_id\": \"5b0b29207ace7956a02f8af8\",\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Burger"
  },
  {
    "type": "PUT",
    "url": "api/burger/:id?token",
    "title": "Burger anhand der ID verändern",
    "name": "update",
    "group": "Burger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name des Burgers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Preis des Burgers</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Liste der Zutaten</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burger",
            "description": "<p>Burgerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"__v\": 0,\n    \"name\": \"testburger\",\n    \"price\": 1,\n    \"_id\": \"5b0b29207ace7956a02f8af8\",\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Burger"
  },
  {
    "type": "get",
    "url": "api/ingredients/count",
    "title": "Anzahl der Burger",
    "name": "count",
    "group": "Ingredient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Anzahl der Zutaten</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n2",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Ingredient"
  },
  {
    "type": "delete",
    "url": "api/ingredient/:id?token",
    "title": "Burger anhand der ID löschen",
    "name": "delete",
    "group": "Ingredient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Information über Zutat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a578dcc4b60aa2bdb0f7347\",\n    \"name\": \"Hähnchen\",\n    \"category\": \"Fleisch\",\n    \"price\": 1,\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Ingredient"
  },
  {
    "type": "get",
    "url": "api/ingredient/:id",
    "title": "Zutat anhand der ID abrufen",
    "name": "get",
    "group": "Ingredient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Information über Zutat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"__v\": 0,\n    \"name\": \"testburger\",\n    \"price\": 1,\n    \"_id\": \"5b0b29207ace7956a02f8af8\",\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Ingredient"
  },
  {
    "type": "get",
    "url": "api/ingredient",
    "title": "Abfrage aller Zutaten",
    "name": "getAll",
    "group": "Ingredient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ingredientList",
            "description": "<p>Liste aller Zutaten</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"_id\": \"5a578d9c4b60aa2bdb0f7345\",\n      \"name\": \"Brötchen\",\n      \"category\": \"Brot\",\n      \"price\": 1,\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5a578db54b60aa2bdb0f7346\",\n      \"name\": \"Rindfleisch\",\n      \"category\": \"Fleisch\",\n      \"price\": 1,\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5a578dcc4b60aa2bdb0f7347\",\n      \"name\": \"Hähnchen\",\n      \"category\": \"Fleisch\",\n      \"price\": 1,\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Ingredient"
  },
  {
    "type": "post",
    "url": "api/burger?token",
    "title": "Burger hinzufügen",
    "name": "insert",
    "group": "Ingredient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID des Burgers - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Information über Zutat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"_id\": \"5a578dcc4b60aa2bdb0f7347\",\n      \"name\": \"Hähnchen\",\n      \"category\": \"Fleisch\",\n      \"price\": 1,\n      \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Ingredient"
  },
  {
    "type": "PUT",
    "url": "api/ingredient/:id?token",
    "title": "Burger anhand der ID verändern",
    "name": "update",
    "group": "Ingredient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name des Burgers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Preis des Burgers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Kategorie der Zutat</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingredient",
            "description": "<p>Imformation über Zutat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a578dcc4b60aa2bdb0f7347\",\n    \"name\": \"Hähnchen\",\n    \"category\": \"Fleisch\",\n    \"price\": 1,\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Ingredient"
  },
  {
    "type": "get",
    "url": "api/orders/count",
    "title": "Anzahl der Bestellungen",
    "name": "count",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Anzahl der Bestellungen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n2",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "api/order/:id?token",
    "title": "Burger anhand der ID löschen",
    "name": "delete",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Bestellinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2df13e5e93f94174729986\",\n    \"name\": \"cheese\",\n    \"address\": {\n        \"_id\": \"5a2dcbea6c12b1493c71852e\",\n        \"street\": \"Butjadinger Str.\",\n        \"houseNumber\": \"61\",\n        \"location\": \"Nordenham\",\n        \"__v\": 0\n    },\n    \"price\": 15,\n    \"__v\": 0,\n    \"dishes\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "api/order/:id",
    "title": "Bestellung anhand der ID abrufen",
    "name": "get",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Bestellinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2df13e5e93f94174729986\",\n    \"name\": \"cheese\",\n    \"address\": {\n        \"_id\": \"5a2dcbea6c12b1493c71852e\",\n        \"street\": \"Butjadinger Str.\",\n        \"houseNumber\": \"61\",\n        \"location\": \"Nordenham\",\n        \"__v\": 0\n    },\n    \"price\": 15,\n    \"__v\": 0,\n    \"dishes\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "api/orders",
    "title": "Abfrage aller Burger",
    "name": "getAll",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderList",
            "description": "<p>Liste aller Bestllungen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5a2df13e5e93f94174729986\",\n        \"name\": \"cheese\",\n        \"address\": {\n            \"_id\": \"5a2dcbea6c12b1493c71852e\",\n            \"street\": \"Butjadinger Str.\",\n            \"houseNumber\": \"61\",\n            \"location\": \"Nordenham\",\n            \"__v\": 0\n        },\n        \"price\": 15,\n        \"__v\": 0,\n        \"dishes\": []\n    },\n    {\n        \"_id\": \"5a2df6680c08df280c8b1c9c\",\n        \"name\": \"cheese\",\n        \"address\": {\n            \"_id\": \"5a2dcbea6c12b1493c71852e\",\n            \"street\": \"Butjadinger Str.\",\n            \"houseNumber\": \"61\",\n            \"location\": \"Nordenham\",\n            \"__v\": 0\n        },\n        \"price\": 15,\n        \"__v\": 0,\n        \"dishes\": []\n    },\n    {\n        \"_id\": \"5a2df7a6e41dd74128953bac\",\n        \"name\": \"cheese\",\n        \"address\": {\n            \"_id\": \"5a2dcbea6c12b1493c71852e\",\n            \"street\": \"Butjadinger Str.\",\n            \"houseNumber\": \"61\",\n            \"location\": \"Nordenham\",\n            \"__v\": 0\n        },\n        \"price\": 15,\n        \"__v\": 0,\n        \"dishes\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "api/order?token",
    "title": "Bestellung hinzufügen",
    "name": "insert",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name des Benutzers</p>"
          },
          {
            "group": "Parameter",
            "type": "Address",
            "optional": false,
            "field": "address",
            "description": "<p>Adresse des Benutzers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Preis der Bestellung</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dishes",
            "description": "<p>Liste von Gerichten</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burger",
            "description": "<p>Burgerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2df13e5e93f94174729986\",\n    \"name\": \"cheese\",\n    \"address\": {\n        \"_id\": \"5a2dcbea6c12b1493c71852e\",\n        \"street\": \"Butjadinger Str.\",\n        \"houseNumber\": \"61\",\n        \"location\": \"Nordenham\",\n        \"__v\": 0\n    },\n    \"price\": 15,\n    \"__v\": 0,\n    \"dishes\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Order"
  },
  {
    "type": "PUT",
    "url": "api/order/:id?token",
    "title": "Bestellung anhand der ID verändern",
    "name": "update",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name des Benutzers</p>"
          },
          {
            "group": "Parameter",
            "type": "Address",
            "optional": false,
            "field": "address",
            "description": "<p>Adresse des Benutzers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Preis der Bestellung</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dishes",
            "description": "<p>Liste von Gerichten</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Bestellinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a2df13e5e93f94174729986\",\n    \"name\": \"cheese\",\n    \"address\": {\n        \"_id\": \"5a2dcbea6c12b1493c71852e\",\n        \"street\": \"Butjadinger Str.\",\n        \"houseNumber\": \"61\",\n        \"location\": \"Nordenham\",\n        \"__v\": 0\n    },\n    \"price\": 15,\n    \"__v\": 0,\n    \"dishes\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "api/side-dishes/count",
    "title": "Anzahl der Beilagen",
    "name": "count",
    "group": "Side_Dish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Anzahl der Beilagen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n2",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Side_Dish"
  },
  {
    "type": "delete",
    "url": "api/side-dish/:id?token",
    "title": "Beilage anhand der ID löschen",
    "name": "delete",
    "group": "Side_Dish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side-dish",
            "description": "<p>Informationen zur Beilage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a60cc130d2b0fa37cfc6753\",\n    \"name\": \"Pommes\",\n    \"price\": 1,\n    \"__v\": 0,\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Side_Dish"
  },
  {
    "type": "get",
    "url": "api/side-dish/:id",
    "title": "Beilage anhand der ID abrufen",
    "name": "get",
    "group": "Side_Dish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side-dish",
            "description": "<p>Informationen zur Beilage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a60cc130d2b0fa37cfc6753\",\n    \"name\": \"Pommes\",\n    \"price\": 1,\n    \"__v\": 0,\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Side_Dish"
  },
  {
    "type": "get",
    "url": "api/side-dishes",
    "title": "Abfrage aller Beilagen",
    "name": "getAll",
    "group": "Side_Dish",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side-dishList",
            "description": "<p>Liste aller Beilagen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5a60cc130d2b0fa37cfc6753\",\n        \"name\": \"Pommes\",\n        \"price\": 1,\n        \"__v\": 0,\n        \"ingredients\": []\n    },\n    {\n        \"_id\": \"5a6364c7aa0e6e1a3dd78e68\",\n        \"name\": \"Nuggets\",\n        \"price\": 1,\n        \"__v\": 0,\n        \"ingredients\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Side_Dish"
  },
  {
    "type": "post",
    "url": "api/side-dish?token",
    "title": "Beilage hinzufügen",
    "name": "insert",
    "group": "Side_Dish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID der Beilage - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side-dish",
            "description": "<p>Informationen zur Beilage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a60cc130d2b0fa37cfc6753\",\n    \"name\": \"Pommes\",\n    \"price\": 1,\n    \"__v\": 0,\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Side_Dish"
  },
  {
    "type": "PUT",
    "url": "api/side-dish/:id?token",
    "title": "Beilage anhand der ID verändern",
    "name": "update",
    "group": "Side_Dish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name de Beilage</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Preis der Beilage</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Zutaten der Beilage</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "side-dish",
            "description": "<p>Informationen zur Beilage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5a60cc130d2b0fa37cfc6753\",\n    \"name\": \"Pommes\",\n    \"price\": 1,\n    \"__v\": 0,\n    \"ingredients\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthenticationFail",
            "description": "<p>Authentifizierung schlug fehl</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{\n  \"title\": \"Not Authenticated\",\n  \"error\": {\n      \"name\": \"JsonWebTokenError\",\n      \"message\": \"jwt must be provided\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "Side_Dish"
  },
  {
    "type": "post",
    "url": "api/users/count",
    "title": "Anzahl der registrierten Benutzer",
    "name": "count",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>Anzahl der registrierten Benutzer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n2",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/user/:id",
    "title": "Benutzer löschen",
    "name": "delete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID des Benutzers - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Benutzerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nOK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/:id",
    "title": "Benutzer abfragen",
    "name": "get",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID des Benutzers - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Benutzerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"_id\": \"5a74c986cb7ba72ddce2ac5a\",\n     \"username\": \"knq\",\n     \"email\": \"test@test.com\",\n     \"role\": \"admin\",\n     \"__v\": 0,\n     \"address\": {\n         \"email\": \"test@test.com\",\n         \"plz\": \"26954\",\n         \"town\": \"Nordenham\",\n         \"houseNumber\": \"2\",\n         \"street\": \"Butjadinger Str.\",\n         \"firstName\": \"aaaaaaaaa\",\n         \"name\": \"Wanninger\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoUserFound",
            "description": "<p>Es konnte kein Benutzer mit dieser ID gefunden werden</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\nBad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "Rückgabe aller Benutzer",
    "name": "getAll",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user",
            "description": "<p>Liste aller Benutzer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n     \"username\": \"test\",\n     \"email\": \"test@test.de\",\n     \"address\": {\n         \"name\": \"Mustermann\",\n         \"firstName\": \"Max\",\n         \"street\": \"Test Str.\",\n         \"houseNumber\": \"20\",\n         \"town\": \"Nordenham\",\n         \"plz\": \"26954\",\n         \"email\": \"test@test.de\"\n      }\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user",
    "title": "Benutzer hinzufügen",
    "name": "insert",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Benutzername - Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passwort - Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail - Required</p>"
          },
          {
            "group": "Parameter",
            "type": "Address",
            "optional": false,
            "field": "address",
            "description": "<p>Adresse des Benutzers</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Benutzerinformationen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"_id\": \"5a74c986cb7ba72ddce2ac5a\",\n     \"username\": \"knq\",\n     \"email\": \"test@test.com\",\n     \"role\": \"admin\",\n     \"__v\": 0,\n     \"address\": {\n         \"email\": \"test@test.com\",\n         \"plz\": \"26954\",\n         \"town\": \"Nordenham\",\n         \"houseNumber\": \"2\",\n         \"street\": \"Butjadinger Str.\",\n         \"firstName\": \"aaaaaaaaa\",\n         \"name\": \"Wanninger\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreationFailed",
            "description": "<p>Benutzer konnte nicht erstellt werden</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\nBad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/login",
    "title": "Benutzer Anmeldung",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Benutzername - Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passwort - Required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token zum verifizieren von Benutzern.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"tokenstring\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginFailed",
            "description": "<p>Der Login ist fehlgeschlagen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Not Found\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/user/:id",
    "title": "Benutzerdaten verändern",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Benutzername - Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Benutzerrolle (Admin | User)</p>"
          },
          {
            "group": "Parameter",
            "type": "Address",
            "optional": false,
            "field": "address",
            "description": "<p>Adresse des Benutzers</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nOK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/knq/Documents/bachelorarbeit/burger-app/server/routes.ts",
    "groupTitle": "User"
  }
] });
