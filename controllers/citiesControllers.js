import { createCity, getAllCities, getCityById, updateCityById, deleteCityById } from '../services/citiesService.js'

const citiesControllers = {
    createCity,

    getAllCities,

    getCityById,

    updateCityById,

    deleteCityById
};

export default citiesControllers;