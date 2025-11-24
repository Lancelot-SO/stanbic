// eslint-disable-next-line no-unused-vars
import React from 'react'
import TableHero from '../component/table/TableHero'
import MainTable from '../component/table/MainTable'
import WeatherApp from '../component/Weather'
import Accordion from '../component/home/Accordion'
import Socials from '../component/home/Socials'

const Table = () => {
    return (
        <div>
            <TableHero />
            <MainTable />
            <WeatherApp />
            <Accordion />
            <Socials />
        </div>
    )
}

export default Table