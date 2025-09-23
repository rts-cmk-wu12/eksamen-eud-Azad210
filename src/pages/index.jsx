import "~sass/frontpage.scss"
import { Header } from "~components/header.jsx";
import { Footer } from "~components/footer.jsx";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from "~components/searchbar.jsx";



function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4000/api/v1/listings");
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <>



      <Header />


      <div className="frontpage-container">
        <div className="filter-bar">
          <SearchBar />
      <div className="filter-bar__tag-toogle">
        <button>New</button>
        <button>Price ascending</button>
        <button>Price descending</button>
      </div>
        </div>
        <div className="product-info-card">
          {items.map((item) => (
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
