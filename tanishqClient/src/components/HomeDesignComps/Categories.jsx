import { Link } from "react-router-dom"


const Categories = ({data}) => {

  return (
    <div className="col">
        <Link className="text-dark text-decoration-none" to={`/shop/${data.name
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}>
          <div className='category'>
          <img src={`http://localhost:8001/uploads/${data.image}`} alt="" />
          <div className='catHead text-center'>
              <h6>{data.name}</h6>
              <p>Explore</p>
          </div>
          </div>
        </Link>
    
    </div>
  )
}

export default Categories