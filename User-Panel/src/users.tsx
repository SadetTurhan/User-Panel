import { Sidebar } from '/home/sadet/repos/User-Panel/User-Panel/src/sidebar';

export default function Users() {

    return (
      <div className="container grid grid-cols-4 bg-gray-200 rounded-xl shadow border w-full h-screen">
      <Sidebar></Sidebar>
      <div className='grid grid-span-3'>
        <p>back to users</p>
        <p>update users</p>
      </div>
      </div>
    );
}

