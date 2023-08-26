import { createActivity, getAllActivities, getActivityById, updateActivityById, deleteActivityById } from '../services/activitiesServices.js'

const activitiesControllers = {
    createActivity,

    getAllActivities,

    getActivityById,

    updateActivityById,

    deleteActivityById
};

export default activitiesControllers;