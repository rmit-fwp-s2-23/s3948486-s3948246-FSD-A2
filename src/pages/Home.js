import Header from '../components/header'
import Slide from '../components/slide'
import Content from '../components/content'
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function Home() {
  const moviesImgs = [
    "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Oppenheimer-Movie-Poster-Universal-Publicity-EMBED-2022-.jpg?w=1000",
    "https://variety.com/wp-content/uploads/2023/04/Fs3zzy_aMAAyCNC.jpeg?w=800",
    "https://m.media-amazon.com/images/I/61FsQdm0-ML._AC_UF894,1000_QL80_.jpg",
  ];
  
  return (
    <div>
      <Navbar />
      <Header />
      <Slide imageArrayProps={moviesImgs}/>
      <Content imageArrayProps={moviesImgs}/>
      <Footer />
    </div>
  );
}

export default Home;