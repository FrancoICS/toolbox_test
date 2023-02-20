import React, {useEffect, useState} from 'react'
import {getFiles, update_state} from '../store/slices/ToolBoxReducer'
import {useDispatch, useSelector} from 'react-redux'


function Table () {

    /*Redux*/
    const dispatch = useDispatch()
    const {data: filesData} = useSelector(state => state.files)

    /*Usestate*/
    const [inputBuscar, setInputBuscar] = useState(null);

    /*UseEffect */
    useEffect(() => {
        dispatch(getFiles())
    }, [dispatch])


    /*Logica funcional del componente */
    const inputBusquedaHandler = (e) => {
        if (e.target.value === '' || e.target.value === undefined || e.target.value === null ){
            dispatch(getFiles())
        }else{
            setInputBuscar(e.target.value)
        }
    }

    const buttonBusquedaHandler = () => {
        dispatch(update_state(inputBuscar))
    }

    const tecladoHandler = (e) => {
        if (e.key === 'Enter') {
            dispatch(update_state(inputBuscar))
          }
    }



    return(
        <> 
            <div className='container' Style='margin-top: 5%;'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6' Style='width: 18%; margin-top: 0.2%;'>
                        <input type='text' placeholder='Busqueda por FileName' onChange={inputBusquedaHandler} onKeyDown={tecladoHandler}/>
                    </div>
                    <div className="text-center col-6" Style='width: 5%'>
                        <button type="button" className="btn btn-primary" onClick={buttonBusquedaHandler}>Buscar</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'> 
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">File</th>
                            <th scope="col">Text</th>
                            <th scope="col">Number</th>
                            <th scope="col">Hex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            filesData.map((value, index) => ( 
                                <tr key={index}>
                                    <th scope="row">{value.file}</th>
                                    <td>{value.lines[0].text}</td>
                                    <td>{value.lines[0].number}</td>
                                    <td>{value.lines[0].hex}</td>
                                </tr>
                            )) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table

