
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

//Import google cloud client library
const vision = require('@google-cloud/vision');

//Create client
const client = new vision.ImageAnnotatorClient({
                                                   keyFilename: 'key.json'
                                               });


app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;


    file.mv(`${__dirname}/resources/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        client
            .labelDetection('/Users/shruthiraghuraman/Documents/wbdv_project/wbdv-sp20-group2-project/resources/surprisefood.jpg')
            .then(results => {
                const labels = results[0].labelAnnotations;

                console.log('Labels:');
                labels.forEach(label => console.log(label));
                res.json({ fileName: file.name,
                             filePath: `/uploads/${file.name}`});
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    });



});

app.listen(5000, () => console.log('Server Started...'));