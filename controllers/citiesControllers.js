import City from '../models/City.js';

const citiesControllers = {
    createCity: async (req, res, next) => {
        let newCity;
        
        try {
            newCity = await City.create(req.body);

            res.json({
                success: true,
                response: newCity
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
            next(err);
        }
    },
    getAllCities: async (req, res, next) => {
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
            .skip(pagination.page > 0 ? (pagination.page-1)*pagination.items : 0);

            countDoc = await City.countDocuments()
            countDoc = Math.ceil(countDoc / pagination.items);
            
            res.json({
                success: true,
                count: countDoc,
                response: resCities
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
            next(err);
        }
    },
    getCityById: async (req, res, next) => {
        let resCity;
        const {id} = req.params;

        try {
            resCity = await City.findById(id);
            res.json({
                success: true,
                response: resCity
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
            next(err);
        }
    },
    updateCityById: async (req, res, next) => {
        let updateCity;
        const {id} = req.params;

        try {
            updateCity = await City.findByIdAndUpdate({_id: id}, req.body, {new: true});
            
            res.json({
                success: true,
                response: updateCity
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
            next(err);
        }
    },
    deleteCityById: async (req, res, next) => {
        let deleteCity;
        const {id} = req.params;

        try {
            deleteCity = await City.findByIdAndDelete({_id: id});
            
            res.json({
                success: true,
                response: deleteCity
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
            next(err);
        }
    }
};

export default citiesControllers;