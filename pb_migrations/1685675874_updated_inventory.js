migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh")

  // remove
  collection.schema.removeField("5tx6hkrq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5tx6hkrq",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "商品",
        "資材備品"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
