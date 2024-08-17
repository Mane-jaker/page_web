import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";

function BreadCrumb() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="font-bold kaisei">
    <Link to="/">
      <Breadcrumb.Item href="">
        productos
      </Breadcrumb.Item>
    </Link>
      <Breadcrumb.Item>Xile morita con cacahuate</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;