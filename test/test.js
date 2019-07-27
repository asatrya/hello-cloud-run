var assert = require('assert');
const greeting = require('../src/greetings')

describe('Homepage', function () {
    describe('sayHello()', function () {
        it('should contain string "Hello"', async () => {
            const result = await greeting.sayHello();
            assert.equal(greeting.sayHello().includes('Hello'), true);
        });
    });
});