import React, { FC, PropsWithChildren } from "react";

import "./Labels.scss";

const LabelSale: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <div {...props} className="label label-sale">
      {children}
    </div>
  );
};

export default LabelSale;
