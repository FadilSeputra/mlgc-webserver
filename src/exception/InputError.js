const ClientError = require('./ClientError'); // Ensure this path is correct

class InputError extends ClientError {
    constructor(message) {
        super(message);
        this.name = 'InputError';
    }
}

module.exports = InputError;