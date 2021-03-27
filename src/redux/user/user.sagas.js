import {takeLatest, put, all, call} from "redux-saga/effects";
import UserActionType from "./user.types";
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";
import {googleSignInFailure, googleSignInSuccess, signOutFailure, signOutSuccess} from "./user.actions";

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield put(googleSignInSuccess(userAuth));
    } catch (e) {
        yield put(googleSignInFailure(e))
    }
}
export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (e) {
        yield put(signOutFailure(e))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionType.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
}
