import React from "react";
import { Panel } from "./common/Panel";
import { Product } from "./common/Product";
import { hoverContentMockData } from "../utils";
import { ProductPanel } from "./common/ProductPanel";

export const GovernancePanel = ({}) => {
  return (
    <ProductPanel title="治理面" panelSkewDir={-1}>
      <Product
        image={
          "https://gw.alicdn.com/imgextra/i4/O1CN012zo8OT21NEJMg5vvT_!!6000000006972-2-tps-216-174.png"
        }
        label="Sentinel"
        hoverContent={hoverContentMockData}
      />
      <Product
        image={
          "https://gw.alicdn.com/imgextra/i3/O1CN018gvzgw1GnzVoYQSib_!!6000000000668-2-tps-216-148.png"
        }
        label="ChaosBlade"
        hoverContent={hoverContentMockData}
      />
      <Product
        image={
          "https://gw.alicdn.com/imgextra/i1/O1CN01yZolgm1U0RHWgJGC6_!!6000000002455-2-tps-216-178.png"
        }
        label="AppActive"
        hoverContent={hoverContentMockData}
      />
    </ProductPanel>
  );
};
