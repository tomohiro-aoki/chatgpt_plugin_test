migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcz97dfv0el2pqu")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcz97dfv0el2pqu")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
