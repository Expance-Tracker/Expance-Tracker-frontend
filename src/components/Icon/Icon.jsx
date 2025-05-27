import { forwardRef } from "react";

const Icon = forwardRef(
  (
    {
      name,
      size,
      height,
      className,
      width,
      style,
      onClick,
      id,
      color,
      stroke,
      fill,
      disableDefaultSize,
      ...props
    },
    ref
  ) => {
    const vSize = size ? `${size}px` : disableDefaultSize ? undefined : "20px";
    const vHeight = height ? `${height}px` : undefined;
    const vWidth = width ? `${width}px` : undefined;

    return (
      <svg
        className={className}
        style={{
          ...style,
          width: vWidth || vSize,
          height: vHeight || vSize,
          color: color || undefined
        }}
        onClick={onClick}
        id={id}
        ref={ref}
        {...props}
      >
        <use
          xlinkHref={`#${name}`}
          id={id}
          stroke={stroke || undefined}
          fill={fill || undefined}
        />
      </svg>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
