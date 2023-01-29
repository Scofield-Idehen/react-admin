import './App.css';
import contact from './image/contact.png'
import contactmail from './image/contact-mail.png'
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
        </div>
      </div>

    </div>
  );
}

export default App;
