const DeckZonesModel = require('../models').DeckZones;
const DeckLocations = require('../models').DeckLocations;
//= =======================================
// Deck Route
//= =======================================
exports.getAllDeckZones = function (req, res, next) {
    console.log('connecting...');
    DeckZonesModel.findAll({
        attributes:
            [
                'DeckZoneID',
                'DeckZoneName',
                'DeckNumber'
            ]
    }).then(deckZones => {        
        res.status(200).send(deckZones);
    }).catch(error => {
        console.log('error: ', 'DeckZones not found.');
        res.status(404).send('DeckZones not found');
    })
};

exports.getAllDeckSensorsZones = (req, res, next) => {
    console.log('connecting...');
    DeckZonesModel.findAll({
        attributes:
            [
                'DeckZoneID'                
            ]
    }).then(deckZones => {
              
        res.status(200).send(deckZones);
    }).catch(error => {
        console.log('error: ', 'DeckZones not found.');
        res.status(404).send('DeckZones not found');
    })
}