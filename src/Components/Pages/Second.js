import React from 'react';
import './Second.css';
import { BiBarcodeReader } from 'react-icons/bi';
const Second = () => {
  return (
    <div >
   
        
   <h1 className='Display'>Display to/Work Order</h1>
        <div className='second'>
            <label htmlFor="" className='pkk'><BiBarcodeReader/> SCAN MU/PICK NUMBER</label>
            <input type="text" className='sec' />

        </div>

        <div className="third">
                <div>
                <label htmlFor=""><b>HU NUMBER</b></label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor=""><b>PICK ORDER</b></label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor=""><b>Transform Order Number#</b> </label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor=""><b> Transform Order Status </b> </label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor=""><b>Sales Order# </b> </label> <br />
                <input type="text" className='okk' />
                </div>

        </div>

        <div className="four">
                <div>
                <label htmlFor=""><b>Enter Delivery</b> </label> <br />
                <input type="text" className='opp' />

                </div>
                <div>
                <label htmlFor=""><b>Ship To Country </b> </label> <br />
                <input type="text" className='opp' />
                </div>
                <div>
                <label htmlFor=""> <b> Transformation Site </b> </label> <br />
                <input type="text" className='opp' />
                </div>



        </div>
        <div className='five'> 
            <b>Total No Of Items(1)</b>
        </div>

       

       {/* table */}

       <div classname="container">
    <div classname="py-4">
    
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>

          <th><input type="checkbox"/> </th>
          
            <th scope="col">Product Code</th>
      <th scope="col">Product Description</th>
      <th scope="col">Variant</th>
      <th scope="col">GSTIN</th>
      <th scope="col">Quantity</th>
      <th scope="col">UOM</th>
      <th scope="col"> Batch</th>
      <th scope="col">DOM</th>
      <th scope="col">SLED</th>
      <th scope="col">Comments</th>
      <th scope="col">Master Data Error</th>
      <th scope="col">Work Order #</th>
          </tr>
        </thead>
          <tbody>
    <tr>
      <td><input type="checkbox"/></td>
      <td>242436-12</td>
      <td>COUPLER AC ZOOM</td>
      <td>12</td>
      <td>10886705028634</td>
      <td>1</td>
      <td>EA</td>
      <td>BATCHHH</td>
      <td></td>
      <td></td>
      <td>MDM Check Success</td>
      <td>N/A</td>
      <td className='blue-WO1789'>WO1789</td>
    </tr> 
    
  </tbody>
  
      </table>
    </div>
  </div>

    </div>
  );
};

export default Second;