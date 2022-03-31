export default (props) => {
  const { children, href, ...rest } = props;
  if (window.__isMultiTab__) {
    return (
      <a
        onClick={(evt) => {
          evt.preventDefault();
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
