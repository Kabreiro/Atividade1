import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/processar-formulario', (req, res) => {
  const { nome, email, mensagem } = req.body;

  res.send(`Formulário recebido! Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
