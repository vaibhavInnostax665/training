import express from "express";
import { getAllController,deleteController,updateController,partiallyUpdateController,addController,getByIdController } from "../../controllers/user/user.controller.js";

const router = express.Router();

router.get('/',getAllController);
router.get('/:id',getByIdController);
router.post('/add',addController);
router.patch('/:id/partial_update',partiallyUpdateController);
router.put('/:id?/update_user',updateController);
router.delete('/:id/delete_user',deleteController)

export default router;