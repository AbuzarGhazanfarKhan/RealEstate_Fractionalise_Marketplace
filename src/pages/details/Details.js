import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Details.css'
import { useSelector } from 'react-redux'


function Details() {

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails
  console.log(property)


  return (
    <>
      <div className='propertydetails'>
      <h2 className='propertydetails-heading'>PROPERTY DETAILS</h2>
        <div className="property-details">
          <h2>
            <h5> Property name</h5>
            <span className='gapleft'>{property.propertyName}</span>
          </h2>
          <h2>
            <h5>Area</h5>
            <span className='gapleft'>  {property.size}</span>
          </h2>
          <h2>
            <h5>Bedrooms</h5>
            <span className='gapleft'>  {property.beds}</span>
          </h2>
          <h2>
            <h5>Bathrooms</h5>
            <span className='gapleft'> {property.baths} </span>
          </h2>
          <h2>
            <h5>Country</h5>
            <span className='gapleft'>   {property.country}</span>
          </h2>
          <h2>
            <h5>City</h5>
            <span className='gapleft'>{property.city}</span>
          </h2>
          <h2>
            <h5>Address</h5>
            <span className='gapleft'>{property.streetAddress} {property.propertyLocation}</span>
          </h2>
          <h2>
            <h5>Postal code</h5>
            <span className='gapleft'> {property.postalcode}</span>
          </h2>
          <h2>
            <h5>Type</h5>
            <span className='gapleft'>undefined</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Token price</h5>
            <span className='gapleft'>undefined</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Total tokens</h5>
            <span className='gapleft'>undefined</span>
          </h2>
    </div>
    </div>
    </>
  )
}

export default Details