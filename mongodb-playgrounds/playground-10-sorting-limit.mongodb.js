use("test")
db.islandreviews.aggregate([
    { $sort: { rating: -1 } },
    { $limit: 3 }
])