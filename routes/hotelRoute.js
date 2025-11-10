import { Router } from "express";
import { addHotel, getAllHotels, getHotelById, getHotelByLocation, getHotelByName } from "../controllers/HotelController.js";
import verify from "../middleware/verify_Token.js";

import passport from "passport"

const hotel = Router();


hotel.get('/hotel',passport.authenticate('jwt', { session: false }),getAllHotels);

hotel.get('/hotels/:city',verify,getHotelByLocation);

hotel.post('/hotel',verify,addHotel);

hotel.post('/hotelName',verify,getHotelByName);

hotel.get('/hotel/:hotelId',verify,getHotelById);

export default hotel;