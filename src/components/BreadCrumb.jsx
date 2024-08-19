import { Breadcrumb } from "flowbite-react";
import PropTypes from 'prop-types';

BreadCrumb.propTypes = {
  name: PropTypes.string.isRequired
};

function BreadCrumb({ name }) {


  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="font-bold kaisei">
      <Breadcrumb.Item href="/">
        productos
      </Breadcrumb.Item>
      <Breadcrumb.Item>{name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;