import { connect } from 'dva';

const HomeComponent = ({username, password}) => {
  return (
    <div>
      username: {username}, <br />
      password: {password}
    </div>
  );
}

function mapStateToProps ({home}) {
  return {
    ...home
  };
}

export default connect(mapStateToProps)(HomeComponent);
