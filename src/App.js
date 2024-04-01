import { useState } from 'react';
import './App.css';
import Card from './component/card';



function App() {

  const [UserData, setUserData] = useState([
    { id:"1", profile: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", userName: "Rolan Jay Isabida", position: "Web Developer"},
    { id:"2", profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", userName: "Juan Dela Cruz", position: "Backend Developer"},
    { id:"3", profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", userName: "Carlos", position: "Database Manager"},
    { id:"4", profile: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D", userName: "James Gwapo", position: "Manager"},
  ])

  return (
    <>
      <div className='w-full min-h-screen bg-gray-900 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto p-4 gap-4'>

          {
            UserData.map((items, index) => {
              return (<Card 
                            key={index}
                            Uprofile={items.profile} 
                            Uuser={items.userName} 
                            position={items.position}
                      />)
            })
          }  

        </div>
      </div>
    </>
  );
}

export default App;
