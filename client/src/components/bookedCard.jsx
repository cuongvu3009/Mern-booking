const BookedCard = ({ dates, room }) => {
  const formatDates = dates.map((d) => {
    let myDate = new Date(Number(d));
    return myDate.toDateString();
  });

  return (
    <>
      <p>Booked room: {room}</p>
      <p>Booked date:</p>
      <ul>
        {formatDates.map((d) => {
          return <li key={d}>{d}</li>;
        })}
      </ul>
      <div className='line'></div>
    </>
  );
};

export default BookedCard;
