import React from "react"
import { Image } from "react-bootstrap"
import "./studies.css"

const Studies = ({ study, studyPlaceImage }) => {
  /* studyPlaceImage needs the corrects image */

  return (
    <div className="d-flex  ">
      <Image src={studyPlaceImage} id="studyPlaceImage" className="mr-1 my-1 align-self-center" />
      <h6 className="align-self-center my-1" id="studyLink">
        {study}
      </h6>
    </div>
  )
}
export default Studies
