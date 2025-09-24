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

  console.log(data)
  if (!data) return null

  return (
    <>
      <Header />

      <section className="container-in-detail-page">
        <div className="container-in-detail-page__picture">
          <img
            className=""
            src={data.asset.url}
            alt={data.title}
          />
        </div>
        <div className="container-in-detail-page__text">
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.asset.createdAt}</p>
        </div>

      </section>

      <section>
        <img
          className=""
          src={data.user.listings}

        />
      </section>
      <Footer />
    </>
  )
}

export default ListingDetail