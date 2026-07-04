const app = require('./server');
const http = require('http');
const assert = require('assert');

const server = app.listen(3000, () => {
    
    http.get('http://localhost:3000/', (res) => {
        let data = '';

        res.on('data', (chunk) => { data += chunk; });

        res.on('end', () => {
            try {
                assert.strictEqual(res.statusCode, 200, "Status should be 200");
                assert.strictEqual(data, "Welcome to my DevOps App!", "Response body mismatch");
                
                console.log("✅ Unit Test Passed: Server works perfectly!");
                server.close(() => process.exit(0)); 
            } catch (error) {
                console.error("❌ Test Assert Failed:", error.message);
                server.close(() => process.exit(1));
            }
        });
    }).on('error', (err) => {
        console.error("❌ HTTP Request Error:", err.message);
        server.close(() => process.exit(1));
    });
});