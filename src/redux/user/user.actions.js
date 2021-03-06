import UserActionType from "./user.types";

export const setCurrentUser = user => ({
        type: UserActionType.SET_CURRENT_USER,
        payload: user
    }
)

export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
    type: UserActionType.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = (error) => ({
    type: UserActionType.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionType.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionType.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionType.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionType.SIGN_OUT_FAILURE,
    payload: error
})