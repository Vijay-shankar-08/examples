console.log("start");

console.log("mid");

function logInUser(email,password){     
    setTimeout(() =>{                   
        return {username : "abc"};      
    },2000)
    //console.log(email,password);
    
}



const obj = logInUser("vj@gmail.com",1234);   
console.log(obj);    
console.log("end");                         


//callback

console.log("start");

console.log("mid");

function logInUser(email,password,callback){     
    //hit backend...                    
    setTimeout(() =>{                   
        callback({username : "abc"});      
    },2000)
    
}
function getUserDetails(username,callback){
    //hit the backend..
    setTimeout(()=>{
        callback( {username,age: 25});
    },2000)
}
function postDeatils(username,callback){
    setTimeout(()=>{
        callback(["post1","post2"])
    },2000)
}


console.log("end");

logInUser("vj","1234",(user)=>{
    console.log(user);
    getUserDetails(user.username,(data)=>{
        console.log(data);
        postDeatils(data.username,(post)=>{
            console.log(post);
        });
    });

});



//promise..

//basic structure
const pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("resolved");
    },2000);

});
pro.then((value)=>{
    console.log(value);
}).catch((reason)=>{
    console.log(reason);
});





//detailed example



console.log("start");

console.log("mid");

function logInUser(email,password){     
    //hit backend...                    
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve({username:'vijay'});
        },2000);
    
    });
    return pro;
}
function getUserDetails(username){
    //hit the backend..
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({username,age:23,like:90});
        },2000);
   });
   return pro
}
function postDeatils(username){
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["post1","post2"]);
        },2000);
   });
   return pro
    
}


console.log("end");

logInUser("abc@mail.com","1234")
.then((userobj)=>{
    console.log(userobj)
getUserDetails(userobj.username
).then((userdetails)=>{
        console.log(userdetails);
postDeatils(userdetails.username)
.then((posts)=>{
            console.log(posts);
        }).catch((reason)=>{
            console.log(reason)
        })
    }).catch((reason)=>{
        console.log(reason);})
}).catch((reason)=>{
    console.log(reason);})


//asyn/await

 console.log("start");

console.log("mid");

function logInUser(email,password){     
    //hit backend...                    
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve({username:'vijay',email});
        },2000);
    
    });
    return pro;
};
function getUserDetails(username){
    //hit the backend..
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({username,age:23,like:90});
        },2000);
   });
   return pro
};
function postDeatils(username){
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["post1","post2"]);
            //reject("this is error")     // it will go in the error section
        },2000);
   });
   return pro
    
};


console.log("end");

const testing =async()=>{
    const arr = [{"abc@gmail.com":12345},{"efg@gmail.com":56789},{"hijk@gmail.com":98765}];
    for(i = 0;i<arr.length;i++){
        const userobj =  await logInUser(arr[i]); //promise {pending}
        console.log(userobj);
        const userdetails = await getUserDetails(userobj.username);
        console.log(userdetails);
        const posts = await postDeatils(userdetails.username);
        console.log(posts);
    }
    
    // userobj.then(userobject => console.log(userobject));      //used to access the promise pending result
};

testing()



const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000)
    })
  }
  
  const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
  }
  
  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
  })
