'use strict';

const UnhandledHandler = function() {
    this.response.speak(this.t('UNHANDLED_MESSAGE'));
    this.emit(':responseReady');
};

module.exports = UnhandledHandler;