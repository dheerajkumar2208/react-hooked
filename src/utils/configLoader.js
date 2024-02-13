const loadConfig = (application) => {
    try {
           return import(`../config/metadata/${application}.json`);
    }
    catch(err){
      console.log('this is er,', err)
  
    }
    
   
     
  };
  
  export default loadConfig;
  