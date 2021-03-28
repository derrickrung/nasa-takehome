## How To Run
Open `index.html` in any browser (perferably later versions of Chrome).

## Notes
- Since this was a 4 hour test, I didn't try to account for responsiveness nor cross-browser compatibility, although it should work for *most* browsers and versions. But I can revise it to account for those things if you would like.

- This project, while currently working fine, would need to be adjusted should there ever be another telemetry id added. Although the changes would be minor in this scenario, the app doesn't automatically scale to accomodate for that.

- When updating the table contents with new data from the socket, the app currently bulk updates the entire table. I understand this is not performant, but because the data stream wasn't frequent enough, I decided to not worry about optimization in this specific case.

- The app has local state data which manages a few things: 
  - the sort order
  - the selected telemetry id's
  - the table data output

- The state data is all made *reactive* using Proxies. Thus, app applies side effects when certain properties are updated.


