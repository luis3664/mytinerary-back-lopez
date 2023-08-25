import Comment from '../models/Comment.js'

export async function createComment(req, res, next) {
    let newComment;
    
    try {
        newComment = await Comment.create(req.body);

        res.json({
            success: true,
            response: newComment
        });
    } catch (err) {
        next(err);
    };
};

export async function getAllCommentsByItinerary(req, res, next) {
    let resComments;
    const { name } = req.query.name;

    try {
        resComments = await Comment.find().populate({
            path: 'itinerary',
            match: name
        });

        res.json({
            success: true,
            response: resComments
        });
    } catch (err) {
        next(err);
    };
};

export async function getCommentById(req, res, next) {
    let resComment;
    const { id } = req.params;

    try {
        resComment = Comment.findById(id);

        res.json({
            success: true,
            response: resComment
        });
    } catch (err) {
        next(err);
    };
};

export async function updateCommentById(req, res, next) {
    let updateComment;
    const {id} = req.params;

    try {
        updateComment = await Comment.findByIdAndUpdate({_id: id}, req.body, {new: true});
        
        res.json({
            success: true,
            response: updateComment
        });
    } catch (err) {
        next(err);
    };
};

export async function deleteCommentById(req, res, next) {
    let deleteComment;
    const {id} = req.params;

    try {
        deleteComment = await Comment.findByIdAndDelete({_id: id});
        
        res.json({
            success: true,
            response: deleteComment
        });
    } catch (err) {
        next(err);
    };
}