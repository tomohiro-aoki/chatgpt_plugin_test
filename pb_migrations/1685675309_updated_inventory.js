migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh")

  // update
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh")

  // update
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
        "product",
        "material"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
