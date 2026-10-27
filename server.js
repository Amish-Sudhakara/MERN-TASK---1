const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))
let items = []
let idCounter = 1
// GET all items
app.get('/items', (req, res) => {
 res.json(items)
})
// POST a new item
app.post('/items', (req, res) => {
 const { name, price } = req.body
 if (!name || !price) return res.status(400).json({ error: 'Name and price are required' })
 const newItem = { id: idCounter++, name, price }
 items.push(newItem)
 res.status(201).json({ message: 'Item added', item: newItem })
})
// PUT update item by ID
app.put('/items/:id', (req, res) => {
 const { name, price } = req.body
 const item = items.find(i => i.id === parseInt(req.params.id))
 if (!item) return res.status(404).json({ error: 'Item not found' })
 if (!name || !price) return res.status(400).json({ error: 'Name and price are required' })
 item.name = name
 item.price = price
 res.status(200).json({ message: 'Item updated', updatedItem: item })
})
// DELETE item by ID
app.delete('/items/:id', (req, res) => {
 const index = items.findIndex(i => i.id === parseInt(req.params.id))
 if (index === -1) return res.status(404).json({ error: 'Item not found' })
 items.splice(index, 1)
 res.status(200).json({ message: `Item ${req.params.id} deleted successfully!` })
})
app.listen(3000, () => {
 console.log('Server running at http://127.0.0.1:3000')
})
