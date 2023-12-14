import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.section}>
      <p>University Of Ghana. <br></br>Legon</p>
    </div>
    <div style={styles.section}>
      <p>Email: <a href="mailto:vasiedu010@st.ug.edu.gh">vasiedu010@st.ug.edu.gh</a></p>
    </div>
    <div style={styles.section}>
      <p>Phone: 0204787472</p>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#1b2430',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    left: 0, 
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1000,
  },
  section: {
    flex: 1,
    margin: '0 10px',
  },
};


styles.footer['@media (max-width: 768px)'] = {
  flexDirection: 'column',
  position: 'fixed', 
};

export default Footer;
