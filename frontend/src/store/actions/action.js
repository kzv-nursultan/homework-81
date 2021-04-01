import axiosInstance from '../../axiosInstance';

export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const postDataRequest = () => (
    {type: POST_DATA_REQUEST}
);
export const postDataSuccess = value => (
    {type: POST_DATA_SUCCESS, value}
);
export const postDataFailure = () => (
    {type: POST_DATA_FAILURE}
);

export const postData = data => {
    return async dispatch => {
        try {
            dispatch(postDataRequest());
            const response = await axiosInstance.post('/links', data);
            await dispatch(postDataSuccess(response.data));
        } catch {
            dispatch(postDataFailure());
        };
    };
};