module.exports = {
    mutipleMongooseToObject:function (mongooseArrays){
        return mongooseArrays.map(e=>e.toObject())
    },
    mongooseToObject:function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}