import DiscountCodes from "../models/discountCodes.js";

export const retrieveCodes = async (req, res) => {
    try {
        const couponCodes = await DiscountCodes.find();
        return res.status(200).json(couponCodes);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
  }

export const createCodes = async (req, res) => {
    const code = req.body?.discountCode;
    const newCode = new DiscountCodes(code);

    try {
        await newCode.save();
        return res.status(201).json(newCode);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}

export const queryCode = async(req, res) =>{
    const { code } = req.body;

    try {
        if(!code){
            return res.status(404).json({error: "Code not found"});
        }
        const check = await DiscountCodes.findOne({ code });
        return res.status(200).json({
            code: check.code,
            type: check.type,
            startDate: check.startDate,
            endDate: check.endDate,
            maxDiscount: check.maxDiscount,
            minAmt: check.minAmt
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}