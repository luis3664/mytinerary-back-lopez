import Country from '../models/Country.js'

export async function getAllCountries(req, res, next) {
    let resCountries;

    try {
        resCountries = await Country.find();

        res.json({
            success: true,
            response: resCountries
        });
    } catch (err) {
        next(err);
    };
};

export async function createAllCountries(req, res, next) {
    let arrayCountries;

    try {
        arrayCountries = await Country.insertMany(req.body);

        res.json({
            success: true,
            response: arrayCountries
        });
    } catch (err) {
        next(err);
    }
};