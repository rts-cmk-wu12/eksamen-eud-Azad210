import "~sass/frontpage.scss"
import {Header} from "~components/header.jsx";
import {Footer} from "~components/footer.jsx";
import { useEffect, useState } from 'react';

 
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
  <div className="product-info-card">
    {items.map((item) => (
      <div key={item.id} className="product-card">
        <img src={item.asset.url} alt={item.name} />
        <p>{item.title}</p>
      </div>
    ))}
  </div>
</div>


  <Footer />

     
    </>
  );
}

export default Home;
