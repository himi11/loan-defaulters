

import './loan-defaulter-form.css'

export default function PredictDefaulterForm(){

    return(
        <div className="form">

        
        <form>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-2">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
</div>

    );

}