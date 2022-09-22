// import avatar from "assets/avatar.png";
export const baseURL ='https://serv.tiwari.cc';
export const isPublicApi = (url) => {
  const publicApiArray = [
    '/login',
  ];
  return Boolean(publicApiArray.filter(e => url?.includes(e))?.length);
};

export const stringifyError = (errors) => {
  return errors;
};

export const getLocalStorage = (key, initialValue) => {
  const resource = localStorage.getItem(key);
  return resource ? JSON.parse(resource) : initialValue;
};

export const asyncWrapper = (promise) =>
  promise.then((data) => ({ data: data, error: null }))
    .catch((error) => ({ data: null, error: error }));

export const isFunction = (fn) => typeof fn === 'function';

export const getImg = (slug) => (slug ? process.env.BASE_URL + slug : 'avatar');
export const type = {
  text: 'text',
  radio: 'radio',
  textarea: 'textarea',
  file: 'file',
  select: 'select',
  checkbox: 'checkbox'
};


export const navbarRoutesLink = [
  {
    route_link: './dashbaord',
    route_name: 'DASHBAORD'
  },
  {
    route_link: './form',
    route_name: 'FORM'
  },
  {
    route_link: './user',
    route_name: 'USER'
  },
  {
    route_link: './faq',
    route_name: 'FAQ'
  },
  {
    route_link: './theme',
    route_name: 'THEME'
  },
]