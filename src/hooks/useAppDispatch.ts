import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { AppDispatch } from '../redux/store';

export const useAppDispatch = (): Dispatch<AnyAction> =>
    useDispatch<AppDispatch>();
