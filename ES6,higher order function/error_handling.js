try{
    console.log('no error')
    console.log(x);
    // this will not be executed as error is found in upper line
    console.log('try this');
}catch(e)
{
    console.log('the error occured')
}finally{
    console.log("Always executed")
}