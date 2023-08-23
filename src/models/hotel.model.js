const mongoose = require("mongoose");

const hotelSchema= new mongoose.Schema(
    {
        hotel_name:{
            type:String,
            trim:true,
        },
        hotel_location:{
            type:String,
            trim:true,
        },
        contact_number:{
            type:Number,
        },
        room_no:{
            type:Number,
            trim:true
        },
        room_type:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            default:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const hotel=mongoose.model("hotel",hotelSchema);
module.exports=hotel;