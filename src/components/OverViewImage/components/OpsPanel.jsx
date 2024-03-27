import React from "react";
import { Panel } from "./common/Panel";
import { Product } from "./common/Product";
import { hoverContentMockData } from "../utils";
import { ProductPanel } from "./common/ProductPanel";

export const OpsPanel = () => {
  return (
    <ProductPanel title="运维面" width="25%" panelSkewDir={-1}>
      <Product
        image={
          "https://gw.alicdn.com/imgextra/i2/O1CN01S2OTiK1o8wxUvatne_!!6000000005181-2-tps-216-170.png"
        }
        label="KubeVela"
        hoverContent={hoverContentMockData}
      />
      <Product
        image={
          "https://gw.alicdn.com/imgextra/i4/O1CN01b9Zgrx1px9zjkxaBN_!!6000000005426-2-tps-216-160.png"
        }
        label="Kubernetes"
        hoverContent={hoverContentMockData}
      />
    </ProductPanel>
  );
};
