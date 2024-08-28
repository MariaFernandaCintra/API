//Importar a intância do Express configurada em index.js
const app = require("./index");
//Iniia o servidor na porta 5000, neste caso a API será acessivel em http://localhost:5000/
app.listen(5000);