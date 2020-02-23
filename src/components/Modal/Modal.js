import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export const Modal = ({ onClose, onSave }) => (
  <div className="modal custom__modal">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add todo</h5>
          <button
            onClick={onClose}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#" onSubmit={onSave}>
            <div className="form-group row">
              <label
                htmlFor="staticEmail"
                className="col-sm-2 col-form-label"
              >
                  Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Input title"
                  className="form-control"
                />
              </div>
            </div>

            <button
              name="save"
              type="submit"
              className="btn btn-primary"
            >
                  Save changes
            </button>
          </form>
        </div>
        <div className="modal-footer">

          <button
            name="close"
            onClick={onClose}
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
