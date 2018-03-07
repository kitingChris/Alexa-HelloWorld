'use strict';

const HelloWorldHandler = function() {
    this.response.speak(
        this.t('HELLO_WORLD_MESSAGE')
    );
    this.response.cardRenderer(
        this.t('HELLO_WORLD_CARD_TITLE'),
        this.t('HELLO_WORLD_MESSAGE')
    );
    this.emit(':responseReady');
};

module.exports = HelloWorldHandler;