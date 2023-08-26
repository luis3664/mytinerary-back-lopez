import Activity from "../models/Activity.js"
import Itinerary from "../models/Itinerary.js";

export async function createActivity(req, res, next) {
    let newActivity;

    try {
        newActivity = await Activity.create(req.body);

        await Itinerary.findByIdAndUpdate({ _id: newActivity.itinerary }, { $push: { activities: newActivity._id } });

        res.json({
            success: true,
            response: newActivity
        });
    } catch (err) {
        next(err);
    };
};

export async function getAllActivities(req, res, next) {
    let resActivities;
    let itineraryID;

    if (req.query.itineraryID) { itineraryID = req.query.itineraryID };

    try {
        resActivities = await Activity.find().populate({
            path: 'itinerary',
            select: 'userName city',
            populate: {
                path: 'city',
                select: 'name'
            }
        });

        if (itineraryID) {
            resActivities = resActivities.filter(activity => activity.itinerary._id == itineraryID);
            if (resActivities.length == 0) {
                res.json({
                    success: false,
                    response: 'A valid ID is required to filter.'
                })
                throw 'A valid ID is required to filter.';
            }
        };

        res.json({
            success: true,
            response: resActivities
        });
    } catch (err) {
        next(err);
    };
};

export async function getActivityById(req, res, next) {
    let resActivities;
    const { id } = req.params;

    try {
        resActivities = await Activity.findById(id).populate({
            path: 'itinerary',
            select: 'userName city',
            populate: {
                path: 'city',
                select: 'name'
            }
        });

        res.json({
            success: true,
            response: resActivities
        });
    } catch (err) {
        next(err);
    };
};

export async function updateActivityById(req, res, next) {
    let resActivities;
    const { id } = req.params;

    try {
        resActivities = await Activity.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        res.json({
            success: true,
            response: resActivities
        });
    } catch (err) {
        next(err);
    };
};

export async function deleteActivityById(req, res, next) {
    let deleteActivity;
    const { id } = req.params;

    try {
        deleteActivity = await Activity.findByIdAndDelete({ _id: id });

        await Itinerary.findByIdAndUpdate({ _id: deleteActivity.itinerary }, { $pull: { activities: deleteActivity._id } });

        res.json({
            success: true,
            response: deleteActivity
        });
    } catch (err) {
        next(err);
    };
}