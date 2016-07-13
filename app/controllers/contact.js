import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    message: '',

    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageEnoughLong: Ember.computed.gte('message.length', 5),
    inputIsValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

    buttonIsDisabled: Ember.computed.not('inputIsValid'),


    actions: {
        sendMessage(){
            alert(this.get('emailAddress'));
            this.set('emailAddress', '');
            // this.set('message', '');
            this.set('responseMessage', 'We got your message and we\'ll get in touch soon');
        }
    }
});
