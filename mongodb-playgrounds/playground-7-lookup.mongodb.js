use("test")
db.rooms.insertMany([
    { roomName: "Sea View Room", type: "Premium" },
    { roomName: "Sea View Room", type: "Luxury" },
    { roomName: "Garden View Room", type: "Standard" }
])

db.islandreviews.aggregate([
    {
        $lookup: {
            from: "rooms",
            localField: "room",
            foreignField: "roomName",
            as: "room_details"
        }
    }
])