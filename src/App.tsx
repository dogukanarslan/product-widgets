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
    <div className="m-9 p-9 shadow-lg">
      <h3 className="mb-5 border-b-2 border-darkgray pb-4 text-center text-3xl font-bold md:text-left">
        Per product widgets
      </h3>
      <div className="flex flex-col gap-5 px-3 md:flex-row">
        {data.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default App;
