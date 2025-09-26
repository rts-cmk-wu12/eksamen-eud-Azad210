import "~sass/frontpage.scss"
import { Header } from "~components/header.jsx";
import { Footer } from "~components/footer.jsx";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  Search  from "~components/searchbar.jsx";



function Home() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4000/api/v1/listings");
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const searchHandler = value => {
    setSearch(value); 
  }

  const filterItems = items.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  

  return (
    <>



      <Header />


      <div className="frontpage-container">
        <Search searchHandler={searchHandler} />


        
        <div className="product-info-card">
          {filterItems.map((item) => (
            <Link key={item.id} className="link" to={`/details/${item.id}`}>
              <div className="product-card">
                <img src={item.asset.url} alt={item.name} />
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>



      <Footer />


    </>
  );
}

export default Home;
