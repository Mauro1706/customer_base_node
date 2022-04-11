import App from './start';

let port = process.env.PORT || '3050';

App.app.listen(port, function () {
    console.log(`servidor executando na porta ${port}`);
})