import mongoose, { Schema } from "mongoose";


const splitRuleSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
   divideByProportion : {
       type:Number,
  },
  divideByratio:{
    type : Number,

  },
  
});

export const SplitRule = mongoose.model("SplitRule", splitRuleSchema);