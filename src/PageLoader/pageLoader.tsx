import "./pageLoader.scss";

import { Atom } from "react-loading-indicators";

import React, { PropsWithChildren } from "react";

type TPageLoaderProps = PropsWithChildren<{ loading: boolean }>;

export const PageLoader = ({ loading, children }: TPageLoaderProps) => (
  <>
    <div
      className="page-loader"
      style={{ visibility: loading ? "visible" : "hidden" }}
    >
      <Atom color="#4f524f" size="medium" text="Загрузка..." textColor="" />
    </div>
    <div style={{ visibility: loading ? "hidden" : "visible" }}>{children}</div>
  </>
);
