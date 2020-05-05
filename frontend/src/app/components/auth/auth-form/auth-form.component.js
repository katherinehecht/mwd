// stateless component
const authForm = {
  // pass text to component to dynamically render text
  bindings: {
    // one way data binding
    user:'<',
    // attribute binding
    button: '@',
    message: '@',
    onSubmit: '&'
  },
  templateUrl: './auth-form.html',
  controller: ($state) => {
    const ctrl = this;
    ctrl.submitForm = () => {
      ctrl.onSubmit({
        $event: {
          user: ctrl.user
        }
      });
    };
  }
}

angular
  .module('components.auth')
  .component('authForm', authForm);