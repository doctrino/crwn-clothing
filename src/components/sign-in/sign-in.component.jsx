import React from "react";
import {connect} from "react-redux";
import "./sign-in.stle.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart} from "../../redux/user/user.actions";

const SignIn = ({googleSignInStart}) => {
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>

                <FormInput name="email" type="email" required label="Email"/>
                <FormInput name="password" type="password"  label="Password" required/>
                <div className="buttons">
                    <CustomButton type="submit">Sign in </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})


export default connect(null, mapDispatchToProps)(SignIn);
