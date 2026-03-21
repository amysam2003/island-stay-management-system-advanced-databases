use("test")
db.islandreviews.aggregate([
    { $group: { _id: null, totalReviews: { $sum: 1 } } }
])