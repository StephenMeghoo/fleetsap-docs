---
title: 'Tanks - Fuel Inventory'
description: 'Fleetsap Fuel and Fleet Management Documentation'
position: 3
category: 'Module Guides'
version: 1.4
fullscreen: false
menuTitle: 'Fuel Inventory'
---


## Introduction

Selecting the "[Tanks](/features#fleetsap-features)" module will immediately bring up all your current storage tanks and tank locations, showing the current level in each tank along with the *Tank ID* and *Tank Description* as shown below.

![all-tanks](https://i.ibb.co/gV9BDCs/tanks-dsl.png)

* You may cycle between locations using the station tab

![stations](https://i.ibb.co/P5MW3qZ/tank-stations.png)

*Changed location to Lube Station* :

> ![lube-station](https://i.ibb.co/9ZNp0mB/tanks-lube.png)
---
<br/>


* A search bar will also be present where tanks can be *queried* by ***Tank ID*** or ***Tank Description***

![search-b](https://i.ibb.co/MNZmw99/search-b.png)

* There will be two buttons present to the right of the search bar; A green "Inventory" button and a blue "Shifts" button.

#  ![query-b](https://i.ibb.co/18c9Q1S/tanks-buttons.png)

* Depending on the current state of your tank, different indicator icons may appear.

***Here are some of the indicators shown***


The ***last transmission*** indicator:

*when the mouse cursor is hovered over the icon, it shows the last time the tank transmitted information to the fleetsap platform.*
> ![last-trans-a](https://i.ibb.co/0fw3gwp/comm-stat.png)
> ![last-trans-b](https://i.ibb.co/Bt8yRVz/comm-stat-a.png)

> ![last-trans-c](https://i.ibb.co/W3D0ML4/comm-stat2.png)
> ![last-trans-d](https://i.ibb.co/c1tLnyB/comm-stat2-a.png)

The ***Product Level*** Indicator:

> ![tank-warn](https://i.ibb.co/6PVq9H7/warning.png)
> ![tank-warn-b](https://i.ibb.co/QNFJZYq/warning-lvl.png)

> **💡 Quick Note!** - Low product level warnings are manually configured.

Below each tank is an information bar showing TankID and Tank Description. 

![tank-bar](https://i.ibb.co/WyzSmcZ/tank-drop-a.png)

Clicking anywhere along this bar will display more information about the tank.

***As shown in the screenshot below :***

> ![tank-bar-b](https://i.ibb.co/WBy2cH7/tank-drop-b.png)

## Inventory Management 

> **📘 Overview** - In this section we'll look at the capabilites of the tank module and how to get more detailed information about your tanks.

### Fuel Graphs & Charts

By clicking on the tank [image](/tanks#introduction), you will be brought to the page shown below:

> **💡 Note!** - Changing the "***type of reading***" will also affect how the information is displayed 

![tank-info](https://i.ibb.co/svGxjBv/diesel-tank-g.png)

> Selecting  **Level Changes Only** - will ***ONLY*** display information where a change in fuel level has/had occurred.

---

All information displayed by the graphs and charts is controlled by the *date&time* selector.

![date-select](https://i.ibb.co/J32BMWG/date-select.png)

---




Moving your cursor along the graph will show the fuel, water and temperature level of the tank at that specific time.



![tank-change](https://i.ibb.co/7v5SNFr/dtank-time-a.png)

![tank-change-2](https://i.ibb.co/74w2hRD/dtank-time-b.png)

> **💡 Note!** - You can change the frequency of how the graph display the fuel level by selecting between *Minute, Hour and Day*

---
#### Tabs

At the top of the page, there will be various ***tabs*** to change what information is being displayed, as well as how it is being displayed.

These are the tabs:

- **Fuel Levels by Day (Chart)** - This will simply display an overview of how much fuel has entered and left your tank for the day.

![byday](https://i.ibb.co/KjKLDrG/diesel-day.png)

- **Fuel Levels by Day (Data)** - This will display an overview in text form of the amount of fuel that has gone into the tank and the amount that has gone out for the day.

![bydata](https://i.ibb.co/VwDz94v/data1.png)
![data2](https://i.ibb.co/dPBxW24/data2.png)
![data3](https://i.ibb.co/dm8RcHS/data3.png)

- **Fuel Level Detail** - THis tab shows all the fuel events that your tank has reported. (*directly affected by the date&time selector*)

![dtail-lvl](https://i.ibb.co/JHwLCFw/detail-lvl.png)

Click [here](https://ibb.co/pdBDnrB) for a better view.

### Inventory & Shifts 

![inv-shifts](https://i.ibb.co/wNj8kmp/inv-shift.png)

- **Inventory** - The **Inventory** tab gives an overview of the overall inventory levels of all tanks and locations. The information can further be examined down to each individual storage tank, showing the current inventory, percentage, total capacity and also the daily consumption for the last 15 days.

![inv-brkdwn](https://i.ibb.co/kMsgDhv/inven.png)

Click [here](https://ibb.co/XVrZ5zM) for a better view.


- **Shifts** - The **Shifts** tab  display inventory and dispensing information in *shifts* 

> **💡 Note!** *Shifts* are specific hour intervals.

This means if the *shift* frequency 8 is selected (as seen in the screenshot below) it will display fuel inventory/dispensing information for every 8 hour interval.

![inter-val](https://i.ibb.co/1Gpmh0h/shifts1.png)

Click [here](https://ibb.co/r2LwTQT) for a better view.
















