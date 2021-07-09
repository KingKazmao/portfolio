const express = require('express');
const app = express();
const path = require('path');

// app.get('/', function(req, res) {
//     res.sendFile( path.join(__dirname, 'Home.HTML') );
// })

// app.get('/styles', function(req, res) {
//     res.sendFile( path.join(__dirname, 'style.css') );
// })

// app.get('/js', function(req, res) {
//     res.sendFile( path.join(__dirname, 'server.js') )
// })
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, "/public/Home.html"));

})
app.use(express.static("public"));


const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server serving on ${port}`)
})