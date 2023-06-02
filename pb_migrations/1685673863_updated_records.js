migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh")

  collection.name = "inventory"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1m69z3tebcabhoh")

  collection.name = "records"

  return dao.saveCollection(collection)
})
