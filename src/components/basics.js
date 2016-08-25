import React from 'react'
import { Link } from 'react-router';


const Basics = ({data, viewProfile}) => {
  !data.picture ? data.picture = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' : null
  return (
    <div className='panel panel-info'>
      <div className='panel-heading'>
        <h3 className='panel-title'><a href="#" className='profile-pic' onClick={viewProfile} id={data.id}>{data.name}</a></h3>
      </div>
      <div className='panel-body'>
        <div className='row basics'>
          <div className="col-md-4">
          <center>
            <img className='img-rounded' src={data.picture} height='300' width='300'></img>
          </center>
          </div>
          <div className="col-md-4">
            <center>
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>{data.age}</td>
                  </tr>
                  <tr>
                    <td>City:</td>
                    <td>{data.city.name}</td>
                  </tr>
                  <tr>
                    <td>Bio:</td>
                    <td>{data.bio}</td>
                  </tr>
                  <tr>
                    <td>Instruments:</td>
                    <td>{data.instruments.map(instrument => instrument.name).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Genres:</td>
                    <td>{data.genres.map(genre => genre.name).join(", ")}</td>
                  </tr>
                </tbody>
              </table>
            </center>
            </div>
            <div className="col-md-4 profilesoundcloud">
              <center>
               <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
              </center>
            </div>

          </div>
        </div>
    </div>

  )
}
export default Basics
