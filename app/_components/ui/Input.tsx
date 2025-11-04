import { ComponentProps } from "react";

type Props = {
  variant?: "text" | "option";
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  additionalStyles?: string;
  error?: string;
} & ComponentProps<"input">;

const Input: React.FC<Props> = ({
  label,
  name,
  variant = "text",
  type = "text",
  value,
  additionalStyles,
  error,
  ...rest
}) => {
  if (variant === "option") {
    return (
      <div className="border-border flex w-full min-w-full flex-row items-center justify-start gap-x-5 rounded-lg border py-[18px] pl-4">
        <input
          {...rest}
          type="radio"
          value={value}
          className="accent-primary cursor-pointer"
        />
        <span className="text-darker capitalize">{label}</span>
      </div>
    );
  }
  return (
    <div className={`${additionalStyles} flex flex-col gap-y-2`}>
      <div className="flex flex-row items-center justify-between">
        <label
          className="text-darker text-xs font-bold capitalize"
          htmlFor={name}
        >
          {label}
        </label>
        {error && (
          <span className="text-xs text-red-600 md:text-sm">{error}</span>
        )}
      </div>
      <input
        {...rest}
        type={type}
        name={name}
        id={name}
        className="border-border text-darker/40 focus:outline-primary rounded-lg border py-[18px] pl-6 text-sm font-bold"
      />
    </div>
  );
};

export default Input;
