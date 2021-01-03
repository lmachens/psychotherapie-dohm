import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const NavLink = ({ children, activeClassName, ...props }) => {
  const { asPath, prefetch } = useRouter();

  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
        onMouseEnter: () => {
          prefetch(props.href);
        },
      })}
    </Link>
  );
};

NavLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default NavLink;
