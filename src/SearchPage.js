import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJyW5-MeK8wl2KISrlb6LZWslKDd9p1Lc2zR9CANrA=s100-c-k-c0xffffffff-no-rj-mo"
        channel="Clash of Clans"
        verified
        subs="16.1M"
        noOfVideos={400}
        description="Get ready to kick off the autumn season with Day 1 of the Clash World Championship Qualifier #4! Eight Clans will battle for victory but only one will secure a Golden Ticket"
      />
      <hr />
      <VideoRow
        image="https://i.ytimg.com/vi/yqPbOLpcpzw/hqdefault_live.jpg?sqp=CITkt_sF-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCOuCSdNpOO1bWvrcz8qr1cybj4Vg"
        title="World Championship #4 Qualifier Day 1 - Clash Of Clans"
        channel="Clash of Clans"
        views="2M"
        subs="16.1M"
        timestamp="2 days ago"
        description="Get ready to kick off the autumn season with Day 1 of the Clash World Championship Qualifier #4! Eight Clans will battle for victory but only one will secure a Golden Ticket"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/tXnEMxcvKL0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMwTDnIzqQiBboULXZxtRsdCP-pw"
        title="World Championship #4 Qualifier Day 1 - Clash Of Clans"
        channel="Clash of Clans"
        views="2M"
        subs="16.1M"
        timestamp="3 days ago"
        description="Get ready to kick off the autumn season with Day 1 of the Clash World Championship Qualifier #4! Eight Clans will battle for victory but only one will secure a Golden Ticket"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/iGlqeDLkeDw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB31S9G00AiayJtlMHbJ9jTwMcuew"
        title="World Championship #4 Qualifier Day 1 - Clash Of Clans"
        channel="Clash of Clans"
        views="2M"
        subs="16.1M"
        timestamp="4 days ago"
        description="Get ready to kick off the autumn season with Day 1 of the Clash World Championship Qualifier #4! Eight Clans will battle for victory but only one will secure a Golden Ticket"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/TKkM4eBA6IA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAeYueg97sCbpXw83U0v-YMx6WZ_Q"
        title="World Championship #4 Qualifier Day 1 - Clash Of Clans"
        channel="Clash of Clans"
        views="2M"
        subs="16.1M"
        timestamp="5 days ago"
        description="Get ready to kick off the autumn season with Day 1 of the Clash World Championship Qualifier #4! Eight Clans will battle for victory but only one will secure a Golden Ticket"
      />
      <VideoRow
        image="https://i.ytimg.com/vi/Mj6oM8a1ils/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAD72GmdxRDcuVscZpwqf8V2ivPiQ"
        title="World Championship #4 Qualifier Day 1 - Clash Of Clans"
        channel="Clash of Clans"
        views="2M"
        subs="16.1M"
        timestamp="6 days ago"
        description="Get ready to kick off the autumn season with Day 1 of the Clash World Championship Qualifier #4! Eight Clans will battle for victory but only one will secure a Golden Ticket"
      />
    </div>
  );
}

export default SearchPage;
