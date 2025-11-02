import { ComponentProps } from "react";

type Props = {
  variant?: "text" | "option";
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  additionalStyles?: string;
} & ComponentProps<"input">;

const Input: React.FC<Props> = ({
  label,
  name,
  variant = "text",
  type = "text",
  value,
  additionalStyles,
  ...rest
}) => {
  if (variant === "option") {
    return (
      //   <div className="border-primary accent-primary cursor-pointer rounded-lg border px-6 py-[18px]">
      //   <option className="accent-primary" value={value}>
      //     {value}
      //   </option>
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
      <label
        className="text-darker text-xs font-bold capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        id={name}
        className="border-border text-darker/40 focus:outline-primary rounded-lg border py-[18px] pl-6 text-sm font-bold"
        // className="focus:border-primary active:border-primary border-border text-darker rounded-lg border border-white py-[18px] pl-6 text-sm font-bold focus:outline-none"
      />
    </div>
  );
};

export default Input;
