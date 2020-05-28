import React from 'react'
import { Link } from 'gatsby'
import { NeckPain, MotorVehicle, SportsInjury } from '../../../images/index'

const AllTreatments = () => (
<section className="services-page-section">
  <div className="auto-container">
    <div className="row clearfix">
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src={MotorVehicle} alt />
            <div className="overlay">
              <Link to="/treatments/motor-vehicle-collisions" className="theme-btn btn-style-five">Know more</Link>
            </div>
          </div>
          <div className="lower-box">
            <h3><Link to="/treatments/motor-vehicle-collisions">Motor Vehicle Collisions</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src={NeckPain} alt />
            <div className="overlay">
              <Link to="/treatments/neck-and-back-pain" className="theme-btn btn-style-five">Know more</Link>
            </div>
          </div>
          <div className="lower-box">
            <h3><Link to="/treatments/neck-and-back-pain">Neck and Back Pain</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>
      {/*Services Block Two*/}
      <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <img src={SportsInjury} alt />
            <div className="overlay">
              <Link to="/treatments/sports-inuries" className="theme-btn btn-style-five">Know more</Link>
            </div>
          </div>
          <div className="lower-box">
            <h3><Link to="/treatments/sports-inuries">Sports Injuries</Link></h3>
            <div className="text">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


)

export default AllTreatments