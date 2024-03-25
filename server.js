const express = require('express');
const app = express();

const PORT = 80;
const ADDRESS = "localhost";

app.use(express.static('public'));

app.listen(PORT, ADDRESS, (error) => {
	if (error) {
		console.error("Error in server setup:", error);
		return;
	}
	console.log(`Server is running at http://${ADDRESS}:${PORT}`);
});