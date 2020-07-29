import { Form, FormState } from "gatsby-theme-firebase";

const CustomLogin = () => (
  <Layout>
    <h1>Custom Login</h1>
    <FormState.Provider>
      <Form
        onLoginSuccess={user => {
          navigate("/profile");
        }}
        onSignUpSuccess={user => {
          saveUserToDatabase(user).then(() => {
            navigate("/welcome");
          });
        }}
        onResetSuccess={() => {
          setMessage("Email sent!");
        }}
      />
    </FormState.Provider>
  </Layout>
);

export default CustomLogin