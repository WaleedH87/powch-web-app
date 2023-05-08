// Imports and exports the CRUD controller. This is a bit hacky but I'm going to keep it in sync with the code

import express from "express";

// Import all controllers
import { 
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty
 } from "../controllers/property.controller.js";


// Express router created for each controller
const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;