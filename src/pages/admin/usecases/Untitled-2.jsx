
import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Sidebar from '../Sidebar';

import Swal from 'sweetalert2';

import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'



const UseCaseCategories = () => {
   
  const [items, setItems] = useState([]);
 
  
  const [postTitle, setPostTitle] = useState('');

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  
const [showDelete, setShowDelete] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState(null);


  const handleCloseModal = () => {
    setShowAdd(false);
    setShowEdit(false);
    setShowDelete(false);
    setSelectedItem(null);
    setPostTitle('');
  };

  const handleShowAdd = () => setShowAdd(true);

  const handleShowEditModal = (item) => {
    setSelectedItem(item);
    setPostTitle(item.title);
    setShowEdit(true);
    console.log(item.title)
  };

  const handleShowDeleteModal = (item) => {
    setSelectedItem(item);
    setPostTitle(item.title);
    setShowDelete(true);
    };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/casecategory');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const createPost = async (newPost) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      };
      const response = await fetch('http://localhost:4000/api/casecategory', options);
      const data = await response.json();
      
      setItems([...items, data.data]);
      if(response){
        
      Swal.fire({
        title: 'Added',
        text: 'Category  added',
        icon: 'success',
      })

      }

      handleCloseModal(); // add this line to close the modal
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id, newPost) => {
    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      };
      console.log(newPost)
      const response = await fetch(`http://localhost:4000/api/casecategory/${id}`, options);
      const data = await response.json();
      
      Swal.fire({
        title: 'Updated',
        text: 'item updated',
        icon: 'sucess',
      })
      
      
      
      handleCloseModal(); // add this line to close the modal
    } catch (error) {
      console.log('error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: postTitle
    };
    if (selectedItem) {
      updatePost(selectedItem._id, newPost);
    } else {
      createPost(newPost);
    }
  };
  
  const handleDelete = async () => {
    try {
    const response = await fetch(`http://localhost:4000/api/casecategory/${selectedItem._id}`,
    {
    method: 'DELETE',
    }
    );
    const data = await response.json();
    setItems((prevItems) =>
    prevItems.filter((item) => item._id !== selectedItem._id)

    );
    Swal.fire({
      title: 'DELETED',
      text: 'item deleted',
      icon: 'warning',
    })
    handleCloseModal();
    } catch (error) {
    console.log(error);
    }
    };
  return (
   
    <>
    
    <div class="grid-container">

     <Sidebar/>
      
      <main class="main-container" style={{minWidth:'900px',marginLeft:'1.5REM'}}>
     <div class="main-title">
          <p class="font-weight-bold">Use Case Ctegory PAGE</p>
        </div>
        <Button variant="primary m-2" onClick={handleShowAdd}>
        AddNew
      </Button>
       <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
       
        {
  
  items.map((item)=>(
    <tr key={item._id}>
      
    <td>1</td>
    <td style={{width:'20%'}}>{item.title}</td>
    <td style={{width:'40%'}}>{item.category}</td>
    
    <td>
    <Button variant="primary mx-2" onClick={() => handleShowEditModal(item)}>
    <BiEdit />
   </Button>
    <Button variant="danger" onClick={() => handleShowDeleteModal(item)}>
    <AiFillDelete/>
    </Button>
</td>


    </tr>
  ))
}
        </tbody>
      </Table>
     
        
    
    </main>
      

      </div>

      <Modal
        show={showAdd}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Use Case Ctegory</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control 
        placeholder="Enter Title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        required
        />
      </Form.Group>

      <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
    </Form>
        </Modal.Body>
        
      </Modal>




{/* edit */}

      <Modal
        show={showEdit}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form >
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control 
        placeholder="Enter Title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        required
        />
      </Form.Group>


      <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
    </Form>
        </Modal.Body>
        
      </Modal>

{/* //delete */}
      <Modal
        show={showDelete}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form >
   
<h2>Are you sure you want to delete this Category?
  <br/>
  
  </h2>
  <h3>{postTitle}</h3>


      <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete }>Delete</Button>
        </Modal.Footer>
    </Form>
        </Modal.Body>
        
      </Modal>


   



    

    </>
  )
}




export default UseCaseCategories
