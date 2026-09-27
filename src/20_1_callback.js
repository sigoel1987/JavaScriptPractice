function getData(callback){
    console.log('getting data from DB');
    setTimeout(()=>{
        callback();
    },4000);
}

getData(()=>{
    console.log('user data');
})