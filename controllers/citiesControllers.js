import { createCity, getAllCities, getCityById, updateCityById, deleteCityById, createAllCities } from '../services/citiesServices.js'

const citiesControllers = {
    createCity,

    getAllCities,

    getCityById,

    updateCityById,

    deleteCityById,

    createAllCities
};

export default citiesControllers;