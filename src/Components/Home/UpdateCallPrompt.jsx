import React, { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import axiosInstance from "../Services/axiosInstance";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const UpdateCallPrompt = () => {

    const data = [
        "+17014018543"
        , "+18647401156"
        , "+14692901140"
    ]
    const [responseData, setResponseData] = useState({})
    const [selectedDataGlow, setSelectedDataGlow] = useState(false);
    const [isInitMessageUpdating, setisInitMessageUpdating] = useState(false);
    const [isPromptUpdating, setisPromptUpdating] = useState(false);
    const [isInitMessageDisable, setisInitMessageDisable] = useState(true);
    const [isPromptDisable, setisPromptDisable] = useState(true);
    const [textAreaData, setTextAreaData] = useState({ inbound_init_msg: '', inbound_prompt: '' });


    // React Quill Editor
    const modules = {
        toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],

        ],
    };
    const Size = Quill.import('formats/size');
    Size.whitelist = ['small', false, 'large', 'huge'];
    Quill.register(Size, true);

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
    ];


    useEffect(() => {
        handleSelectedData(data[0])
    }, [])

    const handleSelectedData = async (selectedData) => {
        setisInitMessageDisable(true)
        setisPromptDisable(true)
        setSelectedDataGlow(true)

        try {
            const params = {
                phoneno: selectedData
            }

            const res = await axiosInstance.post("/get_inbound_prompt", params);
            if (res.data.error_code === 200) {
                setResponseData(res.data.data)
                const replace = res.data.data.inbound_prompt.replace(/\\n/g, '\n');
                setTextAreaData({
                    ...textAreaData,
                    inbound_prompt: res.data.data.inbound_prompt ? replace : '',
                    inbound_init_msg: res.data.data.inbound_init_msg ? res.data.data.inbound_init_msg : ''
                })
            }
            setSelectedDataGlow(false);
        } catch (err) {
            console.error(err)
            setSelectedDataGlow(false);
        }
    }

    const handleUpdateInit = async () => {
        try {
            setisInitMessageUpdating(true)
            console.log(textAreaData.inbound_init_msg, responseData)

            const params = {
                client_name: responseData.client_name,
                service_name: responseData.service_name,
                init_message: textAreaData.inbound_init_msg
            }
            await axiosInstance.post("/update_inbound_init_msg", params);

            setisInitMessageUpdating(false)
            setisInitMessageDisable(true)
        } catch (err) {
            console.error(err)
            setisInitMessageUpdating(false)
            setisInitMessageDisable(true)
        }
    }

    const handleUpdatePrompt = async () => {
        try {
            setisPromptUpdating(true)
            console.log(textAreaData.inbound_init_msg, responseData)

            const params = {
                client_name: responseData.client_name,
                service_name: responseData.service_name,
                prompt: textAreaData.inbound_prompt
            }

            await axiosInstance.post("/update_inbound_prompt", params);

            setisPromptUpdating(false)
            setisPromptDisable(true)
        } catch (err) {
            console.error(err)
            setisPromptUpdating(false)
            setisPromptDisable(true)
        }
    }
    return (
        <div className="col-12 placeholder-glow">
            <div className='container-fluid'>
                <div className="d-flex flex-wrap main-card-heightt justify-content-center py-5">

                    <div className=" col-12 col-md-10 col-lg-8">
                        <div className="w-100">
                            <div className='card h-100 border-0 shadow rounded-3'>
                                <div className="card-header cutom-live-client-header">
                                    <h5 className="card-title modal-rocket-card-title mb-0 text-center">Update call prompt</h5>
                                </div>

                                <div className="card-body py-2">
                                    <div className="col-12 d-flex flex-wrap mb-3">
                                        <div className="col-12 d-flex flex-wrap align-items-end mb-4 pb-3 border-bottom">
                                            <div className="col-7">
                                                <h6 className='cutom-live-client-card-title'>Mobile number :</h6>
                                            </div>
                                            <div className="col-5">
                                                <select className="form-select form-select-md" onChange={(e) => handleSelectedData(e.target.value)} aria-label="example">
                                                    {data.map((v, i) => {
                                                        return <option selected={i == 0} value={v} key={i}>{v}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 d-flex flex-wrap mb-4">
                                            <div className="col-8">
                                                <h6 className='cutom-live-client-card-title'>Init message</h6>
                                            </div>
                                            {
                                                selectedDataGlow ?
                                                    <>
                                                        <div className="col-4 text-end">
                                                            <button type="button" className="btn btn-sm placeholder col-5"></button>
                                                        </div>
                                                        <div className="col-12 mt-2">
                                                            <div className="placeholder w-100 rounded-1 py-3"></div>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="col-4 text-end">
                                                            {
                                                                isInitMessageUpdating ?
                                                                    <button type="button" className="btn btn-sm btn-primary col-4">
                                                                        <div class="spinner-border textarea text-light" role="status">
                                                                            <span class="visually-hidden">Loading...</span>
                                                                        </div>
                                                                    </button>
                                                                    :
                                                                    <button type="button" className="btn btn-sm btn-primary col-4" disabled={isInitMessageDisable} onClick={handleUpdateInit}>
                                                                        <span><FaSave /></span>
                                                                        <span className="ms-1">Update</span>
                                                                    </button>
                                                            }

                                                        </div>
                                                        <div className="col-12 mt-2">

                                                            {/* <ReactQuill
                                                                id='quillEditor'
                                                                style={{ height: '200px', marginBottom: '3rem', height: '20rem', borderRadius: '2rem' }}
                                                                theme="snow"
                                                                modules={modules}
                                                                formats={formats}
                                                                value={textAreaData.inbound_prompt}


                                                            /> */}

                                                            <textarea name="" id="" cols="30" rows="2" className="w-100 form-control textarea_resize" value={textAreaData.inbound_init_msg} onChange={(e) => {
                                                                setisInitMessageDisable(false)
                                                                setTextAreaData({ ...textAreaData, inbound_init_msg: e.target.value })
                                                            }} />
                                                        </div>
                                                    </>
                                            }
                                        </div>

                                        <div className="col-12 d-flex flex-wrap">
                                            <div className="col-8">
                                                <h6 className='cutom-live-client-card-title'>Prompt</h6>
                                            </div>
                                            {
                                                selectedDataGlow ?
                                                    <>
                                                        <div className="col-4 text-end">
                                                            <button type="button" className="btn btn-sm placeholder pe-none col-5"></button>
                                                        </div>
                                                        <div className="col-12 mt-2">
                                                            <div className="placeholder w-100 rounded-1 prompt_placeholder_height"></div>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="col-4 text-end">
                                                            {
                                                                isPromptUpdating ?
                                                                    <button type="button" className="btn btn-sm btn-primary col-4">
                                                                        <div class="spinner-border textarea text-light" role="status">
                                                                            <span class="visually-hidden">Loading...</span>
                                                                        </div>
                                                                    </button>
                                                                    :
                                                                    <button type="button" className="btn btn-sm btn-primary col-4" disabled={isPromptDisable} onClick={handleUpdatePrompt}>
                                                                        <span><FaSave /></span>
                                                                        <span className="ms-1">Update</span>
                                                                    </button>
                                                            }
                                                        </div>
                                                        <div className="col-12 mt-2">
                                                            <textarea name="" id="" cols="30" rows="14" className="w-100 form-control textarea_resize" value={textAreaData.inbound_prompt} onChange={(e) => {
                                                                setisPromptDisable(false)
                                                                setTextAreaData({ ...textAreaData, inbound_prompt: e.target.value })
                                                            }} />
                                                        </div>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}