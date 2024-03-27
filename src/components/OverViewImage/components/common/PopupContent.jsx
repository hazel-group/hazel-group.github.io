import React from "react";
import { twMerge } from "tailwind-merge";

export const PopupContent = ({ image, title, labels, links }) => {
  return (
    <div
      className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto"
      style={{ background: "white" }}
    >
      <div className="flex flex-wrap items-center border-b border-black ">
        <div className="flex-1 flex justify-start items-center">
          <img src={image} alt="logo" className="h-16 mr-4" />
        </div>
        <div className="flex-1 flex justify-end">
          {labels.map((label, idx) => (
            <span
              key={idx}
              className="bg-[#8bb4f5] bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="font-semibold mb-4">{title}</div>
        {Object.entries(links).map(
          (
            [key, { link, stars, forks, titleClassName, linkClassname }],
            idx
          ) => (
            <div key={idx} className="mb-3 flex justify-between">
              <div
                className={twMerge(
                  "text-gray-700 text-sm mb-1",
                  titleClassName
                )}
              >
                {key}:
              </div>
              <div className="w-[70%] overflow-hidden ">
                <a href={link} className={twMerge("truncate", linkClassname)}>
                  {link}
                </a>
                <div className="flex justify-start">
                  {stars && (
                    <div className="flex items-center text-xs text-[#8498ee] bg-[#ced3f1] py-1 px-2 rounded">
                      <svg
                        t="1711507787559"
                        class="icon w-4 h-4 mr-1"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5263"
                        width="200"
                        height="200"
                        fill="currentColor"
                      >
                        <path
                          d="M960 384l-313.6-40.96L512 64 377.6 343.04 64 384l230.4 208.64L234.88 896 512 746.88 789.12 896l-59.52-303.36L960 384z"
                          p-id="5264"
                        ></path>
                      </svg>
                      <span>{stars}</span>
                    </div>
                  )}
                  {forks && (
                    <div className="ml-2 flex items-center text-xs text-[#8498ee] bg-[#ced3f1] py-1 px-2 rounded">
                      <svg
                        t="1711507920163"
                        class="icon w-4 h-4 mr-1"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7237"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M896 128a128 128 0 1 0-164.010667 122.88V378.453333l-220.288 220.16-220.202666-220.16V251.008A128.042667 128.042667 0 0 0 256 0a128 128 0 0 0-36.48 250.709333v156.885334l-0.298667 0.298666 256.768 256.810667v108.373333A128.085333 128.085333 0 0 0 512 1024a128 128 0 0 0 36.010667-250.88v-108.928L804.266667 407.893333l-0.298667-0.298666V250.88A128.085333 128.085333 0 0 0 896 128zM199.978667 128a56.021333 56.021333 0 1 1 112.085333 0.085333A56.021333 56.021333 0 0 1 199.978667 128z m368 768a56.021333 56.021333 0 1 1-112.042667-0.085333 56.021333 56.021333 0 0 1 112.085333 0.085333zM768 183.978667a56.021333 56.021333 0 1 1 0.085333-112.042667A56.021333 56.021333 0 0 1 768 184.021333z"
                          fill="currentColor"
                          opacity=".65"
                          p-id="7238"
                        ></path>
                      </svg>
                      <span>{forks}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
