export const LOGO =
 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const Poster ='https://image.tmdb.org/t/p/w300'

 export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDBKEY
    },
  };

  export const langOpt =[
    {name:"eng", 
      identifier:"english "
    },{
      name:"hin",
      identifier:"hindi"
    },{
      name:"russ",
      identifier:"russia"
    }
  ]

 