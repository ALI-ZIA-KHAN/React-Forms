import React, { useState } from 'react';

// const App=()=> {
  

//   const [name,setName]=useState("");

//   const [lastname,setLastName]=useState("");

//   const [fullname,setFullName]=useState("");  //Another hook just to use submit button to show names otherwise would be reflected as pr change in the field no use of button then
  
//   const [lastNameshow,setLastNameNew]=useState(""); 
  
  
//   const inpEvn=(event)=>{    
  
//     console.log(event);               //by events we get a whole object
//     setName(event.target.value);

//   }

//   const inpEvn_two=(event)=>{
//     setLastName(event.target.value);
//   }

//   const onSubmits=(event)=>{
//     event.preventDefault();  //default behaviour ko prevent kre submit k
//         setFullName(name);
//         setLastNameNew(lastname);
//   }
//   return(
//   <>


// {/* <div>
//  <h1> HELLO {fullname}</h1>


//   <input onChange={inpEvn} type="text" placeholder="Enter Your Name" value={name}/>
//   <button onClick={onSubmit} >Click Me:</button>
//  </div> */}













// 2ND WAY WITH FORM
//  <div className="main_div">
//    <form onSubmit={onSubmits} >       {/*   //now to show what user type in heading while having form tag which has its own/different bhvr */}
//  <div>

//  <h1> HELLO {fullname} {lastNameshow}</h1>


//   <input onChange={inpEvn} type="text" placeholder="Enter Your Name" value={name}/>
//   <br/>
//   <input onChange={inpEvn_two} type="text" placeholder="Enter Your last name" value={lastname}/>

  
  
  
//   <button type ="submit" >Click Me:</button>  {/*//now whenever this button is clicked the type submit will call onSubmit */}
 
//  </div>
// </form>
// </div>
//   </> );
// }

// export default App;



/*  1ST  & 2ND WAY ENDS HERE   ^^  VID #35 */


const App=()=> {
  

  const [fullName,setFullName]=useState({

    fname: "",    //useState can also take n return object
    lname: "",
    email:"",
    phone:"",
    qua:"",
  });
  
 
  const inpEvn=(event)=>{    
   console.log(event.target.value);
    console.log(event.target.name);
  //  console.log(event.target.placeholder);

  // const value=event.target.value;
  // const name=event.target.name;   //iski jga obj destrucring ki hai neeche isk aur asaani k lye


    const {value,name}=event.target;


  setFullName((preValue)=>{
                                 //setState func can get acces to prev state n here we getting that
    console.log(preValue);

    return{
      ...preValue,
      
      [name]:value,        //instead of so many ifs just these two lines
                          //each time event call this triggers and preVale gives obj and only those field value which is changed it is assigned to that name obj key
    };


//     if(name==='fname'){    //name here refers to name at 101
//            return{ 
//              fname: value,    
//              lname: preValue.lname,   //function is same for both at event
//              email:preValue.email,
//              phone:preValue.phone,
//   };
// }else if(name==='lname'){            //first time event is called for first field so  if bcm true
//    return{                            //second time event is called for seconf field so else if bcm true

//             fname: preValue.fname,    
//             lname: value,
//             email:preValue.email,
//             phone:preValue.phone,
//    }


// } else if(name==='email'){            
//   return{                           

//            fname: preValue.fname,    
//            lname: preValue.lname,
//            email:value,
//            phone:preValue.phone,
//   }


// } else if(name==='phone'){            
//   return{                            

//            fname: preValue.fname,    
//            lname: preValue.lname,
//            email:preValue.email,
//            phone:value,
//   }


// } 

       });
  }

 
  const onSubmits=(event)=>{
    event.preventDefault();
    alert('Form Submitted'); 
  }
 
 
 
  return(
  <>



 <div className="main_div">
   <form onSubmit={onSubmits} >       {/*   //now to show what user type in heading while having form tag which has its own/different bhvr */}
 <div>

 <h1> HELLO {fullName.fname} {fullName.lname}</h1>
 <p>{fullName.email} </p>
 <p>{fullName.phone} </p>
 <p>{fullName.qua} </p>



  <input onChange={inpEvn} type="text" name="fname" autoComplete='off' placeholder="Enter Your Name" value={fullName.fname}/>
  <br/>
  <input onChange={inpEvn} type="text" name="lname" autoComplete='off' placeholder="Enter Your last name" value={fullName.lname}/>
  <br/>
  <input onChange={inpEvn} type="email" name="email" autoComplete='off' placeholder="Enter Your email" value={fullName.email}/>
  <br/>
  <input onChange={inpEvn} type="number" name="phone" autoComplete='off' placeholder="Enter Your phone no" value={fullName.phone}/>
  <br/>
  <input onChange={inpEvn} type="text" name="qua" autoComplete='off' placeholder="Enter Your qualification" value={fullName.qua}/>

  
  
  
  <button type ="submit" >Click Me:</button>  {/*//now whenever this button is clicked the type submit will call onSubmit */}
 
 </div>
</form>
</div>
  </> );
}
export default App;