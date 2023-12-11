
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTollData } from '../redux/actions';
import Header from '../components/Header';
import CalculateTollButton from '../components/CalculateTollButton';
import LeafletMap from '../components/LeafletMap';

function Home() {
  const dispatch = useDispatch();
  const tollData = useSelector((state) => state.tollData);

  useEffect(() => {
    // Fetch toll data on component mount
    dispatch(fetchTollData(start, end));
  }, []);

  return (
    <div>
      <Header />
      <CalculateTollButton />
      <LeafletMap tollData={tollData} />
    </div>
  );
}

// redux/actions.js
import { calculateToll } from '../services/tollService';

export const fetchTollData = (start, end) => async (dispatch) => {
  try {
    const tollData = await calculateToll(start, end);
    dispatch({ type: 'FETCH_TOLL_DATA_SUCCESS', payload: tollData });
  } catch (error) {
    dispatch({ type: 'FETCH_TOLL_DATA_FAILURE', payload: error.message });
  }
};
