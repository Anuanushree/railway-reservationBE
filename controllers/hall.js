const Hall = require('../model/hall');
const User = require('../model/user');
const Booking = require('../model/booking');
const hallcontroller = {
    createHall: async (request, response) => {
        try {
            const { seat, hallName, price, phn, amenties } = request.body;
            const userId = request.userId;
            const user = await User.findById(userId);

            const hall = new Hall({
                seat,
                hallName,
                price,
                phn,
                amenties
            });
            const newdata = await hall.save();
            user.data = user.data.concat(newdata._id);

            await user.save();
            response.json({ message: "data saved successfully" });

        } catch (error) {
            console.log("error in save hall data :", error);
            response.status(404).json({ error: "error in save hall data" });
        }
    },
    list: async (request, response) => {
        try {
            const hall = await Hall.find({}, {});
            response.send(hall)
        } catch (error) {
            response.status(404).json({ error: "Error in getting list " })
            console.log("Error in getting list :", error);
        }
    },

    booking: async (request, response) => {
        try {
            const { customerName, startDate, endDate, room, hallId } = request.body;
            const userId = request.userId
            console.log("hall id :", hallId)
            const user = await Hall.findById(hallId);

            const booking = new Booking({
                customerName,
                startDate,
                endDate,
                room
            });
            const newdata = await booking.save();
            user.status = "Booked";

            await user.save();
            response.json({ message: "data saved successfully" });

        } catch (error) {
            console.log("error in save booking data :", error);
            response.status(404).json({ error: "error in save booking data" });
        }
    },
    bookinglist: async (request, response) => {
        try {
            const booking = await Booking.find({}, {});
            response.send(booking)
        } catch (error) {
            response.status(404).json({ error: "Error in getting booking list " })
            console.log("Error in getting booking list :", error);
        }
    },


}

module.exports = hallcontroller;
