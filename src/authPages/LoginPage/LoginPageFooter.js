import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';

function LoginPageFooter({ handleLogin, isFormValid }) {
  return (
    <div>
      <CustomPrimaryButton
        label="Login"
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
}

export default LoginPageFooter;
