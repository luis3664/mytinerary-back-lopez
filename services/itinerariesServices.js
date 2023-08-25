import Itinerary from '../models/Itinerary.js';
import City from '../models/City.js';

export async function createItinerary(req, res, next) {
    let newItinerary;
    let city;

    try {
        newItinerary = await Itinerary.create(req.body);

        city = await City.findById({ _id: newItinerary.city });

        city.itineraries.push(newItinerary._id);

        await City.updateOne(city);

        res.json({
            success: true,
            response: newItinerary
        });
    } catch (err) {
        next(err);
    };
};

export async function getAllItineraries(req, res, next) {
    let resItineraries;
    let queries = {};

    if (req.query.userName) { queries.userName = req.query.userName };
    if (req.query.city) { queries.name = req.query.city };

    try {
        resItineraries = await Itinerary.find().populate({
            path: 'city',
            select: 'name'
        });

        res.json({
            success: true,
            response: resItineraries
        });
    } catch (err) {
        next(err);
    };
};

export async function getAllItinerariesByCity(req, res, next) {
    let resItineraries;
    
    try {
        resItineraries = await Itinerary.find().populate('city');

        res.json({
            success: true,
            response: resItineraries
        });
    } catch (err) {
        next(err);
    };
};

export async function getItineraryById(req, res, next) {
    let resItinerary;
    const { id } = req.params;

    try {
        resItinerary = Itinerary.findById(id);

        res.json({
            success: true,
            response: resItinerary
        });
    } catch (err) {
        next(err);
    };
};

export async function updateItineraryById(req, res, next) {
    let updateItinerary;
    const { id } = req.params;

    try {
        updateItinerary = await Itinerary.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        res.json({
            success: true,
            response: updateItinerary
        });
    } catch (err) {
        next(err);
    };
};

export async function deleteItineraryById(req, res, next) {
    let deleteItinerary;
    const { id } = req.params;

    try {
        deleteItinerary = await Itinerary.findByIdAndDelete({ _id: id });

        res.json({
            success: true,
            response: deleteItinerary
        });
    } catch (err) {
        next(err);
    };
}