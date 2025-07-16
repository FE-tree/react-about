import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export default function Page() {
  const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('获取了一个行星列表。');
        setPlanetList(result);
        setPlanetId(result[0].id); // 选择第一个行星
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    if (planetId=='') {
      return;
    }
    fetchData('/planets/'+planetId+'/places').then(res => {
        console.log('获取了一个地点列表。');
        setPlaceList(res);
        setPlaceId(res[0].id); // 选择第一个行星
    });
  }, [planetId])

  return (
    <>
      <label>
        选择一个行星：{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList?.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        选择一个地点：{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList?.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>你将要前往：{planetId || '...'} 的 {placeId || '...'} </p>
    </>
  );
}
