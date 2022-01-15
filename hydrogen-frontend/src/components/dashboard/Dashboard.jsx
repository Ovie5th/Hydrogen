import React from 'react'
import Card from '../card/Card';
import { Chart } from '../chart/Chart';
import ChartHeader from '../chartHeader/ChartHeader';
import {FaFire, FaCrown, FaPaperPlane, FaPiggyBank,FaCloud, FaMale} from 'react-icons/fa'
import Toggle from '../toggleswitch/Toggle'
import './dashboard.css'

const details = [
  {
    amount: "N234,567:00",
    description: "Total Gross Paid",
    imageurl: <FaCrown />,
  },
  {
    amount: "N234,567:00",
    description: "Total Net Paid",
    imageurl: <FaCloud />,
  },
  {
    amount: "N234,567:00",
    description: "Total Extras Paid",
    imageurl: <FaPaperPlane />,
  },
  {
    amount: "N234,567:00",
    description: "Total Collections Paid",
    imageurl: <FaPiggyBank />,
  },
  {
    amount: "N234,567:00",
    description: "General Payment",
    imageurl: <FaFire />,
  },
];


export default function Dashboard() {
    return (
      <main className="Dashboard-wrapper">
        <div className="dashboard-welcome">
          <h2>Welcome Back Ovie</h2>
          <p>You have 6 notification and 2 messages</p>
        </div>
        <div className="dashboard-amount-section">
          <h2>Dashboard</h2>
          <section className="dashboard-data">
            <div className="dashboard-card-wrapper">
              <div className="dashboard-card">
                <div className="dash-wrapper">
                  <div className="dashboard-image">
                    <FaMale />
                  </div>
                  <div className="dashboard-wrap-text">
                    <p>Ovie</p>
                    <p>Eviconlabs ltd</p>
                  </div>
                </div>
                <button className="dashboard-button">Details</button>
              </div>
              <div className="dashboard-credit-card">
                <h5>Account Linked</h5>
                <p>**** **** **** 4563</p>
                <div className="account-with-toggle">
                  <div>
                    <h5>Account Balance</h5>
                    <p>*************</p>
                  </div>
                  <span>
                    <Toggle />
                  </span>
                </div>
                <h5>NB: Balance is currently hidden</h5>
              </div>
            </div>
            <div className="amount-paid">
              {details.map((item, index) => (
                <Card
                  amount={item.amount}
                  description={item.description}
                  imageUrl={item.imageurl}
                />
              ))}
            </div>
          </section>
        </div>
        <div className="dashboard-chart">
          <ChartHeader />
          <Chart />
          <div className="bottom-cards">
            {details.map((item, index) => (
              <Card
                amount={item.amount}
                description={item.description}
                imageUrl={item.imageurl}
              />
            ))}
          </div>
        </div>
      </main>
    );
}
