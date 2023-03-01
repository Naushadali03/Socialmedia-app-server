const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://Shaikh221:pA4GmPv1H9229ELM@cluster0.hrqz9bf.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};