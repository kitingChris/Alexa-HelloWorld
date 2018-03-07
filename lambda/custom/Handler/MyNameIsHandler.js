'use strict';

const MyNameIsHandler = function() {
    const name = this.event.request.intent.slots.name.value;
    this.response.speak(
        this.t('HELLO_NAME_MESSAGE').replace('%name%', name)
    );
    this.response.cardRenderer(
        this.t('HELLO_NAME_MESSAGE'),
        this.t('HELLO_NAME_MESSAGE').replace('%name%', name)
    );
    this.emit(':responseReady');
};

module.exports = MyNameIsHandler;