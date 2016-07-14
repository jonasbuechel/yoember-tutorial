import Ember from 'ember';

export default Ember.Controller.extend({

    "model.email": '',
    "model.message": '',

    isValidEmail: Ember.computed.match('model.email', /^.+@.+\..+$/),
    isMessageEnoughLong: Ember.computed.gte('model.message.length', 5),
    inputIsValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

    buttonIsDisabled: Ember.computed.not('inputIsValid'),

});
