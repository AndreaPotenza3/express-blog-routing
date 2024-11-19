
const express = require('express')
const router = express.Router()

// Index

router.get('/posts', (req, res) => {
    console.log('Lista dei post')
})

// Show

router.get('/posts/id:', (req, res) => {
    console.log(`Ecco il post con id ${req.params.id}`)
})

// Create

router.post('/posts', (req, res) => {
    console.log('Creazione del post')
})

// Update

router.put('/posts/id:', (req, res) => {
    console.log(`Aggiornato il post con id ${req.params.id}`)
})

// Modify

router.patch('/posts/id:', (req, res) => {
    console.log(`Modificato il post con id ${req.params.id}`)
})

// Delete

router.delete('/posts/id:', (req, res) => {
    console.log(`Cancellazione post con id ${req.params.id}`)
})

module.exports = router
