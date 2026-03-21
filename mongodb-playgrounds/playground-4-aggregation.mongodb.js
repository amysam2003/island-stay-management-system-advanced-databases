use("test")
db.islandreviews.aggregate([
    { $group: { _id: "$room", averageRating: { $avg: "$rating" } } }
])