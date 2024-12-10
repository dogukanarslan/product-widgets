import { useId } from 'react';

interface Props {
  isChecked: boolean;
  handleChange: (isActive: boolean) => void;
}

export const Toggle = (props: Props) => {
  const { isChecked, handleChange } = props;

  const toggleId = useId();

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        id={toggleId}
        type="checkbox"
        className="peer sr-only"
        checked={isChecked}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <label htmlFor={toggleId} className="hidden"></label>
      <div className="after-bottom:0 peer h-6 w-11 rounded-full border border-lightgray bg-white shadow-inner after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:border after:border-lightgray after:bg-white after:ring-lightgray after:ring-opacity-50 after:transition-all after:content-[''] after:hover:ring-4 peer-checked:bg-green peer-checked:after:translate-x-full peer-focus:ring-green"></div>
    </label>
  );
};
