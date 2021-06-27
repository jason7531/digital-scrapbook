import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Digital Scrapbook</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Memories</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Memory</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
