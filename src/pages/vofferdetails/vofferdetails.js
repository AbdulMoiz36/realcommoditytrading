import React from 'react'
import { useParams } from 'react-router-dom'
const VofferDetails = () => {
    const { id } = useParams();
  return (
    <>
    <div>VofferDetails</div>
    <p>{id}</p>
    </>
  )
}

export default VofferDetails