import React from "react";

const ContactForm = () => {
  return (
    <div className="container bg-white rounded-4 p-4 mt-4 shadow-sm">
      <form>
        <legend>Contact Us</legend>
        <hr />
        <div class="mb-3 mt-4">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="email"
            class="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email Address
          </label>
          <input
            type="password"
            class="form-control"
            id="email"
            placeholder="Enter your addressr"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email Address
          </label>
          <input
            type="password"
            class="form-control"
            id="email"
            placeholder="Enter your addressr"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email Address
          </label>
          <input
            type="password"
            class="form-control"
            id="email"
            placeholder="Enter your addressr"
          />
        </div>
        <button
          type="submit"
          class="btn bg__blue text-white w-100 text-uppercase "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
