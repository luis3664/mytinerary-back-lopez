import Comment from '../models/Comment.js'
import Itinerary from '../models/Itinerary.js';

export async function createComment(req, res, next) {
    let newComment;
    
    try {
        newComment = await Comment.create(req.body);

        await Itinerary.findByIdAndUpdate({ _id: newComment.itinerary }, { $push: { comments: newComment._id } });

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
    let queries = {};
    let itineraryID;

    if (req.query.itinerary) { itineraryID = req.query.itineraryID };
    if (req.query.userName) { queries.userName = req.query.userName };

    try {
        resComments = await Comment.find(queries).populate({
            path: 'itinerary',
            select: 'userName city'
        });

        if (itineraryID) {
            resComments = resComments.filter(comment => comment.itinerary._id == itineraryID);
            if (resComments.length == 0) {
                res.json({
                    success: false,
                    response: 'A valid ID is required to filter.'
                })
                throw 'A valid ID is required to filter.';
            }
        }

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

        await Itinerary.findByIdAndUpdate({ _id: deleteComment.itinerary }, { $pull: { comments: deleteComment._id } });
        
        res.json({
            success: true,
            response: deleteComment
        });
    } catch (err) {
        next(err);
    };
}