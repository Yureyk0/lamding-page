import "./CustomButton.css";

interface CustomButtonProps {
  title: string;
  active?: boolean;
}

export const CustomButton = ({ title, active = true }: CustomButtonProps) => {
  return (
    <button
      className={"button" + (active ? " button-active" : " button-border")}
    >
      {title}
    </button>
  );
};
