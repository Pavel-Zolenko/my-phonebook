import phonebook from 'images/phonebook.png';

const styles = {
  container: {
     position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  textAlign: 'center',
  width: '360px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <p>
        <b>PHONEBOOK</b>
      </p>
       <img
        width="320"
        src={phonebook}
        alt="phonebook"
        loading="lazy"
      />
    </div>
  );
}
