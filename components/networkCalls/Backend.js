const url='http://192.168.12.73:8080/api/';
   export function postUser(first_name,last_name,email,password) {
       console.log("in here");
       console.log(first_name+" "+last_name+" "+email+" "+password);
       var postUrl=url+'v1/user/createUser';
        return fetch(postUrl,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: first_name,
                lastName: last_name,
                email: email,
                password: password
            }),
        });       
    }

    export function authenticateUser(email,password){
            console.log("in authenticate user");
            console.log(email+" "+password);
            var postUrl=url+'v1/user/authenticateUser';
            return fetch(postUrl,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
    }

    export function getUser(){
        var getUrl=url+'v1/user/getAllUser';
        return fetch(getUrl);
    }