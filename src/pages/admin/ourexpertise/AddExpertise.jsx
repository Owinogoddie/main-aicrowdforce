import React, { useState } from 'react';
import '../style.css'

function AddExpertise() {
      

  const [postImage, setPostImage] = useState({ myFile: "" });
  const [previewImage, setPreviewImage] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");




  const createPost = async (newPost) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      };
      const response = await fetch('http://localhost:4000/api/expertise', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: postTitle,
      description: postDescription,
      image: postImage.myFile
    };
    createPost(newPost);
    console.log("Uploaded");
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
    setPreviewImage(base64);
  }

  return (
    <>
    <div class="main-title">
      <p class="font-weight-bold">ADD OUR EXPERTISE</p>
    </div>
    <div className="form">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          required
        />
        
        <div className="preview__div">
        {previewImage && <img src={previewImage} alt="Preview" className='preview'/>}
        </div>
        <label htmlFor="file-upload" className='custom-file-upload'></label>
        <input
          type="file"
          label="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  );
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
export default AddExpertise

