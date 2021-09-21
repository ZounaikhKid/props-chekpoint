import './App.css';
import Profile from './profile/Profile';
import image from './Roses.jpg'
function App() {
  const user = {
    fullName : "zounaikha",
    profession: "web developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima excepturi laudantium doloremque. Asperiores, natus corrupti." 
  }

    return (
    <div className="App">
      {/* <h1>Parent Component</h1> */}
   <Profile fullName={user.fullName} profession={user.profession} bio={user.bio} >
      {/* <h2>Child Component</h2> */}
     <img src={image} alt="profile" />
   </Profile>
    </div>
  );
}

export default App;
