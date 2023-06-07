import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ViewIteam.scss';

const ViewIteam = () => {

  const [data, setData] = useState<any>();

  const id = useParams();
 
  const getData = async (item: any) => {
    try {
      const url = `http://localhost:5000/data/${item.id}`
      const result: any = await axios.get(url);
      debugger
      setData(result.data)
    } catch (err) {
      console.log(err);
    }
  };
 useEffect(() => {
    getData(id);
  }, [id])

  return (
    <div className='maincont'>
      {data &&
        <>
        
        <div className='container'>

          <div className="field">
            <div className='title'><h1>Name</h1></div>
          
          <p>{data.name}</p>
          </div>
          <div className="field">
            <div className="title"><h1>Date of Birth</h1></div>
          
          <p>{data.dateofbirth}</p>
          </div>
          <div className='field'>
            <div className="title"><h1>Phone Number</h1></div>
          
          <p>{data.phonenumber}</p>
          </div>
          <div className="field">
            <div className="title"><h1>Company Name</h1></div>
          
          <p>{data.companyname}</p>
          </div>
          <div className='field'>
            <div className="title"><h1>Email</h1></div>
          
          <p>{data.email}</p>
          </div>
          <div className='field'>
            <div className="title"><h1>Job Title</h1></div>
          
          <p>{data.jobtitle}</p>
          </div>
          <div className='field'>
            <div className="title"><h1>Department</h1></div>
          
          <p>{data.department}</p>
          </div>
        
        </div>
        </>
      }

    </div>
  )
}

export default ViewIteam