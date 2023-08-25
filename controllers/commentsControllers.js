import { createComment, getAllCommentsByItinerary, getCommentById, updateCommentById, deleteCommentById } from '../services/commentsServices.js';

const commentsControllers = {
    createComment,
    
    getAllCommentsByItinerary,

    getCommentById,

    updateCommentById,

    deleteCommentById
};

export default commentsControllers;