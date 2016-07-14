import Ember from 'ember';

export default Ember.Controller.extend({

    responseMessage: '',
    emailAddress: '',
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValidEmail'),

    actions: {
        saveInvitation() {
            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', {email: email });

            newInvitation.save().then((response) => {
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            });

            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }

});
