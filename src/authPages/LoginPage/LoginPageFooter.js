import { Fragment } from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from 'react-router-dom';

function LoginPageFooter({ handleLogin, isFormValid }) {
  const history = useHistory();

  const handlePushToRegisterPage = (event) => {
    history.push('/register');
  };
  return (
    <Fragment>
      <div>
        <CustomPrimaryButton
          label="Login"
          additionalStyles={{ marginTop: '30px' }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </Fragment>
  );
}

export default LoginPageFooter;
