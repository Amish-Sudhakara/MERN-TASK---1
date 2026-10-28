# Item CRUD Application

Front end for CRUD operations on an array of items using HTML, CSS, Express.js and REST API.

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## Project Structure

```
.
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── screenshots/
│   ├── image.png
│   ├── image-copy.png
│   ├── image-copy-2.png
│   └── image-copy-3.png
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## How to Run

```bash
npm install
npm start
```

## API Endpoints

- GET /items
- POST /items
- PUT /items/:id
- DELETE /items/:id

## Screenshots

1. **Create Item (Input Form)**  
   ![Form](screenshots/image.png)  
   *Initial state with Name and Price input fields. Entering values and clicking Submit sends a `POST /items` request to add the item to the in-memory array and reload the list.*

2. **Read Items (Dynamic Table)**  
   ![Items List](screenshots/image-copy-2.png)  
   *The table renders all current items fetched from the server via `GET /items`. Each item row displays its ID, Name, Price, and action buttons for Edit and Delete.*

3. **Update Item (Edit Mode)**  
   ![Edit Item](screenshots/image-copy.png)  
   *Clicking the Edit button on a row populates the form with that item's details. Submitting the form triggers a `PUT /items/:id` request to update the item and reset the form.*

4. **Delete Item**  
   ![Delete Item](screenshots/image-copy-3.png)  
   *Clicking the Delete button sends a `DELETE /items/:id` request to delete the selected item from the server, immediately updating the table view.*
