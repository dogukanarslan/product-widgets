import {
  changeColour,
  linkProfile,
  ProductWidget,
} from 'src/slices/widgetSlice';
import { Toggle } from 'src/components/Toggle';
import Logo from 'src/svgs/logo.svg?react';
import { Checkbox } from 'src/components/Checkbox';
import { ColourButtons } from 'src/components/ColourButtons';
import { useAppDispatch } from 'src/store';
import { activateWidget } from 'src/slices/widgetSlice';
import { getColourClasses } from 'src/utils';

interface Props {
  widget: ProductWidget;
}

export const Widget = (props: Props) => {
  const {
    widget: { id, amount, active, action, type, selectedColor, linked },
  } = props;

  const dispatch = useAppDispatch();

  return (
    <div className="space-y-4">
      <div
        className={`flex gap-5 rounded-md p-5${getColourClasses(selectedColor)}`}
      >
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <span className="text-xs">greenspark</span>
        </div>
        <div className="flex flex-col justify-center">
          <div>This product {action}</div>
          <div className="font-bold">
            {amount} {type}
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm text-green">
        <div className="flex justify-between">
          <span>Link to public profile</span>{' '}
          <Checkbox
            isChecked={linked}
            handleChange={() => dispatch(linkProfile(id))}
          />
        </div>
        <div className="flex justify-between">
          <span>Badge colour</span>{' '}
          <ColourButtons
            selectedColour={selectedColor}
            getColour={(colour) =>
              dispatch(changeColour({ widgetId: id, colour }))
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Activate badge</span>{' '}
          <Toggle
            isChecked={active}
            handleChange={(isActive) =>
              dispatch(activateWidget({ widgetId: id, active: isActive }))
            }
          />
        </div>
      </div>
    </div>
  );
};
