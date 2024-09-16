import React from 'react'

const MrApiDocs = () => {
  return (
    <div className="col-12">
      <div className='container-fluid'>
        <div className="row justify-content-center main-card-heightt mx-3">
          <div className="col-md-11">
            <div className="row h-100 justify-content-center align-content-center">
              <div className="card border-0 rounded-4 editCongigurationCardHeight">

                <div className="col-12 border-bottom py-3 card-header sticky-top bg-white">
                  <h4 className='fw-bold'>MR API Documentation</h4>
                </div>

                <div className="card-body row h-100 justify-content-center">
                  <section className='col-12 mt-4'>
                    <h6 className='mb-3 fw-bold main-title'>1. Register API User</h6>
                    <div className="row ps-3">
                      <div className="col-12 row">
                        <div className="heading-title">
                          <p><strong >Endpoint</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>POST /register</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >URL</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>https://consumerapi.matsuritech.com/register</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Description</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>Register a new client with the system if they would like to access the MR API directly</p>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Body (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Field</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>username</td>
                                <td>string</td>
                                <td>Unique username</td>
                              </tr>
                              <tr>
                                <td>password</td>
                                <td>string</td>
                                <td>User password</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr />

                  <section className='col-12 mt-4'>
                    <h6 className='mb-3 fw-bold main-title'>2. Get API Token</h6>
                    <div className="row ps-3">
                      <div className="col-12 row">
                        <div className="heading-title">
                          <p><strong >Endpoint</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>GET /get_api_token</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >URL</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>https://consumerapi.matsuritech.com/get_api_token</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Authentication</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>Basic Auth (Username & Password required).</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Description</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>Obtain the API token to authenticate further requests.</p>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Body (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Header</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Authorization</td>
                                <td>Basic Auth credentials (Username & Password) </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr />

                  <section className='col-12 mt-4'>
                    <h6 className='mb-3 fw-bold main-title'>3. Make Outbound Call Request</h6>
                    <div className="row ps-3">
                      <div className="col-12 row">
                        <div className="heading-title">
                          <p><strong >Endpoint</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>POST /outbound_call_req</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >URL</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>https://consumerapi.matsuritech.com/outbound_call_req</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Authentication</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p> Bearer Token</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Description</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>Send a request to make an outbound call.</p>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Headers (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Header</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Authorization</td>
                                <td>Bearer token</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Body (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Field</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>phoneno</td>
                                <td>string</td>
                                <td>Phone number of the user </td>
                              </tr>
                              <tr>
                                <td>client_name</td>
                                <td>string</td>
                                <td>Name of the client as mentioned in the onboarding form </td>
                              </tr>
                              <tr>
                                <td>client_service_name</td>
                                <td>string</td>
                                <td>Name of the service as mentioned in the onboarding form</td>
                              </tr>
                              <tr>
                                <td>user_data </td>
                                <td>string</td>
                                <td>Any data about the client required for the call script</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr />

                  <section className='col-12 mt-4'>
                    <h6 className='mb-3 fw-bold main-title'>4. Add Client Consumer Data</h6>
                    <div className="row ps-3">
                      <div className="col-12 row">
                        <div className="heading-title">
                          <p><strong >Endpoint</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>POST /add_client_consumer_data</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >URL</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>https://consumerapi.matsuritech.com/add_client_consumer_data</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Authentication</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>Bearer Token</p>
                        </div>


                        <div className="heading-title">
                          <p><strong >Description</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>Add consumer data into the MR database along with call type.</p>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Headers (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Header</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Authorization</td>
                                <td>Bearer token</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Body (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Field</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>phoneno</td>
                                <td>string</td>
                                <td>Phone number of the user</td>
                              </tr>
                              <tr>
                                <td>client_name</td>
                                <td>string</td>
                                <td>Name of the client as mentioned in the onboarding form </td>
                              </tr>
                              <tr>
                                <td>client_service_name</td>
                                <td>string</td>
                                <td>Name of the service as mentioned in the onboarding form</td>
                              </tr>
                              <tr>
                                <td>user_data </td>
                                <td>string</td>
                                <td>Any data about the client required for the call script</td>
                              </tr>
                              <tr>
                                <td>call_type </td>
                                <td>string</td>
                                <td>Call type: inbound or outbound </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr />

                  <section className='col-12 mt-4'>
                    <h6 className='mb-3 fw-bold main-title'>5. Upload Outbound Call Schedule </h6>
                    <div className="row ps-3">
                      <div className="col-12 row">
                        <div className="heading-title">
                          <p><strong >Endpoint</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>POST /upload_outbound_users</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >URL</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>https://consumerapi.matsuritech.com/upload_outbound_users</p>
                        </div>

                        <div className="heading-title">
                          <p><strong >Authentication</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p className='text-break'>Bearer Token</p>
                        </div>


                        <div className="heading-title">
                          <p><strong >Description</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>Upload a file with outbound call user information.</p>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>Request Headers (JSON):</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Header</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Authorization</td>
                                <td>Bearer token</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <p className='fw-bold mt-2 mb-0 ps-2'>File Format:</p>
                      <div className="col-12 row mt-2">
                        <div className="heading-title">
                          <p><strong >File Name Format</strong></p>
                        </div>
                        <div className="heaing-content">
                          <p>{`<client name>__<service name>__outbound_users.csv`}</p>
                        </div>

                        <div className="heaing-content col-12">
                          <p>The file name should contain the name of the client along with the name of the service as mentioned in the onboarding form, delimited by `__` (double underscore).</p>
                        </div>
                      </div>


                      <p className='fw-bold mt-2 mb-0 ps-2'>Columns in CSV:</p>
                      <div className="ps-2">
                        <div className='table-responsive'>
                          <table class="table table-bordered w-100">
                            <thead>
                              <tr>
                                <th scope="col">Column Name</th>
                                <th scope="col">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Phone number</td>
                                <td> User's phone number</td>
                              </tr>
                              <tr>
                                <td>Date</td>
                                <td>  Date of the scheduled call </td>
                              </tr>
                              <tr>
                                <td>Time</td>
                                <td> Time of the scheduled call</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MrApiDocs