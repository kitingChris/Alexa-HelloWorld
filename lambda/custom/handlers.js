'use strict';

const LaunchRequestHandler  = require('Handler/LaunchRequestHandler');
const HelloWorldHandler     = require('Handler/HelloWorldHandler');
const MyNameIsHandler       = require('Handler/MyNameIsHandler');
const HelpHandler           = require('Handler/HelpHandler');
const SessionEndHandler     = require('Handler/SessionEndHandler');
const UnhandledHandler      = require('Handler/UnhandledHandler');

const handlers = {
    'LaunchRequest':        LaunchRequestHandler,
    'HelloWorldIntent':     HelloWorldHandler,
    'MyNameIsIntent':       MyNameIsHandler,
    'AMAZON.HelpIntent':    HelpHandler,
    'AMAZON.StopIntent':    SessionEndHandler,
    'AMAZON.CancelIntent':  SessionEndHandler,
    'Unhandled':            UnhandledHandler,
    'SessionEndedRequest':  function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    }
};

module.exports = handlers;