const Tour = require("../model/Tour");


exports.postTourService = async (data) => {
    const tourPost = await Tour.create(data)
}