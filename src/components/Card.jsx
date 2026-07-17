import React from 'react'


const Card = (props) => {
  return (
<div className="card">

      <div>
          <div className="top">
          <img src={props.logo} alt="logo"></img>
          <button>Save <i className="fa fa-bookmark"></i></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h1>{props.post}</h1>
          <div className="tags">
            <h4>{props.tags[0]}</h4>
              <h4>{props.tags[1]}</h4>
          </div>
          </div>
      </div>
          

        <div className="bottom">
          <div className="location">
              <h3>${props.pay}/h</h3>
              <p>Latin America</p>
          </div>
            <button>Apply Now</button>
          </div>
        </div>
  )
}

export default Card
