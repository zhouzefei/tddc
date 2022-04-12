export default (props) => {
  const { children, href, unmountHandle, ...rest } = props;
  if (window.__isMultiTab__ || true) {
    return (
      <a
        onClick={(evt) => {
          evt.preventDefault();
          if (unmountHandle && typeof unmountHandle === 'function') {
            unmountHandle();
          }
          window.push(href);
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};
