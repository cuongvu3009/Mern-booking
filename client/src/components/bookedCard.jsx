import axios from 'axios';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const BookedCard = ({ dates, room, paid, createdAt }) => {
  const [hotel, setHotel] = useState({});
  const formatDates = dates.map((d) => {
    let myDate = new Date(Number(d));
    return myDate.toDateString();
  });

  const { data } = useFetch(`/api/v1/rooms/${room}`);

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await axios.get(`/api/v1/hotels/find/${data.hotelId}`);
      setHotel(res.data);
    };

    fetchHotel();
  }, [data]);

  return (
    <>
      <p>You reserved this room on: {createdAt}</p>
      <p>Booked room:</p>
      <ul>
        <li>Hotel: {hotel.name}</li>
        <li>Hotel address: {hotel.address}</li>
        <li>Room type: {data.title}</li>
        <li>Description: {data.desc}</li>
        <li>Payment made: €{paid * dates.length}</li>
        <li>Room id: {data._id}</li>
      </ul>
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
