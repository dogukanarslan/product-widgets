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
    <div className="p-9">
      <h3 className="mb-5 text-center text-3xl font-bold">
        Per product widgets
      </h3>
      <div className="space-y-5 px-3">
        {data.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default App;
