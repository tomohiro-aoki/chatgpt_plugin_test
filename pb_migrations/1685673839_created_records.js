migrate((db) => {
  const collection = new Collection({
    "id": "1m69z3tebcabhoh",
    "created": "2023-06-02 02:43:59.944Z",
    "updated": "2023-06-02 02:43:59.944Z",
    "name": "records",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t7vfu30s",
        "name": "series",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6vi7dsih",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tdz1fjya",
        "name": "jancode",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5tx6hkrq",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "product",
            "material"
          ]
        }
      },
      {
        "system": false,
        "id": "vihvzri5",
        "name": "count",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh");

  return dao.deleteCollection(collection);
})
