import React, { useEffect, useState } from 'react'
import axiosInstance from '../Services/axiosInstance';

const ViewLiveCustomers = () => {
  const [clients, setClients] = useState([]);
  const [initialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setInitialLoading(true)

    const getClients = async () => {
      try {
        const res = await axiosInstance.get("/get_clients")
        if (res.data.error_code === 200) {
          const seletedServicesAttribute = res.data.data.map((v) => {
            return {
              ...v,
              selected: v.services.length > 0 ? v.services[0].name : '',
              selectedMobNum: v.services.length > 0 ? v.services[0].phone_number : ''
            }
          })
          setClients(seletedServicesAttribute)
          setInitialLoading(false)
        } else {
          setInitialLoading(false)
          setClients([])
        }
      } catch (err) {
        console.log(err)
      }
    }

    getClients()
  }, [])


  const hanldeSelectedServices = (servicesData) => {
    const parsedServiceData = JSON.parse(servicesData)
    console.log(parsedServiceData, clients)

    const seletedServicesAttribute = clients.map((v) => {
      return v.id == parsedServiceData[0].id ? {
        ...v,
        selected: parsedServiceData[1].name,
        selectedMobNum: parsedServiceData[1].phone_number
      } : v
    })
    setClients(seletedServicesAttribute)
  }

  return (
    <div className="w-100 h-100 viewLiveCustomer-bg py-5">
      <div className='container-fluid placeholder-glow px-4'>
        <div className="row align-content-stretch  mb-5">
          {
            initialLoading ?
              [1,2,3,4,5,6,7,8].map((v,i)=>{
                return <div className="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 p-3" >
                <div className='card p-0 h-100 border-0 shadow'>
                  <div className="card-header text-center">
                    <h5 className="card-title mb-0 py-3 rounded w-75 placeholder"></h5>
                  </div>

                  <div className="card-body">
                    <p className="card-text py-5 rounded w-100 placeholder"></p>

                    <div className="col-12 d-flex flex-wrap align-items-center mb-3">
                      <div className="col-4">
                        <h6 className='py-3 rounded w-75 placeholder mb-0'></h6>
                      </div>
                      <div className="col-8">
                        <h6 className='py-3 rounded w-100 placeholder mb-0'></h6>
                      </div>
                    </div>

                    <div className="col-12 d-flex flex-wrap align-items-center mb-3">
                      <div className="col-4">
                        <h6 className='py-3 rounded w-75 placeholder mb-0'></h6>
                      </div>
                      <div className="col-8">
                        <h6 className='py-3 rounded w-100 placeholder mb-0'></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              })
              :
              clients.length > 0 ?
                clients.map((value, index) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3 p-3" key={index}>
                    <div className='card p-0 h-100 border-0 shadow rounded-3'>
                      <div className="card-header cutom-live-client-header">
                        <h5 className="card-title modal-rocket-card-title mb-0 text-center">{value.name}</h5>
                      </div>

                      <div className="card-body">
                        <p className="card-text cutom-live-client-card-text">{value.desc ? value.desc : "Your description will be displayed here"}</p>

                        <div className="col-12 d-flex flex-wrap align-items-center mb-3">
                          <div className="col-4">
                            <h6 className='cutom-live-client-card-title'>Services</h6>
                          </div>
                          <div className="col-8">
                            <select className="form-select form-select-md" onChange={(e) => hanldeSelectedServices(e.target.value)} aria-label=".form-select-lg example">
                              {value.services.map((v, i) => {
                                return <option selected={i == 0} value={JSON.stringify([value, v])} key={i}>{v.name}</option>
                              })}
                            </select>
                          </div>
                        </div>

                        <div className="col-12 d-flex flex-wrap align-items-center mb-3">
                          <div className="col-4">
                            <h6 className='cutom-live-client-card-title'>Mobile number </h6>
                          </div>
                          <div className="col-8">
                            <input type="text" name="phone_number" className="form-control pe-none" value={value.selectedMobNum} readOnly />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                :
                <div className='h-100'>
                  No Data Found
                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ViewLiveCustomers