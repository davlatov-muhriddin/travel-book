const Travel = require("../models/Travel.model");

// method: get
// descr: get all travel books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "success",
      travels: travels.reverse(),
    });
  } catch (error) {
    res.send(error);
  }
};

// method: get
// descr: get one travel book by id

const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json({
      message: "Success",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

// method: post
// descr: add travel book

const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const newTravel = await Travel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

// method: put
// descr: edit travel book by it is id

const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });

    res.status(200).json({
      message: "Success",
      updatedTravel,
    });
  } catch (error) {}
};

// method: delete
// descr: removing travel book by id

const removeTravelBook = async (req, res) => {
  try {
    await Travel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {}
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
};
