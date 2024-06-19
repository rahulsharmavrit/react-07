import React, { useEffect, useState } from 'react'
import { deleteCategoryApi, getCategoryApi } from './services/services.index'
import { Table } from 'react-bootstrap';

const Home = () => {
  const [data,setData] = useState([]);

  const handelRequest = async () => {
    let res = await getCategoryApi();
    setData (() => res);
  }
  const handelDelete = async (id) => {
    deleteCategoryApi(id)
    handelRequest();
  }

  useEffect(()=> {handelRequest() }, [data] )
  return (<>
  
      <Table striped hover>
        <thead>
          <tr>
            <th style={{minWidth : 300}}>ID</th>
            <th style={{minWidth : 300}}>Name</th>
            <th style={{minWidth : 300}}>Description</th>
            <th style={{minWidth : 300}}>ACtion</th>
          </tr>
        </thead>


        <tbody>
      
            {
              data?.data?.data?.map((item) => {
                return (<>
                  <tr>
                  <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
       
                <td> <button className="btn-danger btn me-2" onClick={()=>{handelDelete(item.id) }}>Delete</button>
                <button className="btn-warning btn">Update</button>
                 </td>
            </tr>
                </>)
              })
            }
         
        </tbody>
      </Table>
  
  </>)
}

export default Home