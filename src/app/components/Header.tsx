import "../css/header.css";

export default function Header(props: { title: string }) {
  const pageCSS = {
    navbar: "navbar navbar p-2", // has-background-periwinkle-20
    navbar_brand: "navbar-brand",
    title: "title is-5 is-underlined",
    anchor: "navbar-item",
    default_link: "",
  };

  const pageNames: string[] = ["Home", "Login", "Sign Up"];

  const pageLinks: { [key: string]: string } = {
    home: "/",
    login: "/login",
    "sign up": "/signup",
  };

  return (
    <nav role="navigation" className={pageCSS.navbar}>
      <div className={pageCSS.navbar_brand}>
        {pageNames.map((name: string, index: number) => {
          return (
            <a
              className={pageCSS.anchor}
              href={pageLinks[name.toLowerCase()]}
              key={name}
            >
              <span
                className={
                  name === props.title
                    ? "" + pageCSS.title
                    : pageCSS.default_link
                }
              >
                {name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
