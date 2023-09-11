import { createItinerary, getAllItineraries, getItineraryById, updateItineraryById, deleteItineraryById, likes } from '../services/itinerariesServices.js'

const itinerariesControllers = {
    createItinerary,

    getAllItineraries,

    getItineraryById,

    updateItineraryById,

    deleteItineraryById,

    likes
};

export default itinerariesControllers;