migrate((db) => {
  const collection = new Collection({
    "id": "dk1f6x6ykoym0io",
    "created": "2023-06-02 03:30:39.685Z",
    "updated": "2023-06-02 03:30:39.685Z",
    "name": "shipment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "glhidbxr",
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
        "id": "pxujzw2v",
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
        "id": "nhwrhsah",
        "name": "shipment_date",
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
  const collection = dao.findCollectionByNameOrId("dk1f6x6ykoym0io");

  return dao.deleteCollection(collection);
})
