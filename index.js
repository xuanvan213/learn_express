import express from 'express';
import userRouter from './routes/user.route.js';
const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Van'
    });
});

app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});