const request = require('request');

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=dd6d222472e1cf3c9083a4d367f2e530&query='+encodeURIComponent(address)+'&limit=1';
    request({url, json: true}, (error,response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if(response.body.data.length === 0) {
            callback('No match found!', undefined);
        }
        else {
            callback(undefined, {
                latitude : response.body.data[0].latitude,
                longitude : response.body.data[0].longitude,
                location: response.body.data[0].name
            })
        }
    })
}

module.exports = geocode


  