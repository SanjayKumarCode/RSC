import React from 'react';
import './Last.css';
import { BiBarcodeReader } from 'react-icons/bi';
const Last = () => {
  return (
    < >
   
        
        
         <h1 className='Display'>Display to/Work Order</h1>
         {/* <form className='form'>
         </form> */}

         <div className='second'>
            <label htmlFor="" className='pkk'><BiBarcodeReader/> SCAN HU/PICK NUMBER</label>
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
            <b>Total No Of Items(0)</b>
        </div>

        <div className='six'>
            <table>
            
                    <thead>
                            <tr>
                                <th><input type="checkbox" style={{marginLeft : "-1350px"}}/> </th>
                                
                                
                            </tr>
                    </thead>
                    <tbody>
                            <div className='move'><b>No Data</b></div>
                    </tbody>

            </table>

        </div>  











    </>
  );
};

export default Last;