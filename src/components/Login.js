import React from 'react'
import {useHistory} from "react-router-dom";
function Login(props){
    const history=useHistory();
        const submit=e=>{
            e.preventDefault();
            console.log('the value entered submit');
            console.log('value of props',props);
            if(props.email==="Hari@gmail.com" && props.password==="Hari1234")
        {
         history.push('/details')
        }
        else
        {
            props.setEmail('');
            props.setPassword('');

          history.push('/');
        
      }
           
          }

return(
    
    <div id="login">
    <h3 className="text-center text-white pt-5">Login form</h3>
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" onSubmit={submit}>
                        <h3 className="text-center text-dark">Login</h3>
                        <div className="form-group">
                            <label className="text-dark">Email:</label><br/>
                         <input type="text" name="email" id="email" className="form-control" value={props.email}
 onChange = {(e) => props.setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Password:</label><br/>
                         <input type="password" name="password" id="password" className="form-control" value={props.password}
 onChange = {(e) => props.setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                        <input type="submit" id="submit" name="submit" className="btn btn-primary btn-md" value="submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default Login;