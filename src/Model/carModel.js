import mongoose from "mongoose";
const Schema = mongoose.Schema

const carSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        min: 1,
        max: 10,
        default: 5

    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
}, {
    timeseries: true, versionKey: false
}


)
const car = mongoose.model("cars", carSchema);
export default car