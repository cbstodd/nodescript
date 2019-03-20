import express from 'express';

const app = express();
const port: number = 3000;

app.get(('/'), (req, res): void => {
	res.send('Your TypeScript - NodeJS app is running');
});

app.listen((port), (err: string): void => {
	if (err) {
		return console.error(err);
	}
	return console.log(`server is listening on ${port}`);
});