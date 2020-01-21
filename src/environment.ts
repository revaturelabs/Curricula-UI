
let devEnvironment = {
    APIBaseUrl:'http://localhost:1910',
    UIBaseUrl:'http://localhost:3000'
}

let prodEnvironment = {
    APIBaseUrl:':8080',
    UIBaseUrl:''
}


export let environment = {
    APIBaseUrl:'',
    UIBaseUrl:''
}

if(process.env.REACT_APP_ENV === 'dev'){
    environment = devEnvironment
}else if(process.env.REACT_APP_ENV === 'prod'){
    environment = prodEnvironment
}

