import carRouter from "./cars.js"

export default function routes(app) {
    app.get('/', (req, res) => {
        res.send("homencd")
    });
    app.use('/car', carRouter)
}