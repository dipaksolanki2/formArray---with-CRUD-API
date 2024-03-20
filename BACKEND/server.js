const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students.route')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/SCHOOL-TASK', {})
    .then(() => console.log('DB Connected'))
    .catch(err => console.console.log(err))

    const routes = [
        ...studentRoutes
    ]

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
