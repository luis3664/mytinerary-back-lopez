import { createCity, getAllCities, getCityById, updateCityById, deleteCityById } from '../services/citiesServices.js'

const citiesControllers = {
    createCity,

    getAllCities,

    getCityById,

    updateCityById,

    deleteCityById
};

export default citiesControllers;