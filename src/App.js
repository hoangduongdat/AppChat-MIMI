import './App.css';
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './components/Login'
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider'
import AppContext  from './Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContext>
          <Routes>
            <Route element={<Login/>} path='/login'/>
            <Route element={<ChatRoom/>} path='/'/>   
          </Routes>
          <AddRoomModal />
          <InviteMemberModal/>
        </AppContext> 
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
