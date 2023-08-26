import City from "../models/City.js";
import { deleteItineraryById } from "./itinerariesServices.js";


//CRUD
export async function createCity(req, res, next) {
    let newCity;
    
    try {
        newCity = await City.create(req.body);

        res.json({
            success: true,
            response: newCity
        });
    } catch (err) {
        next(err);
    };
};

export async function getAllCities(req, res, next) {
    let resCities;
    let countDoc = 0;
    let queries = {};
    let pagination = {page: 1, items: 15};

    if (req.query.name) {queries.name = { $regex: new RegExp('^' + req.query.name.trim(), 'i') }};
    if (req.query.items) {pagination.items = req.query.items};
    if (req.query.page) {pagination.page = req.query.page};

    try {
        resCities = await City.find(queries)
        .limit(pagination.items > 0 ? pagination.items : 0)
        .skip(pagination.page > 0 ? (pagination.page-1)*pagination.items : 0)
        .populate({
            path: 'itineraries'
        });

        countDoc = await City.countDocuments()
        countDoc = Math.ceil(countDoc / pagination.items);
        
        res.json({
            success: true,
            count: countDoc,
            response: resCities
        });
    } catch (err) {
        next(err);
    };
};

export async function getCityById(req, res, next) {
    let resCity;
    const {id} = req.params;

    try {
        resCity = await City.findById(id).populate('itineraries');
        res.json({
            success: true,
            response: resCity
        });
    } catch (err) {
        next(err);
    };
};

export async function updateCityById(req, res, next) {
    let updateCity;
    const {id} = req.params;

    try {
        updateCity = await City.findByIdAndUpdate({_id: id}, req.body, {new: true});
        
        res.json({
            success: true,
            response: updateCity
        });
    } catch (err) {
        next(err);
    };
};

export async function deleteCityById(req, res, next) {
    let deleteCity;
    const {id} = req.params;

    try {
        deleteCity = await City.findByIdAndDelete(id).populate({
            path: 'itineraries',
            select: 'userName'
        });

        if (deleteCity.itineraries.length > 0) {
            deleteCity.itineraries.forEach((element) => {
                deleteItineraryById(req.params.id = element._id);
            });
        }
        
        res.json({
            success: true,
            response: deleteCity
        });
    } catch (err) {
        next(err);
    };
};

// Extra
export async function createAllCities(req, res, next) {
    let arrayCities;

    try {
        arrayCities = await City.insertMany(req.body);

        res.json({
            success: true,
            response: arrayCities
        });
    } catch (err) {
        next(err);
    }
};