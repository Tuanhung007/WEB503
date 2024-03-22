import express from "express"
import CarController from "../Controller/car.js";
const carRouter = express.Router()

const carController = new CarController();

carRouter.get('/', carController.getAllCar);
carRouter.get('/:id', carController.getCarDetail);
carRouter.post('/', carController.creatCar);
carRouter.put('/:id', carController.updateCar);
carRouter.delete('/:id', carController.deleteCar);
// console.log("nlanal")

export default carRouter