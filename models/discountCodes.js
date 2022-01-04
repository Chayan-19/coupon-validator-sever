import mongoose from "mongoose";

const codeSchema = mongoose.Schema({
    code: String,
    type: String,
    startDate: String,
    endDate: String,
    maxDiscount: Number,
    minAmt: Number
});

const DiscountCodes = mongoose.model("DiscountCodes", codeSchema);
export default DiscountCodes;
