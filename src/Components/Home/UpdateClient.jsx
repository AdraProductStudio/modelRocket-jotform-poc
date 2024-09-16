import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";

const UpdateClient = () => {
  // const embedRef = useRef(null);

  // useEffect(() => {
  //   // Function to load the external script
  //   const loadScript = () => {
  //     const existingScript = document.getElementById('jotform-async');
  //     if (!existingScript) {
  //       const script = document.createElement('script');
  //       script.async = true;
  //       script.id = 'jotform-async';
  //       script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-sheets-embed.js';
  //       document.body.appendChild(script);
  //     }
  //   };

  //   // Load the script when the component mounts
  //   loadScript();

  //   // Cleanup script from the DOM on component unmount
  //   return () => {
  //     const script = document.getElementById('jotform-async');
  //     if (script) {
  //       document.body.removeChild(script);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   // Initialize the jotform embed after the script has been loaded
  //   const initJotForm = () => {
  //     if (window.JotForm && embedRef.current) {
  //       // Initialize JotForm here if necessary
  //       window.JotForm.init({
  //         container: embedRef.current,
  //         id: '242443887723061',
  //         source: 'www.jotform.com',
  //         type: 'interactive'
  //       });
  //     }
  //   };

  //   // Ensure JotForm is initialized after the script is loaded
  //   const checkScriptLoaded = () => {
  //     if (document.getElementById('jotform-async')) {
  //       initJotForm();
  //     } else {
  //       setTimeout(checkScriptLoaded, 100); // Retry after 100ms
  //     }
  //   };

  //   checkScriptLoaded();

  //   // Clean up any potential side effects
  //   return () => {
  //     // Add any necessary cleanup code here
  //   };
  // }, []);

  const [tableBodyData, setTableBodyData] = useState([])
  const [tableHeadData, setTableHeadData] = useState([])
  const [gettingData, setGettingData] = useState(false)
  const [editingUrl, setEditingUrl] = useState('')
  const [show, setShow] = useState(false);



  useEffect(() => {
    setGettingData(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_API_SHEET_ID}/values/Form responses?key=${process.env.REACT_APP_SHEET_API_KEY}`);
        const tableData = []

        if (response.data.values.length > 0) {
          for (var i = 1; i < response.data.values.length; i++) {
            const newObj = {}
            const makeObject = response.data.values[i]
            const spread = { ...newObj }

            for (var j = 0; j < makeObject.length; j++) {
              const tableKey = response.data.values[0][j]

              spread[tableKey] = makeObject[j]
            }
            tableData[tableData.length] = spread
          }
          setTableBodyData(tableData)
          setTableHeadData(response.data.values[0])
        } else {
          setTableHeadData([])
          setTableBodyData([])
        }
        setGettingData(false)
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-12">
      <div className='container-fluid'>
        <div className="row justify-content-center main-card-heightt mx-3">
          <div className="col-md-10">
            {
              gettingData ?
                <div className="row h-100 justify-content-center align-content-center">
                  <div className="card border-0 rounded-4 editCongigurationCardHeight">
                    <div className="card-body row h-100 justify-content-center align-content-center">
                      <div className="col-5 text-center">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <p>Getting data</p>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="row h-100 justify-content-center align-content-center overflow-hidden">
                  <div className="card border-0 rounded-4 editCongigurationCardHeight">
                    <div className="card-body ">
                      <h5>Edit your form submission</h5>
                      <div className="table-responsive mt-3">
                        <table class="table table-hover table-bordered table-striped">
                          <thead>
                            <tr>
                              {/* <th scope="col">S.no</th> */}
                              {
                                tableHeadData.map((headVal, headInd) => {
                                  return headInd <= 3 ?
                                    <th scope="col" key={headInd}>{headVal}</th>
                                    :
                                    null
                                })
                              }
                            </tr>
                          </thead>
                          <tbody>
                            {
                              tableBodyData.map((bodayVal, bodyInd) => {
                                return Object.values(bodayVal)[0] && Object.values(bodayVal)[1] ? <tr key={bodyInd}>
                                  {/* <th scope="row">{bodyInd + 1}</th> */}
                                  <td>{Object.values(bodayVal)[0]}</td>
                                  <td>{Object.values(bodayVal)[1]}</td>
                                  <td>
                                    <CiEdit className="fs-4 cursorPointer" onClick={() => {
                                      setEditingUrl(Object.values(bodayVal)[2])
                                      setShow(true)
                                    }} />
                                  </td>
                                  <td>{Object.values(bodayVal)[3]}</td>
                                </tr>
                                  :
                                  null
                              })
                            }

                          </tbody>
                        </table>
                      </div>       
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>


      <Modal
        show={show}
        size='xl'
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className='modal-iframe-height'>
            <div className="container-fluid h-100">
              <iframe src={editingUrl} height={"100%"} width={"100%"} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );

}

export default UpdateClient