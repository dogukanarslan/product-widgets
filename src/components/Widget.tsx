import {
  changeColour,
  linkProfile,
  ProductWidget,
} from 'src/slices/widgetSlice';
import { Toggle } from 'src/components/Toggle';
import { Tooltip } from 'src/components/Tooltip';
import { Checkbox } from 'src/components/Checkbox';
import { ColourButtons } from 'src/components/ColourButtons';
import { useAppDispatch } from 'src/store';
import { activateWidget } from 'src/slices/widgetSlice';
import { generateWidgetLabel, getColourClasses } from 'src/utils';
import Logo from 'src/svgs/logo.svg?react';
import InfoOutline from 'src/svgs/info-outline.svg?react';

interface Props {
  widget: ProductWidget;
}

export const Widget = (props: Props) => {
  const {
    widget: { id, amount, active, action, type, selectedColor, linked },
  } = props;

  const dispatch = useAppDispatch();

  return (
    <div className="w-full space-y-4">
      <div
        className={`flex gap-5 rounded-md p-3${getColourClasses(selectedColor)}`}
      >
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <span className="text-xs">greenspark</span>
        </div>
        <div className="flex flex-col justify-center">
          <div>This product {action}</div>
          <div className="font-bold">{generateWidgetLabel(type, amount)}</div>
        </div>
      </div>
      <div className="space-y-4 text-sm text-green">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span>Link to public profile</span>
            <Tooltip
              message={
                <>
                  This widget links directly to your public profile so that you
                  can easily share your impact with your customers. Turn it off
                  here if you do not want the badge to link to it
                  <div className="my-4">
                    <a href="#" className="font-bold text-green">
                      View Public Profile
                    </a>
                  </div>
                </>
              }
            >
              <InfoOutline className="h-4 w-4" />
            </Tooltip>
          </div>
          <Checkbox
            isChecked={linked}
            handleChange={() => dispatch(linkProfile(id))}
          />
        </div>
        <div className="flex justify-between">
          <span>Badge colour</span>
          <ColourButtons
            selectedColour={selectedColor}
            getColour={(colour) =>
              dispatch(changeColour({ widgetId: id, colour }))
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Activate badge</span>
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
