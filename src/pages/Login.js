import './Login.css';

function Login() {
  return (
    <div className='Logiform'>
      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">Student ID</label><br></br>
          <input type="text" className="form-control is-valid" id="validationServer01" value="" required />
          <div className="valid-feedback">
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer02" className="form-label">PIN</label><br></br>
          <input type="text" className="form-control is-valid" id="validationServer02" value="" required />
          <div className="valid-feedback">
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
