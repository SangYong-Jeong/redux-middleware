import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/* 
요청을 위한 액션 타입을 payload로 설정합니다.(예: "sample/GET_POST")
*/

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;

/* 
요청이 시작될 때 디스패치할 액션
{
  type: 'loading/START_LOADING',
  payload: 'sample/GET_POST'
}

요청이 끝나면 디스패치할 액션
{
  type: 'loading/FINISH_LOADING',
  payload: 'sample/GET_POST'
}
*/
