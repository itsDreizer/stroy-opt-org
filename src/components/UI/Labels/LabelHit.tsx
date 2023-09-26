import React, { FC, PropsWithChildren } from "react";

import "./Labels.scss";

const LabelHit: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <div {...props} className="label label-hit">
      {children}
    </div>
  );
};

export default LabelHit;
