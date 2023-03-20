
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



const ImageVisions = () => {
   
  const [items, setItems] = useState([]);
  
  const [categories, setCategories] = useState([]);

  const [postIcon, setPostIcon] = useState({ myFile: '' });

  const [postImage, setPostImage] = useState({ myFile: '' });
  const [previewImage, setPreviewImage] = useState(null);
  const [previewIcon, setPreviewIcon] = useState(null);
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  
const [showDelete, setShowDelete] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState(null);
  
  const url=import.meta.env.VITE_REACT_APP_API_URL2


  const handleCloseModal = () => {
    setShowAdd(false);
    setShowEdit(false);
    setShowDelete(false);
    setSelectedItem(null);
    setPostImage({ myFile: '' });
    setPostIcon({ myIcon: '' });
    setPreviewImage(null);
    setPostTitle('');
    setPostDescription('');
  };

  const handleShowAdd = () => setShowAdd(true);

  const handleShowEditModal = (item) => {
    setSelectedItem(item);
    setPostImage({ myFile: item.image });
    setPostIcon({ myIcon: item.icon });
    setPreviewImage(item.image);
    setPreviewIcon(item.icon);
    setPostTitle(item.title);
    setPostDescription(item.description);
    setShowEdit(true);
  };

  const handleShowDeleteModal = (item) => {
    setSelectedItem(item);
    setPostImage({ myFile: item.image });
    setPreviewImage(item.image);
    setPreviewIcon(item.icon);
    setPostTitle(item.title);
    setPostDescription(item.description);
    setShowDelete(true);
    };
    
    

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}allvisions`);
      const data = await response.json();
      setItems(data);
     console.log(data)

    //   const response2 = await fetch('http://localhost:4000/api/visioncats');
    //   const data2 = await response2.json();
    //   setCategories(data2);
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
      const response = await fetch(`${url}allvisions`, options);
      const data = await response.json();
      console.log(data);
      setItems([...items, data.data]);
     if(data){
      Swal.fire({
        title: 'Added',
        text: 'Use Case added',
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
      const response = await fetch(`${url}allvisions/${id}`, options);
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
      title: postTitle,
      description: postDescription,
      icon: postIcon.myFile,
      image: postImage.myFile
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

  const handleIconUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostIcon({ ...postIcon, myFile: base64 });
    setPreviewIcon(base64);
  };



  const handleDelete = async () => {
    try {
    const response = await fetch(`${url}allvisions/${selectedItem._id}`,
    {
    method: 'DELETE',
    }
    );
    const data = await response.json();
    console.log(data)
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
          <p class="font-weight-bold">ALL VISION PAGE</p>
        </div>
        <Button variant="primary m-2" onClick={handleShowAdd}>
        AddNew
      </Button>
       <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description Name</th>
            <th>Icon</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
       
       
        {
  
          items.map((item)=>(
            <tr key={item._id}>
              
            <td>1</td>
            <td style={{width:'15%'}}>{item.title}</td>
            <td style={{width:'30%'}}>{item.description}</td>
            <td><img src={item.icon} alt="" style={{width:'75px'}}/></td>
            <td><img src={item.image} alt="" style={{width:'75px'}}/></td>
            
            <td style={{width:'20%'}}>
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
          <Modal.Title>New Use case</Modal.Title>
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

      <Form.Control
          as="textarea"
          placeholder="Description"
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          required
          style={{ height: '100px' }}
        />

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Enter Icon</Form.Label>
          <Form.Control
          type="file"
          label="Image"
          name="myiIcon"
          id='icon-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleIconUpload(e)}
          required
          />
      </Form.Group>
      <div className="preview__div">
        {previewImage && <img src={previewIcon} alt="Preview" className='preview' width='80px'/>}
        </div>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter Image</Form.Label>
        <Form.Control
        type="file"
        label="Image"
        name="myFile"
        id='file-upload'
        accept='.jpeg, .png, .jpg'
        onChange={(e) => handleFileUpload(e)}
        required
        />
        </Form.Group>
      <div className="preview__div">
        {previewImage && <img src={previewImage} alt="Preview" className='preview' width='80px'/>}
        </div>


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
          <Modal.Title>New Use case</Modal.Title>
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

      <Form.Control
          as="textarea"
          placeholder="Description"
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          required
          style={{ height: '100px' }}
        />
<Form.Select
          id="category"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">-- Select a category --</option>
          {categories.map((category) => (
           <option key={category._id} value={category._id}>
           {category.title}
         </option>
          ))}
      </Form.Select>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter Image</Form.Label>
        <Form.Control
        type="file"
        label="Image"
        name="myFile"
        id='file-upload'
        accept='.jpeg, .png, .jpg'
        onChange={(e) => handleFileUpload(e)}
        required
        />
      </Form.Group>
      <div className="preview__div">
        {previewImage && <img src={previewImage} alt="Preview" className='preview' width='80px'/>}
        </div>


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
   
<h3>Are you sure you want to delete this post?
  <br/>
  
  </h3>
  <h3>{postTitle}</h3>

  <p>{postDescription}</p>

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






function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}


export default ImageVisions