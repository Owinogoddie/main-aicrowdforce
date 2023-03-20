// const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
// });

// const Item = mongoose.model('Item', itemSchema);
// module.exports = Item;

// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
// });

// const Category = mongoose.model('Category', categorySchema);
// module.exports = Category;


// const express = require('express');
// const router = express.Router();
// const Item = require('../models/item');

// router.post('/items', async (req, res) => {
//   const { name, description, price, categoryId } = req.body;

//   try {
//     const newItem = new Item({
//       name,
//       description,
//       price,
//       category: categoryId,
//     });
//     await newItem.save();
//     res.status(201).json(newItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Category = require('../models/category');

// router.post('/categories', async (req, res) => {
//   const { name, description } = req.body;

//   try {
//     const newCategory = new Category({
//       name,
//       description,
//     });
//     await newCategory.save();
//     res.status(201).json(newCategory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Item = require('../models/item');

// router.put('/items/:id', async (req, res) => {
//   const { name, description, price, categoryId } = req.body;

//   try {
//     const updatedItem = await Item.findByIdAndUpdate(
//       req.params.id,
//       {
//         name,
//         description,
//         price,
//         category: categoryId,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function EditItemForm({ itemId }) {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       const response = await axios.get('/api/categories');
//       setCategories(response.data);
//     }
//     fetchCategories();
//   }, []);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await axios.put(`/api/items/${itemId}`, {
//       name,
//       description,
//       price,
//       categoryId,
//     });
//     // redirect to item page or show success message
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(event) => setPrice(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="category">Category:</label>
//         <select
//           id="category"
//           value={categoryId}
//           onChange={(event) => setCategoryId(event.target.value)}
//         >
//           <option value="">-- Select a category --</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Save changes</button>
//     </form>
//   );
// }

// import { useState, useEffect } from 'react';

// function EditItemForm({ itemId }) {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       const response = await fetch('/api/categories');
//       const data = await response.json();
//       setCategories(data);
//     }
//     fetchCategories();
//   }, []);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await fetch(`/api/items/${itemId}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, description, price, categoryId }),
//     });
//     // redirect to item page or show success message
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(event) => setPrice(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="category">Category:</label>
//         <select
//           id="category"
//           value={categoryId}
//           onChange={(event) => setCategoryId(event.target.value)}
//         >
//           <option value="">-- Select a category --</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Save changes</button>
//     </form>
//   );
// }
