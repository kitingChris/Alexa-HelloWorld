'use strict';

const HelpHandler = function() {
    this.response.speak(this.t('Help Message'));
    this.emit(':responseReady');
};

module.exports = HelpHandler;