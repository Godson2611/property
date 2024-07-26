import React from "react";
import Layouts from "../layouts/Layouts";
import PropertyMain from "../containers/PropertyMain";

const Property = () => {
  return (
    <div className="overflow-hidden">
      <Layouts>
        <PropertyMain />
      </Layouts>
    </div>
  );
};

export default Property;
