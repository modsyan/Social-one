const mongoose = require('mongoose');
const userModel = require('../model/userModel');

exports.getAllUser = async (req, res) => {
  const users = await userModel.find();
  try {
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOneUser = async (req, res) => {
  const user = userModel.find('req.param');
  try {
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json();
  }
};

exports.createUser = async (req, res) => {
  // needed to hangled more with logc like if
  // user sent list or one object
  const message = userModel.create(req.body);
  const user = userModel.find(req.body);
  try {
    res.status(200).json({
      status: 'success',
      message,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json();
  }
};

exports.updateOneUser = async (req, res) => {
  const message = userModel.updateOne(req.param, { $set: req.body });
  const user = userModel.findOne(req.body);
  try {
    res.status(200).json({
      status: 'success',
      message,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json();
  }
};

exports.updateAllUser = async (req, res) => {
  //needed more error handling here
  const message = userModel.updateMany(req.param, { $set: req.body });
  const users = userModel.find(req.body);
  try {
    res.status(200).json({
      status: 'success',
      message,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteUser = (req, res) => {
  // needed more handling here
  const message = req.body.all
    ? userModel.deleteMany(req.param)
    : userModel.deleteOne(req.param);
  try {
    res.status(200).json({
      status: 'success',
      message: message,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
