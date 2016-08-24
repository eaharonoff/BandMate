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
        <div className="row">
          <div className='col-md-3'>
            <img className='img-rounded' src={data.picture} height="100" width="100" ></img>
          </div>
          <div className="col-md-12">
            <table className="table table-user-information">
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>{data.age}</td>
                </tr>
                <tr>
                  <td>City:</td>

                </tr>
              </tbody>
            </table>
            <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
          </div>
            </div>
          </div>

    </div>

  )
}
export default ProfileCard
