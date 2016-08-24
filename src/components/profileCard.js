import React from 'react'
import { Link } from 'react-router';


const ProfileCard = ({data, viewProfile}) => {
  !data.picture ? data.picture = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' : null
  return (
    <div className='panel panel-info'>
      <div className='panel-heading'>
        <h3 className='panel-title'><a href="#" className='profile-pic' onClick={viewProfile} id={data.id}>{data.name}</a></h3>
      </div>
      <div className='panel-body'>

            <img className='img-rounded' src={data.picture} height="200" width="200" ></img>
            <div className="col-md-2">
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
            </div>
          </div>

    </div>

  )
}
export default ProfileCard
