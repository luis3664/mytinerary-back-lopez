import { createItinerary, getAllItineraries, getItineraryById, updateItineraryById, deleteItineraryById } from '../services/itinerariesServices.js'

const itinerariesControllers = {
    createItinerary,

    getAllItineraries,

    getItineraryById,

    updateItineraryById,

    deleteItineraryById
};

export default itinerariesControllers;