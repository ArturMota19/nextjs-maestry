// private routes are use to:
// - restrict access to certain routes
// - separating UI logic from routing logic
// - organizing internal files across a project
// - sorting and groping files
// - avoiding naming conflicts (w/ future next.js conventions)


export default function PrivateRoute() {
  return (
    <div>
      <h1>You cannot see this route in the browser</h1>
    </div>
  );
}