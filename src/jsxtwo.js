const user ={
    firstName : "Nikunj",
    lastName :"Basnet"
};

function Add(user) {
    return user.firstName + '' + user.lastName;
    
}
const Join= (
    <h1>Hello,{Add(user)}!</h1>
);
function Greeting(user){
     if(user){
        return 
        <h1>Hello,{Add(user)}!</h1>;   
        
     }
     return <h1>Hello nik</h1>
}

export default Greeting;