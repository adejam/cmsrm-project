import React, { ReactNode } from 'react';

// Define a type for the props
type PolymorphicComponentProps<T extends React.ElementType> = {
  as?: T; // Accepts any HTML element as a string
  children?: ReactNode; // Children of the component
  className?: string; // CSS class name
} & React.ComponentProps<T>; // Include all props of the specified HTML element

// Define the component
function PolymorphicComponent<T extends React.ElementType = 'div'>({
  as: Component = 'div',
  children,
  className,
  ...props
}: PolymorphicComponentProps<T>) {
  return <Component className={className} {...props}>{children}</Component>;
}

export default PolymorphicComponent
