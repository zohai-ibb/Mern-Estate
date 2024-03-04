import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase';

export default function Profile() {
  const fileref = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setfileUploadError] = useState(false);
  const [formData, setFormData] = useState({})



  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress))
    },
      (error) => {
        setfileUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      })
  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-3'>Profile</h1>
      <form className='flex flex-col'>
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileref} hidden accept='image/*' />
        <img onClick={() => fileref.current.click()} src={formData.avatar || currentUser.avatar} alt="Avatar" className='rounded-full h-24 w-24 m-2 object-cover cursor-pointer self-center mt-2' />
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>Error Image Upload (Image must be less than 2mb)</span>)
            : filePerc > 0 && filePerc < 100 ? (
              <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>)
              : filePerc === 100 ? (
                <span className='text-green-700'>Image Successfully Uploaded!</span>
              ) : (
                ""
              )}
        </p>
        <input type="text" placeholder='Username' id='username' className='border p-3 m-1 rounded-lg' />
        <input type="text" placeholder='Email' id='email' className='border p-3 m-1 rounded-lg' />
        <input type="text" placeholder='Password' id='password' className='border m-1 p-3 rounded-lg' />
        <button className='mt-2 bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>

    </div>
  )
}
