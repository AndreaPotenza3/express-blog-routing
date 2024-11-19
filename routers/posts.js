
const express = require('express')
const router = express.Router()

// Index

router.get('/posts', (req, res) => {
    res.send('Lista dei post')
})

// Show

router.get('/posts/id:', (req, res) => {
    res.send(`Ecco il post con id ${req.params.id}`)
})

// Create

router.post('/posts', (req, res) => {
    res.send('Creazione del post')
})

// Update

router.put('/posts/id:', (req, res) => {
    res.send(`Aggiornato il post con id ${req.params.id}`)
})

// Modify

router.patch('/posts/id:', (req, res) => {
    res.send(`Modificato il post con id ${req.params.id}`)
})

// Delete

router.delete('/posts/id:', (req, res) => {
    res.send(`Cancellazione post con id ${req.params.id}`)
})

module.exports = router
