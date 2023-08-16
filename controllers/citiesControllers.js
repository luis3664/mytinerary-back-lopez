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
        try {
            resCities = await City.find();
            
            res.json({
                success: true,
                response: resCities
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
        }
    },
    getCityById: async (req, res, next) => {
        let resCity;
        const {id} = req.params;

        try {
            resCity = await City.findById(id);
            console.log(resCity);
            res.json({
                success: true,
                response: resCity
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
                response: resCity
            });
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
                response: updateCity
            });
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
                response: deleteCity
            });
        }
    }
};

export default citiesControllers;