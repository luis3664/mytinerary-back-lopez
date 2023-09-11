import Itinerary from '../models/Itinerary.js';
import City from '../models/City.js';
import Comment from '../models/Comment.js';
import Activity from '../models/Activity.js';

export async function createItinerary(req, res, next) {
    let newItinerary;

    try {
        if (req.body.city) {
            newItinerary = await Itinerary.create(req.body);

            await City.findByIdAndUpdate({ _id: newItinerary.city }, { $push: { itineraries: newItinerary._id } });

            res.json({
                success: true,
                response: newItinerary
            });
        } else {
            res.json({
                success: false,
                response: 'The ID of the city to which the itinerary belongs is required'
            });
        }
    } catch (err) {
        next(err);
    };
};

export async function getAllItineraries(req, res, next) {
    let resItineraries;
    let queries = {};
    let city = '';

    if (req.query.userName) { queries.userName = { $regex: new RegExp('^' + req.query.userName.trim(), 'i') } };
    if (req.query.city) { city = req.query.city };

    try {
        resItineraries = await Itinerary.find(queries).populate([
            {
                path: 'city',
                select: 'name'
            }, {
                path: 'comments'
            }, {
                path: 'activities'
            }
        ]);

        if (city) {
            resItineraries = resItineraries.filter(itinerary => itinerary.city.name.trim().toLowerCase().startsWith(city.trim().toLowerCase()));
            if (resItineraries.length == 0) {
                res.json({
                    success: false,
                    response: `Itineraries with the city keyword ${city} could not be found.`
                })
                throw error;
            }
        };

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
        resItinerary = await Itinerary.findById(id).populate({
            path: 'city',
            select: 'name'
        });

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
        deleteItinerary = await Itinerary.findByIdAndDelete({ _id: id }).populate([
            {
                path: 'comments',
                select: 'userName'
            }, {
                path: 'activities',
                select: 'name'
            }
        ]);

        if (deleteItinerary.comments.length > 0) {
            deleteItinerary.comments.forEach(async (element) => {
                await Comment.findByIdAndDelete(element._id);
            });
        };

        if (deleteItinerary.activities.length > 0) {
            deleteItinerary.activities.forEach(async (element) => {
                await Activity.findByIdAndDelete(element._id);
            });
        };

        await City.findByIdAndUpdate({ _id: deleteItinerary.city }, { $pull: { itineraries: deleteItinerary._id } });

        res.json({
            success: true,
            response: deleteItinerary
        });
    } catch (err) {
        next(err);
    };
};

export async function likes(req, res, next) {
    let likes;
    let refItinerary;
    const { id } = req.params;
    const { _id: userId } = req.user;

    try {
        refItinerary = await Itinerary.findById(id);

        let ref = refItinerary.likes.includes(userId);

        if (ref) {
            refItinerary = await Itinerary.findByIdAndUpdate({ _id: id }, { $pull: { likes: userId } });
        } else {
            refItinerary = await Itinerary.findByIdAndUpdate({ _id: id }, { $push: { likes: userId } });
        }

        likes = refItinerary.likes;

        res.json({
            success: true,
            response: likes
        });
    } catch (err) {
        next(err);
    };
};