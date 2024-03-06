const express = require('express')
const app = express()
const port = 3000
const joueurs = require('./joueurs.json')

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
// Create
app.post('/joueurs', (req, res) => {
  const nouveauJoueur = req.body
  joueurs.push(nouveauJoueur);
  console.log("joueur ; ", nouveauJoueur);
  res.json(nouveauJoueur);
});
// Read
app.get('/joueurs/:id', (req, res) => {
  const joueur = joueurs.find(j => j.id === req.params.id);
  console.log("joueur ; ", joueur);
  res.json(joueur);
});
// Update
app.put('/joueurs/:id', (req, res) => {
  const joueur = joueurs.find(j => j.id === parseInt(req.params.id));
  joueur.nom = req.body.nom;
  joueur.numero = req.body.numero;
  joueur.poste = req.body.poste;
  res.json(joueur);
});
// Delete
app.delete('/joueurs/:id', (req, res) => {
  joueurs = joueurs.filter(j => j.id !== parseInt(req.params.id));
  res.send('Joueur supprimé');
});