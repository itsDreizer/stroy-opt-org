import React, { FC, PropsWithChildren } from "react";

import "./Labels.scss";

const LabelNovelty: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <div {...props} className="label label-novelty">
      {children}
    </div>
  );
};

export default LabelNovelty;
