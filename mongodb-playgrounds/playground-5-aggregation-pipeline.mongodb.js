use("test")
db.islandreviews.aggregate([
    { $match: { rating: { $gte: 4 } } },
    { $group: { _id: "$room", totalReviews: { $sum: 1 } } },
    { $sort: { totalReviews: -1 } }
])