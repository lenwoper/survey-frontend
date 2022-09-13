export const isPublicApi = (url) => {
    const publicApiArray = [
      '/login/',
      '/api/register/',
    ];
    return Boolean(publicApiArray.filter(e => url?.includes(e))?.length);
  };

  export const stringifyError = (errors) => {
    
    return errors;
  };

  export const getLocalStorage = (key,initialValue) => {
    const resource = localStorage.getItem(key);
    return resource ? JSON.parse(resource) : initialValue;
  };

  export const asyncWrapper =(promise)=>
  promise.then((data)=>({data:data,error:null}))
  .catch((error)=>({data:null,error:error}));

  const isFunction =(fn)=> typeof fn ==='function';