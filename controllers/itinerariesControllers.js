import { createItinerary, getAllItineraries, getAllItinerariesByCity, getItineraryById, updateItineraryById, deleteItineraryById } from '../services/itinerariesServices.js'

const itinerariesControllers = {
    createItinerary,

    getAllItineraries,

    getAllItinerariesByCity,

    getItineraryById,

    updateItineraryById,

    deleteItineraryById
};

export default itinerariesControllers;