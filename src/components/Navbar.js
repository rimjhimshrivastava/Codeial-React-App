import styles from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';
import {useAuth} from '../hooks'

const Navbar = () =>{
  const auth = useAuth();
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </Link>
      </div>

      <div className={styles.searchContainer}>
        <img
          className={styles.searchIcon}
          src="data:image/png;base64,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"
          alt=""
        />

        <input
          placeholder="Search users"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        />

        {/* {results.length > 0 && (
          <div className={styles.searchResults}>
            <ul>
              {results.map((user) => (
                <li
                  className={styles.searchResultsRow}
                  key={`user-${user._id}`}
                >
                  <Link to={`/user/${user._id}`}>
                    <img
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt=""
                    />
                    <span>{user.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>

      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to="/settings">
              <img
                src="https://img.freepik.com/premium-photo/sunny-stellar-smears-neon-lights-beautiful-young-girl-with-creative-makeup_647822-445.jpg"
                alt=""
                className={styles.userDp}
              />
            </Link>
            <span>{auth.user.name}</span>
          </div>
        )}

        <div className={styles.navLinks}>
          <ul>
            {auth.user ? (
              <>
                <li onClick={auth.logout}>
                  Log Out
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;