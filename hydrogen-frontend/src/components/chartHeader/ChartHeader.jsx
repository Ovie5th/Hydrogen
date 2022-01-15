import React from 'react'
import './chartheader.css'

export default function ChartHeader() {
    return (    
        <div className = "chartHeader">
            <p>Trends</p>
            <ul className="chart-list">
                <li>Daily</li>
                <li>Weekly</li>
                <li className="chart-monthly">Monthyly</li>
                <li>Yearly</li>
            </ul>
        </div>
    )
}
