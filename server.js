const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dpconfig = require('./dp');
const usersRoute = require('./routes/usersRoute');
const roomsRoute = require('./routes/roomsRoute');
const bookingsRoute = require('./routes/bookingsRoute');

app.use(express.json());

app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute); // Attach bookingsRoute here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
