import { PropsWithChildren, ReactElement, useState } from "react";
import { Button, ButtonProps } from "./button";
import { ReloadIcon } from "@radix-ui/react-icons";

export interface ActionLoadingButtonProps
  extends PropsWithChildren,
    ButtonProps {}

export const ActionLoadingButton = (
  props: ActionLoadingButtonProps
): ReactElement => {
  const { children, ...rest } = props;
  const [loading, setLoading] = useState(false);

  const loadingEl = loading ? (
    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
  ) : (
    <></>
  );
  return (
    <Button {...rest}>
      {loadingEl}
      {children}
    </Button>
  );
};
