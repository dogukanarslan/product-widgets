import { useEffect } from 'react';
import { Widget } from 'src/components/Widget';
import { fetchWidgets } from 'src/slices/widgetSlice';
import { useAppDispatch, useAppSelector } from 'src/store';

const App = () => {
  const { data } = useAppSelector((state) => state.widgetReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWidgets());
  }, [dispatch]);

  return (
    <div className="p-5 pt-12 md:flex md:h-screen md:items-center md:justify-center md:p-0">
      <div className="md:bg-ghostwhite p-9 shadow-lg md:h-[420px] md:w-[851px]">
        <h3 className="mb-5 border-b-2 border-darkgray pb-4 text-center text-3xl font-bold md:text-left">
          Per product widgets
        </h3>
        <div className="flex flex-col gap-5 p-5 md:flex-row md:p-0">
          {data.map((widget) => (
            <Widget key={widget.id} widget={widget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
