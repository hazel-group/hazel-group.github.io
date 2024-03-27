import React from "react";
import { Panel } from "./common/Panel";
import { Product } from "./common/Product";
import { Arrow } from "./common/Arrow";

export const DataPanel = () => {
  return (
    <Panel title="数据面" width="90%">
      <div className="flex items-center justify-evenly w-full pt-4">
        <Product
          image={
            "https://gw.alicdn.com/imgextra/i2/O1CN014ZK8OP1msdEMGutsg_!!6000000005010-2-tps-166-160.png"
          }
          label="IoT/PC/Mobile"
        />
        <Arrow d="M0 50 H80" viewBox="0 0 100 100" />
        <Product
          image={
            "https://gw.alicdn.com/imgextra/i2/O1CN014fUi061REEMVnXgBv_!!6000000002079-2-tps-216-166.png"
          }
          label="网关/Higress"
        />
        <Arrow d="M0 50 H80" viewBox="0 0 100 100" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-full px-4">
            <Arrow
              d="M10 100  V60 A10 10 0 0 1 20 50 H80"
              viewBox="0 0 100 100"
              isTurn
              width="30%"
            />
            <div className="flex-1">
              <Product
                image={
                  "https://gw.alicdn.com/imgextra/i3/O1CN01ZVqiyi1sSQGBsdTtE_!!6000000005765-2-tps-216-174.png"
                }
                label={
                  <span>
                    <span className="text-[#567BE1]">异步调用 /</span>
                    <span>RocketMQ</span>
                  </span>
                }
              />
            </div>
            <Arrow
              d="M10 50 H80 A10 10 0 0 1 90 60 V80"
              viewBox="0 0 100 100"
              isTurn
              width="30%"
            />
          </div>
          <div className="flex">
            <Panel
              title="微服务集群A"
              width="50%"
              height="auto"
              titleStyle={{
                fontSize: "0.75rem",
                color: "#5C6170",
                textShadow: "none",
              }}
            >
              <Product
                image={
                  "https://gw.alicdn.com/imgextra/i2/O1CN01Qe8woR1OvKmr7JClT_!!6000000001767-2-tps-216-166.png"
                }
                label="Dubbo"
              />
              <Product
                image={
                  "https://gw.alicdn.com/imgextra/i1/O1CN01QS9gNx27T54BcAw5L_!!6000000007797-2-tps-216-166.png"
                }
                label="SCA"
              />
            </Panel>
            <Arrow
              width="200px"
              d="M0 50 H180"
              viewBox="0 0 200 100"
              label="同步调用"
            />
            <Panel
              title="微服务集群B"
              width="50%"
              height="auto"
              titleStyle={{
                fontSize: "0.75rem",
                color: "#5C6170",
                textShadow: "none",
                textAlign: "right",
              }}
            >
              <Product
                image={
                  "https://gw.alicdn.com/imgextra/i2/O1CN01Qe8woR1OvKmr7JClT_!!6000000001767-2-tps-216-166.png"
                }
                label="Dubbo"
              />
              <Product
                image={
                  "https://gw.alicdn.com/imgextra/i1/O1CN01QS9gNx27T54BcAw5L_!!6000000007797-2-tps-216-166.png"
                }
                label="SCA"
              />
            </Panel>
          </div>

          <div className="flex w-full px-4">
            <Arrow
              d="M10 0 V40 A10 10 0 0 0 20 50 H80"
              viewBox="0 0 100 100"
              isTurn
              width="30%"
            />
            <div className="flex-1">
              <Product
                // image={SeataImage}
                image={
                  "https://gw.alicdn.com/imgextra/i2/O1CN014fUi061REEMVnXgBv_!!6000000002079-2-tps-216-166.png"
                }
                label={
                  <span>
                    <span className="text-[#567BE1]">分布式事务 /</span>
                    <span>Seata</span>
                  </span>
                }
              />
            </div>

            <Arrow
              d="M100 0 V40 A10 10 0 0 1 90 50 H10"
              viewBox="0 0 100 100"
              isTurn
              width="30%"
            />
          </div>
        </div>

        <Arrow d="M0 50 H80" viewBox="0 0 100 100" />
        <Product
          image={
            "https://gw.alicdn.com/imgextra/i1/O1CN01VfCTpe1gHdXoaboh6_!!6000000004117-2-tps-200-211.png"
          }
          label="数据存储"
        />
      </div>
    </Panel>
  );
};
