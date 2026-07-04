const app = require('./server');
const assert = require('assert');

try {
    const mockReq = {};
    const mockRes = {
        status: function(code) {
            this.statusCode = code;
            return this;
        },
        send: function(msg) {
            this.body = msg;
            assert.strictEqual(this.statusCode, 200, "Status should be 200");
            console.log("✅ Unit Test Passed: Server returned status 200!");
            process.exit(0); 
        }
    };

    app._router.handle({ method: 'GET', url: '/' }, mockRes, () => {});
} catch (error) {
    console.error("❌ Unit Test Failed:", error.message);
    process.exit(1);
}