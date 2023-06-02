migrate((db) => {
  const collection = new Collection({
    "id": "fcz97dfv0el2pqu",
    "created": "2023-06-02 03:32:09.558Z",
    "updated": "2023-06-02 03:32:09.558Z",
    "name": "arrival",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cqjquea7",
        "name": "inventory_name",
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
        "id": "riqsonpu",
        "name": "count",
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
        "id": "whyydyjy",
        "name": "arrival_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("fcz97dfv0el2pqu");

  return dao.deleteCollection(collection);
})
