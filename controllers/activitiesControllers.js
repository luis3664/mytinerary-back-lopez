import { createActivity, getAllActivitiesByItinerary, getActivityById, updateActivityById, deleteActivityById } from '../services/activitiesServices.js'

const activitiesControllers = {
    createActivity,

    getAllActivitiesByItinerary,

    getActivityById,

    updateActivityById,

    deleteActivityById
};

export default activitiesControllers;