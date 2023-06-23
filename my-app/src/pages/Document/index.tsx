import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddIcon from '@mui/icons-material/Add';

export const Document = () => {
    return (
        <div className='my-5 mx-1'>
            <div>
                <h4 style={{ color: '#355967' }} className='mb-4'>Document</h4>
                <div className='d-flex align-items-center gap-2'>
                    <p style={{
                        backgroundColor: '#14749B',
                        color: 'white',
                        borderRadius: '7px',
                        padding: '7px 8px',
                        border: 'none',
                        cursor: 'pointer'
                    }}><AddIcon />Add new</p>
                </div>

                <div>
                    <table className="table align-middle mb-0 rounded table-hover">
                        <thead >
                            <tr >
                                <th>N/A</th>
                                <th>Document Name</th>
                                <th>Type</th>
                                <th>Update Date</th>
                                <th>Update By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr style={{ cursor: 'pointer' }}>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" value=""
                                            id="flexCheckDefault"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log('select button');
                                            }}
                                        />
                                        <label className="form-check-label"
                                            htmlFor="flexCheckDefault"> 01
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="ms-3">
                                            <p className="fw-normal mb-1">one</p>
                                        </div>
                                    </div>
                                </td>
                                <td><p className="fw-normal mb-1">one</p></td>
                                <td><p className="fw-normal mb-1">05 june 2022</p></td>
                                <td><p className="fw-normal mb-1">Nur Alam</p></td>
                                <td> <p className="fw-normal mb-1">...</p></td>
                            </tr>
                            <tr style={{ cursor: 'pointer' }}>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" value=""
                                            id="flexCheckDefault"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log('select button');
                                            }}
                                        />
                                        <label className="form-check-label"
                                            htmlFor="flexCheckDefault"> 01
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="ms-3">
                                            <p className="fw-normal mb-1">one</p>
                                        </div>
                                    </div>
                                </td>
                                <td><p className="fw-normal mb-1">one</p></td>
                                <td><p className="fw-normal mb-1">05 june 2022</p></td>
                                <td><p className="fw-normal mb-1">Nur Alam</p></td>
                                <td> <p className="fw-normal mb-1">...</p></td>
                            </tr>
                            <tr style={{ cursor: 'pointer' }}>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" value=""
                                            id="flexCheckDefault"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log('select button');
                                            }}
                                        />
                                        <label className="form-check-label"
                                            htmlFor="flexCheckDefault"> 01
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="ms-3">
                                            <p className="fw-normal mb-1">one</p>
                                        </div>
                                    </div>
                                </td>
                                <td><p className="fw-normal mb-1">one</p></td>
                                <td><p className="fw-normal mb-1">05 june 2022</p></td>
                                <td><p className="fw-normal mb-1">Nur Alam</p></td>
                                <td> <p className="fw-normal mb-1">...</p></td>
                            </tr>
                            <tr style={{ cursor: 'pointer' }}>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" value=""
                                            id="flexCheckDefault"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log('select button');
                                            }}
                                        />
                                        <label className="form-check-label"
                                            htmlFor="flexCheckDefault"> 01
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="ms-3">
                                            <p className="fw-normal mb-1">one</p>
                                        </div>
                                    </div>
                                </td>
                                <td><p className="fw-normal mb-1">one</p></td>
                                <td><p className="fw-normal mb-1">05 june 2022</p></td>
                                <td><p className="fw-normal mb-1">Nur Alam</p></td>
                                <td> <p className="fw-normal mb-1">...</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
