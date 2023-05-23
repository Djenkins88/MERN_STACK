const mongoose = require('mongoose');

mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://localhost/MERNSTACK',
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("DB connection Successfull"))
    .catch((err) => console.log(err))

    module.exports = mongoose.connection;