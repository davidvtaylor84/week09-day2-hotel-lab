use hotel_bookings
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Ronnie Pickering",
        guestEmail: "doyouknowwhoiam@pickering.com",
        checkedIn: false
    },
    {
        guestName: "Jimmy Dunderhead",
        guestEmail: "dunderheadj1@gmail.com",
        checkedIn: true
    },
    {
        guestName: "The late Abraham Lincoln",
        guestEmail: "fourscoreandsevenyear@vampirehunter.com",
        checkedIn: false
    }
])