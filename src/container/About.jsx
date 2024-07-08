import { Link, Outlet, useNavigate } from "react-router-dom"
import SwiperSlider from "../components/CouponSlider";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
     
      <div className="about">
        <h2>About</h2>
        <button onClick={() => navigate('/view-more')}> view More</button>
      </div>

      <SwiperSlider />
      
      <nav className="sub-nav">
        <Link to="sub-about">Sub-About</Link>
        <Link to="sub-about2">Sub-About2</Link>
      </nav>
      <div className="sub-content">

        <Outlet />
      </div>
    </>
  )
}

export default About