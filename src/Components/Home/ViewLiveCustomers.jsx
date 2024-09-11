import React, { useEffect, useState } from 'react'
import axiosInstance from '../Services/axiosInstance';

const ViewLiveCustomers = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axiosInstance.get("/get_clients")
        if (res.data.error_code === 200) {
          const seletedServicesAttribute = res.data.data.map((v)=>{
            return {...v,
              selected:v.services.length > 0 ? v.services[0].name : '',
              selectedMobNum:v.services.length > 0 ? v.services[0].phone_number : ''
            }
          })
          setClients(seletedServicesAttribute)
        } else {
          setClients([])
        }
      } catch (err) {
        console.log(err)
      }
    }

    getClients()
  }, [])


  const hanldeSelectedServices = (cardIndex,servicesIndex) =>{
    const seletedServicesAttribute = clients.map((v,mapingIndex)=>{
      return mapingIndex==cardIndex ? {...v,
        selected:v.services[servicesIndex].name,
        selectedMobNum:v.services[servicesIndex].phone_number 
      } : v
    })

    setClients(seletedServicesAttribute)
  }

  return (
    <div className='container-fluid'>
      <div className="d-flex flex-wrap mb-5 align-items-stretch">
        {
          clients.map((value, index) => (
            <div className="card rounded-4 col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 border-0 p-1" >
              <div className="card-body pb-5 border rounded-top-3">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">{value.desc ? value.desc : "Your description will be displayed here"}</p>
                <p className="card-text">Mobile number : {value.selectedMobNum}</p>
              </div>
              <div className="card-footer bg-transparent border rounded-bottom-3">

                <div className="dropdown col-12 btn-group dropup">
                  <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {value.selected}
                  </button>
                  <ul className="dropdown-menu w-100 update-template-dropdown">
                    {value.services.map((v, i) => {
                      return <li><a className="dropdown-item" href="#" onClick={()=>hanldeSelectedServices(index,i)}>{v.name}</a></li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ViewLiveCustomers