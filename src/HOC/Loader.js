import { Frame, Loading } from "@shopify/polaris";
import React, { useState } from "react";

const Loader = (OriginalComponent) => {
  function NewComponent() {
    const [loading, setLoading] = useState(false)
    return (
      <>
     
        {loading && <Frame><Loading /></Frame>}
        <OriginalComponent loading={loading} setLoading={setLoading}/>
      </>
    );
  }
  return NewComponent
};

export default Loader;
