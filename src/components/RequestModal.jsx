import React from "react";

const RequestModal = () => {
  return (
    <div
      class="modal fade"
      id="requestModal"
      tabindex="-1"
      aria-labelledby="requestModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
          <div class="modal-header">
            <h1 class="modal-title fs-5 blue" id="requestModalLabel">
              Request Callback
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <small for="exampleInputEmail1" class="form-label light__gray">
                  Email address
                </small>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <small
                  for="exampleInputPassword1"
                  class="form-label light__gray"
                >
                  Password
                </small>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <small class="form-check-label light__gray" for="exampleCheck1">
                  This is your WhatsApp number
                </small>
              </div>
            </form>
          </div>
          <button type="button" class="btn bg__blue text-white w-100">
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
