import React, { useCallback, useEffect, useState } from 'react'
import CarItem from './CarItem'
import Tag from './Tag'
import axios from 'axios'
import Loading from '../pages/Loading'
import NoCar from '../pages/NoCar'

function Category() {
    const [cars, setCars] = useState([]);
    const [segment, setSegment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('all')

    const onSelect = useCallback(category => setCategory(category), [])

    useEffect(() => {
        const fetchDatas = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? null : `segment=${category}`;
                const response = await
                    axios.get(`https://preonboarding.platdev.net/api/cars?${query}`,
                    );
                // console.log(response.data.payload);
                setCars(response.data.payload)
            } catch (error) {
                // console.log(error);
            }
            setLoading(false);
        }
        fetchDatas()
    }, [category]);

    //로딩 중 일 때
    if (loading) {
        return <Loading />
    }

    //차량이 없을 때
    if (!cars) {
        return <NoCar />
    }

    return (
        <>
            <Tag
                category={category}
                onSelect={onSelect}
            />
            <hr />
            <CarItem
                cars={cars}
                setCars={setCars}
                category={category}
                setLoading={setLoading}
                segment={segment}
            />
        </>
    )
}
export default Category
