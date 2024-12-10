import CheckMark from 'src/svgs/check-mark.svg?react';

interface Props {
  isChecked: boolean;
  handleChange: () => void;
}

export const Checkbox = (props: Props) => {
  const { isChecked, handleChange } = props;

  return (
    <div className="group flex items-center justify-center">
      <input
        type="checkbox"
        value=""
        checked={isChecked}
        onChange={handleChange}
        className="peer relative h-6 w-6 cursor-pointer appearance-none rounded border-2 border-gray bg-white checked:border-none checked:bg-green"
      />
      <div className="pointer-events-none absolute hidden rounded-full bg-lightgray p-6 opacity-50 group-hover:block"></div>
      <CheckMark className="pointer-events-none absolute hidden h-4 w-4 text-white peer-checked:block" />
    </div>
  );
};
