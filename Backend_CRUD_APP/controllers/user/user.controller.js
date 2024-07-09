import add from "../../service/controllerLogic/add.js";
import catchLogic from "../../service/controllerLogic/catchLogic.js";
import deletion from "../../service/controllerLogic/deletion.js";
import fetchAll from "../../service/controllerLogic/fetchAll.js";
import fetchById from "../../service/controllerLogic/fetchById.js";
import partialUpdate from "../../service/controllerLogic/partialUpdate.js";
import update from "../../service/controllerLogic/update.js";

const catchResult = catchLogic();
export const getAllController = (req, res) => {
  try {
    const result = fetchAll();
    return res.status(result.status).json({
      message: result.message,
      data: result.data,
    });
  } catch {
    return res.status(catchResult.status).json({
        message: catchResult.message,
        data: catchResult.data,
      });
  }
};

export const getByIdController = (req, res) => {
  try {
    const result = fetchById(parseInt(req.params.id));
    return res.status(result.status).json({
      message: result.message,
      data: result.data,
    });
  } catch {
    return res.status(catchResult.status).json({
        message: catchResult.message,
        data: catchResult.data,
      });
  }
};

export const addController = (req, res) => {
  try {
    const result = add(req.body);
    return res.status(result.status).json({
      message: result.message,
      data: result.data,
    });
  } catch {
    return res.status(catchResult.status).json({
        message: catchResult.message,
        data: catchResult.data,
      });
  }
};

export const partiallyUpdateController = (req, res) => {
  try {
    const result = partialUpdate(parseInt(req.params.id), req.body);
    return res.status(result.status).json({
      message: result.message,
      data: result.data,
    });
  } catch {
    return res.status(catchResult.status).json({
        message: catchResult.message,
        data: catchResult.data,
      });
  }
};

export const updateController = (req, res) => {
  try {
    const result = update(parseInt(req.params.id), req.body);
    return res.status(result.status).json({
      message: result.message,
      data: result.data,
    });
  } catch {
    return res.status(catchResult.status).json({
        message: catchResult.message,
        data: catchResult.data,
      });
  }
};

export const deleteController = (req, res) => {
  try {
    const result = deletion(parseInt(req.params.id));
    return res.status(result.status).json({
      message: result.message,
      data: result.data,
    });
  } catch {
    return res.status(catchResult.status).json({
        message: catchResult.message,
        data: catchResult.data,
      });
  }
};
