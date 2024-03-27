import React from "react";
import { Panel } from "./common/Panel";
import { Product } from "./common/Product";
import { hoverContentMockData } from "../utils";
import { ProductPanel } from "./common/ProductPanel";

export const TelemetryPanel = () => {
  return (
    <ProductPanel title="可观测" width="25%">
      <Product
        image={
          "https://gw.alicdn.com/imgextra/i1/O1CN01JpJfq81KvYW9T8HlT_!!6000000001226-2-tps-216-174.png"
        }
        label="SkyWalking"
        hoverContent={hoverContentMockData}
      />
    </ProductPanel>
  );
};
