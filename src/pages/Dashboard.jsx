import React from 'react';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sidebarItem: {
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  sidebarItemHover: {
    backgroundColor: '#444',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  sectionTitle: {
    marginTop: '0',
  },
};

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={{ ...styles.sidebarItem, ...styles.sidebarItemHover }}>Dashboard</div>
        <div style={styles.sidebarItem}>Profile</div>
        <div style={styles.sidebarItem}>Settings</div>
        <div style={styles.sidebarItem}>Logout</div>
      </aside>
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Dashboard</h1>
        </header>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Section 1</h2>
          <p>Content for section 1</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Section 2</h2>
          <p>Content for section 2</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Section 3</h2>
          <p>Content for section 3</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;