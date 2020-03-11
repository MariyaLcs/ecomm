const layout = require("../layout");

module.exports = ({ req }) => {
  return layout({
    content: `
    <div>
    HELLO ${req.session.userId}!
      <form method="post">
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <input name="passwordConfirmation" placeholder="password confirmation" />
          <button>Sign up</button>
      </form>
    </div>
    `
  });
};
