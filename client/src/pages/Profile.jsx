import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-3'>Profile</h1>
      <form className='flex flex-col'>
        <img src={currentUser.avatar} alt="Avatar" className='rounded-full h-24 w-24 m-2 object-cover cursor-pointer self-center mt-2' />
        <input type="text" placeholder='Username' id='username' className='border p-3 m-1 rounded-lg'/>
        <input type="text" placeholder='Email' id='email' className='border p-3 m-1 rounded-lg'/>
        <input type="text" placeholder='Password' id='password' className='border m-1 p-3 rounded-lg'/>
        <button className='mt-2 bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>

    </div>
  )
}
