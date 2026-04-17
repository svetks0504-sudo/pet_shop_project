import { Button} from "antd";
  import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div>
      <img src="src/assets/images/404.png" alt="404 Not Found" />
      <h2>Page Not Found</h2>
      <h3>We’re sorry, the page you requested could not be found.</h3>
      <h3>Please go back to the homepage.</h3>
      <Button type="primary">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}
export default NotFound;
