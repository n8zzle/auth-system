import { BsExclamationTriangle } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  } else {
    return (
      <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
        <BsExclamationTriangle />
        <p>{message}</p>
      </div>
    );
  }
};
