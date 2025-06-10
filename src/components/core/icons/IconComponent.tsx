import * as PhosphorIcons from "phosphor-react-native";
import { IconProps } from "phosphor-react-native";
import React from "react";

type IconComponentProps = IconProps & {
  name: keyof typeof PhosphorIcons;
};

function IconComponent({ name, ...rest }: IconComponentProps) {
  const Icon = PhosphorIcons[name] as React.ComponentType<IconProps>;

  if (!Icon) return null;

  return <Icon {...rest} />;
}

export default IconComponent;
