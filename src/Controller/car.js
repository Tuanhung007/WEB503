import car from "../Model/carModel.js"
class CarController {
    async getAllCar(req, res) {
        try {
            const a = await car.find();
            res.status(200).json({
                message: "Get all car done",
                data: a
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
        console.log("all")
    }

    async getCarDetail(req, res) {
        try {
            const a = await car.findById(req.params.id);
            if (!a) {
                return res.status(404).json({
                    message: "Car Not Found",
                });
            }
            res.status(200).json({
                message: "Get Car Detail Done",
                data: a,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async creatCar(req, res) {
        console.log(req.body);
        const a = await car.create(req.body);
        res.status(201).json({
            message: "Create Successfull",
            data: a,
        });
        // console.log("creat fall");
    }
    async updateCar(req, res) {
        try {
            const a = await car.findByIdAndUpdate(req.params.id, req.body);
            if (!a) {
                return res.status(404).json({
                    message: "cate Not Found",
                });
            }
            const updatecar = await car.findById(req.params.id);
            res.status(200).json({
                message: "Update cate Successfull",
                data: updatecar,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async deleteCar(req, res) {
        try {
            const cars = await car.findByIdAndDelete(req.params.id);
            if (!cars) {
                return res.status(404).json({
                    message: "Car Not Found",
                });
            }
            res.status(200).json({
                message: "Delete car Done",
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}
export default CarController