import React from "react";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { hoverContentMockData } from "../../utils";
import { PopupContent } from "./PopupContent";
import { AppContext } from "../../context";

export const Product = ({
  image,
  label,
  hoverable = true,
  hoverContent = hoverContentMockData,
}) => {
  const [isHovering, setHovering] = useState(false);
  const [popupPosition, setPopupPosition] = useState({});
  const triggerRef = useRef(null);
  const popupRef = useRef(null);
  const appContext = useContext(AppContext);

  const onMouseEnter = ({}) => {
    if (triggerRef.current && popupRef.current) {
      const appWidth =
        appContext.width === "100%"
          ? window.innerWidth
          : parseInt(appContext.width);
      const appHeight = document.querySelector(
        "#overview-image-root"
      ).clientHeight;
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popupRect = popupRef.current.getBoundingClientRect();
      // const rightEdgeDistance = appWidth - triggerRect.right;
      // const bottomEdgeDistance = appHeight - triggerRect.bottom;
      // const topEdgeDistance = triggerRect.top;

      //fixed布局
      // const position = {
      //   left:
      //     rightEdgeDistance >= popupRect.width
      //       ? `${triggerRect.right-triggerRect.width/2}px`
      //       : // : `${appWidth - popupRect.width - 50}px`,
      //         `${triggerRect.left - popupRect.width+triggerRect.width/2}px`,
      //   top:
      //     bottomEdgeDistance < popupRect.height
      //       ? `${triggerRect.top - popupRect.height}px`
      //       : `${triggerRect.bottom}px`,
      // };
      // //如果上下边距都不够，就放在当前元素中心，居左或者居右
      // if (
      //   bottomEdgeDistance < popupRect.height &&
      //   topEdgeDistance < popupRect.height
      // ) {
      //   position.top = `${
      //     triggerRect.top + triggerRect.height / 2 - popupRect.height / 2
      //   }px`;
      // }
      //absolute布局
      const rootRect = document
        .querySelector("#overview-image-root")
        .getBoundingClientRect();
      const topEdgeDistance = triggerRect.top - rootRect.top;
      const rightEdgeDistance = rootRect.right - triggerRect.right;
      const bottomEdgeDistance = rootRect.bottom - triggerRect.bottom;
      // const rightEdgeDistance=triggerRef.current.offsetLeft+triggerRect.width
      // const bottomEdgeDistance=appHeight-triggerRef.current.offsetTop-triggerRect.height
      // console.log('bottom edge',bottomEdgeDistance,)
      // const topEdgeDistance=triggerRef.current.offsetTop
      const position = {
        left:
          rightEdgeDistance >= popupRect.width
            ? `${triggerRect.width / 2}px`
            : `-${popupRect.width - triggerRect.width / 2}px`,
        top:
          bottomEdgeDistance < popupRect.height
            ? `-${popupRect.height - triggerRect.height - 20}px`
            : `${triggerRect.height}px`,
      };
      if (
        bottomEdgeDistance < popupRect.height &&
        topEdgeDistance < popupRect.height
      ) {
        position.top = `-${popupRect.height / 2 - triggerRect.height / 2}px`;
      }

      setPopupPosition(position);
    }
    setHovering(true);
  };
  const onMouseLeave = (event) => {
    //如果鼠标的坐标在弹窗上，不关闭
    const { clientX, clientY } = event;
    const popupRect = popupRef.current.getBoundingClientRect();
    const isOnPopup =
      clientX >= popupRect.left &&
      clientX <= popupRect.right &&
      clientY >= popupRect.top &&
      clientY <= popupRect.bottom;
    if (isOnPopup) {
      return;
    }
    setHovering(false);
  };
  return (
    <div class="relative cursor-pointer flex flex-col items-center justify-center p-1 ">
      <div
        class="w-16 h-16"
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onTouchStart={onMouseEnter}
        onTouchEnd={onMouseLeave}
        ref={triggerRef}
      >
        <img
          class="w-full object-cover rounded-lg mx-auto"
          src={image}
          alt={label}
        />
      </div>

      <p class="text-center text-[#5C6170] text-xs">{label}</p>
      {hoverable && (
        // <div class="absolute left-1/2  opacity-0 group-hover:opacity-100 visibility-hidden group-hover:visibility-visible transition-opacity duration-300 z-10">
        //   <PopupContent {...hoverContent} title={label} />
        // </div>
        <div
          className="absolute z-10 shadow-md -mt-20 ml-2"
          style={{
            visibility: isHovering ? "visible" : "hidden",
            ...popupPosition,
          }}
          onMouseLeave={() => setHovering(false)}
          ref={popupRef}
        >
          <PopupContent {...hoverContent} title={label} image={image} />
        </div>
      )}
    </div>
  );
};
