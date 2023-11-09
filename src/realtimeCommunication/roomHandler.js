import { setOpenRoom } from '../store/actions/roomAction';
import store from '../store/store';

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
};
