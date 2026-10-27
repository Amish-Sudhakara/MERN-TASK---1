let data = [], editId = null
const load = async () => {
 data = await (await fetch('/items')).json()
 list.innerHTML = data.map(i => `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.price}</td><td><button onclick="edit(${i.id})">Edit</button> <button onclick="del(${i.id})">Delete</button></td></tr>`).join('')
}
form.onsubmit = async e => {
 e.preventDefault()
 await fetch(editId ? '/items/' + editId : '/items', {
  method: editId ? 'PUT' : 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: nm.value, price: pr.value })
 })
 editId = null
 form.reset()
 load()
}
const edit = id => {
 const i = data.find(x => x.id === id)
 nm.value = i.name
 pr.value = i.price
 editId = id
}
const del = async id => {
 await fetch('/items/' + id, { method: 'DELETE' })
 load()
}
load()
