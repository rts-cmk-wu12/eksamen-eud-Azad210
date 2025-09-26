import { Header } from "~components/header.jsx";
import { Footer } from "~components/footer.jsx";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "~sass/listing-detail.scss"


function ListingDetail() {

  const { id } = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`)
      if (!response.ok) throw new Error("Failed to fetch.")
      const data = await response.json()
      setData(data)

    }
    fetchData()
  }, [id])

 
  if (!data) return null

  return (
    <>
      <Header />

      <section className="container-in-detail-page">
        <div className="container-in-detail-page__picture">
          <img
            src={data.asset.url}
            alt={data.title}
          />
        </div>
        <div className="container-in-detail-page__text">
          <p className="container-in-detail-page__title">{data.title}</p>
          <p>{data.description}</p>
          <p className="container-in-detail-page__created-text">On SwaoHub since: {data.asset.createdAt}</p>
        </div>

      </section>

  
      <Footer />
    </>
  )
}

export default ListingDetail