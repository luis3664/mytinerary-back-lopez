import Activity from "../models/Activity.js"

export async function createActivity(req, res, next) {
    let newActivity;

    try {
        newActivity = await Activity.create(req.body);

        res.json({
            success: true,
            response: newActivity
        });
    } catch (err) {
        next(err);
    };
};

export async function getAllActivitiesByItinerary(req, res, next) {
    let resActivities;
    const { name } = req.query.name;

    try {
        resActivities = await Activity.find().populate({
            path: 'itinerary',
            match: name
        });

        res.json({
            success: true,
            response: resActivities
        });
    } catch (err) {
        next(err);
    };
};

export async function getActivityById(req, res, next) {
    let resActivity;
    const { id } = req.params;

    try {
        resActivity = Activity.findById(id);

        res.json({
            success: true,
            response: resActivity
        });
    } catch (err) {
        next(err);
    };
};

export async function updateActivityById(req, res, next) {
    let updateActivity;
    const { id } = req.params;

    try {
        updateActivity = await Activity.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        res.json({
            success: true,
            response: updateActivity
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

        res.json({
            success: true,
            response: deleteActivity
        });
    } catch (err) {
        next(err);
    };
}