import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const items = [
{
"id": 1,
"title": "Diapers, size 6 for SLF",
"home_station": "Nursery",
"aldi": "",
"section": "8 Diapers",
"walmart": "Diapers",
"is_active": "TRUE",
"on_hand_qty": "15",
"target_qty": "12",
"buy_qty": "0",
"updated": "2023-01-14"
},
{
"id": 2,
"title": "Pull-ups for SMF",
"home_station": "Nursery",
"aldi": "",
"section": "8 Diapers",
"walmart": "Diapers",
"is_active": "TRUE",
"on_hand_qty": "12",
"target_qty": "12",
"buy_qty": "0",
"updated": "2023-01-14"
},
{
"id": 3,
"title": "Papa bread",
"home_station": "Freezer",
"aldi": "2 Bread",
"section": "",
"walmart": "",
"is_active": "TRUE",
"on_hand_qty": "3",
"target_qty": "4",
"buy_qty": "1",
"updated": "2023-01-14"
},
{
"id": 4,
"title": "Yellow wheat bread",
"home_station": "Freezer",
"aldi": "2 Bread",
"section": "",
"walmart": "",
"is_active": "TRUE",
"on_hand_qty": "3",
"target_qty": "2",
"buy_qty": "0",
"updated": "2023-01-14"
},
{
"id": 5,
"title": "Southern diced potatoes",
"home_station": "Freezer",
"aldi": "9 Freezer",
"section": "9 Freezer",
"walmart": "Freezer",
"is_active": "TRUE",
"on_hand_qty": "0",
"target_qty": "2",
"buy_qty": "2",
"updated": "2023-01-14"
},
{
"id": 6,
"title": "French fries",
"home_station": "Freezer",
"aldi": "9 Freezer",
"section": "9 Freezer",
"walmart": "Freezer",
"is_active": "TRUE",
"on_hand_qty": "1",
"target_qty": "2",
"buy_qty": "1",
"updated": "2023-01-14"
},
{
"id": 7,
"title": "Butter sticks, salted",
"home_station": "Fridge",
"aldi": "9 Dairy",
"section": "5 Dairy",
"walmart": "Dairy",
"is_active": "TRUE",
"on_hand_qty": "16",
"target_qty": "5",
"buy_qty": "0",
"updated": "2023-01-14"
},
{
"id": 8,
"title": "Butter sticks, unsalted",
"home_station": "Fridge",
"aldi": "9 Dairy",
"section": "5 Dairy",
"walmart": "Dairy",
"is_active": "TRUE",
"on_hand_qty": "0",
"target_qty": "2",
"buy_qty": "2",
"updated": "2023-01-14"
},
{
"id": 9,
"title": "Butter tub, spreadable",
"home_station": "Fridge",
"aldi": "9 Dairy",
"section": "5 Dairy",
"walmart": "Dairy",
"is_active": "TRUE",
"on_hand_qty": "1",
"target_qty": "1",
"buy_qty": "0",
"updated": "2023-01-14"
},
{
"id": 10,
"title": "Milk (gallon)",
"home_station": "Fridge",
"aldi": "9 Dairy",
"section": "9 Dairy",
"walmart": "Dairy",
"is_active": "TRUE",
"on_hand_qty": "1",
"target_qty": "1",
"buy_qty": "0",
"updated": "2023-01-14"
}
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App items={items}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
