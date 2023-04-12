import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clues() {
  return (
    <div>
      <label htmlFor="inputPassword5" className="form-label">
        Enter the URL for the clue.
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-labelledby="passwordHelpBlock"
      />
      <br />
      <div>
        <label htmlFor="formFileLg" className="form-label">
          Upload the QR code for the clue.
        </label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter the clue.
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default clue
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Hidden clue
        </label>
      </div>
      <br />
      <br />
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button">
          Submit clue
        </button>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button">
          See current clues
        </button>
      </div>
    </div>
  );
}

export default Clues;
