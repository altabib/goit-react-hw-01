import './App.css';
import Profile from './components/Profile';


const profileData = [
  {
        id: "profileData_1",
        img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
        alt: "User avatar",
        userName: "Petra Marica",
        mail: "@pmarica",
        adress: "Salvador, Brasil",
        followers: 1000,
        views: 2000,
        likes: 3000
  },

  {
        id: "profileData_2",
        img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
        alt: "User avatar",
        userName: "Jimi Hendrix",
        mail: "@hendrix",
        adress: " Seattle, USA",
        followers: 25000000,
        views: 3000,
        likes: 5000000
  },

  {
        id: "profileData_3",
        img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
        alt: "User avatar",
        userName: "Kurt Cobain",
        mail: "@Cobain",
        adress: "Aberdeen, USA",
        followers: 1000000,
        views: 5000,
        likes: 1400000
  },
];



function App() {
  return (
    <div>
      {profileData.map((item) => {
        return (
          <Profile
            key={item.id}
            img={item.img}
            alt = {item.alt}
            userName={item.userName}
            mail={item.mail}
            adress={item.adress}
            followers={item.followers}
            views={item.views}
            likes={item.likes}
          />)})
      }
    </div>
  );
}
export default App
