import './App.css';
import contact from './image/contact.png'
import contactmail from './image/contactmail.png'
import call from './image/call.png'


function App() {
  return (
    <div className="main">
      <div className='sub-main'>
        <div>
          <div className='img'>
            <div className='conntainer-image'>
              <img src={contact} alt = 'profile image' className='contact'/>

            </div>

          </div>
          <div>
            <h1>Login</h1>
            <img src={contactmail} alt = 'email' className='contactmail'/>
            <input type= 'text' placeholder='Username' className='name'/>
          </div>
         
          <div className='second-input'>
            <img src={call} alt = 'password' className='contactmail'/>
            <input type= 'Password' placeholder='password' className='name'/>
          </div>
          <div className='buttonkey'>
          <button>Login</button>
          </div>
          <p className='link'>
            <a href='a'>Forget password ? </a> or <a href='a'> SignUp </a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
