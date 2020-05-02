import React from 'react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();

  const styles = {
    textAlign: 'center',
    marginTop: '4rem'
  };

  return (
    <div style={styles}>
      <h2>404: Not Found</h2>
      <h6>Sorry, The Page You Were Looking For Does Not Exist</h6>
      <br />
      <button type='button' onClick={() => history.push('/')}>
        Go Back Home
      </button>
    </div>
  );
};

export default PageNotFound;
