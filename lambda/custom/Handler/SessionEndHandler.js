'use strict';

const SessionEndHandler = function() {
    this.response.speak(this.t('SESSION_END_MESSAGE'));
    this.emit(':responseReady');
};

module.exports = SessionEndHandler;