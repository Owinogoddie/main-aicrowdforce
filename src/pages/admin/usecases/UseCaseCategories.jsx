
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
  
  const url=import.meta.env.VITE_REACT_APP_API_URL2
   
  const [items, setItems] = useState([]);
  const [postImage, setPostImage] = useState({ myFile: '' });
  const [previewImage, setPreviewImage] = useState(null);
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

  const handleShowAdd = () =>{
    // setShowAdd(true);
    
    Swal.fire({
      title: 'You cant Add new!!!',
      text: 'Please Contact Admin For This',
      icon: 'warning',
    })
  }

  const handleShowEditModal = (item) => {
    // setSelectedItem(item);
    // setPostTitle(item.category);
    // setShowEdit(true);
    Swal.fire({
      title: 'You cant Edit!!!',
      text: 'Please Contact Admin For This',
      icon: 'warning',
    })
  };

  const handleShowDeleteModal = (item) => {
    // setSelectedItem(item);
    // setPostTitle(item.category);
    // setShowDelete(true);

    Swal.fire({
      title: 'You cant delete!!!',
      text: 'Please Contact Admin For This',
      icon: 'warning',
    })
    };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}casecategory`);
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
      const response = await fetch(`${url}casecategory`, options);
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
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      };
      const response = await fetch(`${url}casecategory/${id}`, options);
      const data = await response.json();
      
      if(data){
        Swal.fire({
          title: 'Updated',
          text: 'item updated',
          icon: 'sucess',
        })
      }
      console.log(data)
      
      
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
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
    setPreviewImage(base64);
  };
  const handleDelete = async () => {
    try {
    const response = await fetch(`${url}casecategory/${selectedItem._id}`,
    {
    method: 'DELETE',
    }
    );
    const data = await response.json();
    setItems((prevItems) =>
    prevItems.filter((item) => item._id !== selectedItem._id)

    );
    if(data){
      
    Swal.fire({
      title: 'DELETED',
      text: 'item deleted',
      icon: 'warning',
    })

    }
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
          <p class="font-weight-bold">EXPERTISE PAGE</p>
        </div>
        <Button variant="primary m-2" onClick={handleShowAdd}>
        AddNew
      </Button>
       <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
       
       
        {
  
          items.map((item)=>(
            <tr key={item._id}>
              
            <td>1</td>
            <td style={{width:'20%'}}>{item.category}</td>
            
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
          <Modal.Title>New Expertise</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
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


      <Modal
        show={showEdit}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Expertise</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
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
   
<h2>Are you sure you want to delete this post?
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
