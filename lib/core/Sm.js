"use strict";

let roundUp = require('./../../roundUp');
let _ = require('lodash');
const axios = require('axios');
const moment = require('moment');

function Sm(instanceConfig) {
    this.defaults = instanceConfig || [];
}

Sm.prototype.now = function() {
    return moment().format(moment.HTML5_FMT.DATE);
};

Sm.prototype.fire = function () {
    console.log(roundUp(9.3));
    console.log(roundUp(9.5));
    console.log(roundUp(9.7));

// using npm third party
    console.log(_.round(9.3));
    console.log(_.round(9.5));
    console.log(_.round(9.7));

// Make a request for a user with a given ID
    axios.get('https://api.ipify.org?format=json')
        .then(function (response) {
            // handle success
            return JSON.parse(JSON.stringify(response.data))
        })
        .then(function (data) {
            console.log(data['ip'])
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    return 'fire in the hole';
};
Sm.prototype.config = function (config) {
    this.defaults = this.concat(config)
};

module.exports = Sm;