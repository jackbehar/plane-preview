import * as React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Button from "../../Button/Button";

export default (
  <Breadcrumbs uxpId="breadcrumbs-1">
    <Button variant="link-primary" size="md" uxpId="breadcrumbs-button-1">
      Link 1
    </Button>
    <Button variant="link-primary" size="md" uxpId="breadcrumbs-button-2">
      Link 2
    </Button>
    <Button variant="link-neutral" size="md" uxpId="breadcrumbs-button-3">
      Link 3
    </Button>
  </Breadcrumbs>
);
