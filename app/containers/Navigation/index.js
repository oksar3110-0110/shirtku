import React from 'react';
import styles from './styles.css';
import Icon from 'components/Icon';
import { connect } from 'react-redux';
import { openCart } from 'containers/Cart/actions';

const appLogo = 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.png';

class Navigation extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className={styles.appNavigation}>
        <div className={styles.appNavigationContainer}>
          <div
            className={styles.brandLogo}
            style={{
              backgroundImage: `url(${appLogo})`,
            }}
          />
          <div className={styles.appNavigationItems}>
            <div className={styles.appNavigationLinks}>

            </div>
            <div className={styles.appNavigationProfileSection}>
              <div
                className={styles.shoppingCartToggle}
                role="button"
                onClick={this.props.openCart}
              >
                <Icon type="bag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  openCart: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    openCart: () => dispatch(openCart()),
  };
}

export default connect(null, mapDispatchToProps)(Navigation);
