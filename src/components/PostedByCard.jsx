import React from "react";

const PostedByCard = () => {
  return (
    <div className="card border-0 rounded-4 shadow-sm">
      <div className="row g-0 ">
        <div className="col-4 align-content-center p-2">
          <div className="ratio ratio-1x1">
            <img
              src="https://s3-alpha-sig.figma.com/img/a223/540d/2e10a474358a5f36b3329ce46d53be1a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GoPu32nglfZbVSm-ZdaSPY5LXRy1Sh6AvZR-EfmgfS3CHrL9vDxSbEtoJCoQKUYpWeTJIslmNHqQQr2NEY1sf73QWq2c0l9-vUFV6kwRT5VTR0GgPGZtTFZMT27GHoAMveeTq5t06Bv9cp7OSCCVzS7TQ2sAqG2Tl1JDEWa0DuawYf~SJvm1cKex~ri5pimKBN3yaTw6b4vBEaI5PP3rifeNuCz27AA~DhBVuWq6c7bxiLdtADejxx-l74V1tE3gIPcFh5R6tpT4RlwrMIgwL~WCKBKNh6VSJNaPhjdFqd1fCSQc9BMMGy6Ltno-RDDMmjaOnvbbmniRs~UTzb4URg__"
              className="img-fluid rounded-4 object-fit-cover"
              alt="..."
            />
          </div>
        </div>
        <div className="col-8">
          <div className="card-body">
            <p className="card-text">
              <small className="text-body-secondary">Posted By</small>
            </p>
            <h5 className="card-title">Godson</h5>
            <p className="card-text text-primary">Call : 98765XXXXX</p>
            <button type="button" class="btn bg__blue text-white btn-sm w-100">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedByCard;
