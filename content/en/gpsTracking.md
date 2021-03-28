---
title: 'GPS Tracking'
description: 'Fleetsap Fuel and Fleet Management Documentation'
position: 5
category: 'Module Guides'
version: 1.4
fullscreen: false
menuTitle: 'GPS Tracking'
---


## Manual

Selecting the "[GPS Tracking](/features#gps-tracking)" module will immediately bring you to the ***GPS Tracking dashboard***. 

![gps-dash](https://i.ibb.co/RbpGDLR/gpsdash.png)

**Click [here](https://i.ibb.co/RbpGDLR/gpsdash.png) for a better view.**

 The tracking-dashboard displays a map view of your vehicles as well as other information such as:

* **Vehicle Name**

* **Driver Name**

* **Event Type** (*Last event detected by the GPS*)

* **Event Info**

* **Position Time** (Last time GPS updated its location)

* **Speed**

* **Odomter Reading**

* **Address**

* **Region** (*Relies on Geo Fencing*)

* **Last Transmission**

###  Dashboard Icons

![ig-on](https://i.ibb.co/8dHkXp5/ignition-on.png)

* The Green symbol indicates that the vehicle ignition is turned on.

* A Red symbol indicates that the vehicle has been turned on for an extended period of time without movement (idling)

* A Grey symbol idicates the vehicle ignition is turned off

* > ![discon](https://i.ibb.co/SmwGYMg/discon.png) 
This symbols indicates the GPS has been disconnected from its power source and it now being run on its internal backup battery.

---

> ![trans](https://i.ibb.co/JmgbwDc/last-trans.png)

This icon displays the elapsed time since the last gps communication with the fleetsap platform

---
#### Tracking Features



|>>>> ![filter](https://i.ibb.co/k29ww8R/filters.png) | This option allows you to specify time frame for which you would like to check tracking information for a vehicle (*affects all features except ***fue sender***)* |
| --- | ----------- |
| ![trace](https://i.ibb.co/BZ5bhfz/tracing.png) |**This option traces the trip paths taken by the vehicle for the time frame selected within the filter option**|
|![direc](https://i.ibb.co/BfrWShd/direction.png) | **This option adds clickable arrows along the traced trip paths to show what direction the vehicle was heading in at specific points. ( Selecting an arrow will bring up information showing the time, date, speed, odometer reading, GPS coordinates and location of the vehicle at that point ).** |
|![motion](https://i.ibb.co/BZ5bhfz/tracing.png)| **This option starts a playback, showing the movement of the vehicle across the map** |
| ![fsen](https://i.ibb.co/pny6yFG/sender.png)| **The fuel sender pulls information from the GPS unit, bringing up a graph showing fuel consumption against distance traveled, temperature, acceleration and more** |
| ![vh-dash](https://i.ibb.co/wdyq1c4/vh-dash.png)| **This option pulls up the virtual vehicle dashboard, showing the fuel gauge, temperature gauge, speedometer, battery voltage, odometer readings, engine hours and more** |
| ![exp-map](https://i.ibb.co/9sCCtBw/map-expand.png) | **This option allows you to expand the map to Fullscreen for better viewing**|
|**>>>>** | |

### Examples
![trace](https://i.ibb.co/BZ5bhfz/tracing.png)

![trt](https://i.ibb.co/DLB4xGw/tracetrip.png)

**Zoomed [image](https://i.ibb.co/DLB4xGw/tracetrip.png)**

---

![direc](https://i.ibb.co/BfrWShd/direction.png)

![dtrip](https://i.ibb.co/G3KfDxb/dtrip.png)

**Zoomed [image](https://i.ibb.co/G3KfDxb/dtrip.png)**

---

### Getting Fuel Information

On the left pane, there will be your list of vehicles.  To get fuel information from a vehicle, select the checkbox beside the name of the vehicle you are enquiring. 

![vh-pane](https://i.ibb.co/k9KrZg1/vh-pane.png)

After selecting the vehicle of choice, an extra set of icons will now be enabled at the top of the map view window.

![dashicons](https://i.ibb.co/9t888n4/dashicons.png)

</br>

Select the icon called ***Fuel Sender***. A new browser tab should open, which will take between 20-45 seconds to render. This will be the fuel sender graph.

![fsender](https://i.ibb.co/pny6yFG/sender.png) 

---

#### The Fuel Sender

![fsend-lb](https://i.ibb.co/NnMsXWR/fuelsend-lb.png)

**Click [here](https://i.ibb.co/NnMsXWR/fuelsend-lb.png) for a better view**.

The fuel sender, displays the changes/movement of fuel, odometer readings, temperature, speed etc. 

**Understanding the fuel Sender**:

- As the odometer reading increases , the fuel level decreases. (This is a typical fuel sender chart)

- You can mouse over to any point of the graph to see the fuel level, odometer, speed etc. at that specific point in time

- You can adjust the date and time to get clearer and more refined information

- Clicking at any point on the graph will open the GPS location of the vehicle at the point selected









