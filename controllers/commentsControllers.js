import { createComment, getAllComments, getCommentById, updateCommentById, deleteCommentById } from '../services/commentsServices.js';

const commentsControllers = {
    createComment,
    
    getAllComments,

    getCommentById,

    updateCommentById,

    deleteCommentById
};

export default commentsControllers;