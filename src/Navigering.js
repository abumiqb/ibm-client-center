import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Sider/Home';
import BookRoom from './Sider/BookRoom';
import BookBriefing from './Sider/BookBriefing';
import Tilgjenglighet from './Sider/Tilgjenglighet';
import Rooms from './Sider/Rooms';
import NorthernLight from './Sider/Rom/NorthernLight';
import BlueHour from './Sider/Rom/BlueHour';
import Equinox from './Sider/Rom/Equinox';
import GreenGlow from './Sider/Rom/GreenGlow';
import MidnightSun from './Sider/Rom/MidnightSun';
import SuperMoon from './Sider/Rom/SuperMoon';
import BlueHourCalendar from './Sider/Rom/Calendar/BlueHourCalendar';
import EquinoxCalendar from './Sider/Rom/Calendar/EquinoxCalendar';
import GreenGlowCalendar from './Sider/Rom/Calendar/GreenGlowCalendar';
import MidnightSunCalendar from './Sider/Rom/Calendar/MidnightSunCalendar';
import NorthernLightCalendar from './Sider/Rom/Calendar/NorthernLightCalendar';
import SuperMoonCalendar from './Sider/Rom/Calendar/SuperMoonCalendar';
import BookRoomBlueHour from './Sider/Rom/Booking/BookRoomBlueHour';
import BookRoomEquinox from './Sider/Rom/Booking/BookRoomEquinox';
import BookRoomGreenGlow from './Sider/Rom/Booking/BookRoomGreenGlow';
import BookRoomMidnightSun from './Sider/Rom/Booking/BookRoomMidnightSun';
import BookRoomNorthernLight from './Sider/Rom/Booking/BookRoomNorthernLight';
import BookRoomSuperMoon from './Sider/Rom/Booking/BookRoomSuperMoon';
import './Navigering.css'
import Logo404 from './Bilder/ibm-logo-404.png';


class Navigering extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/book-room' component={BookRoom} />
          <Route exact path='/book-briefing' component={BookBriefing} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/tilgjenglighet' component={Tilgjenglighet} />
          <Route exact path='/room/northern-light' component={NorthernLight} />
          <Route exact path='/room/blue-hour' component={BlueHour} />
          <Route exact path='/room/equinox' component={Equinox} />
          <Route exact path='/room/green-glow' component={GreenGlow} />
          <Route exact path='/room/midnight-sun' component={MidnightSun} />
          <Route exact path='/room/super-moon' component={SuperMoon} />
          <Route exact path='/room/blue-hour/calendar' component={BlueHourCalendar} />
          <Route exact path='/room/equinox/calendar' component={EquinoxCalendar} />
          <Route exact path='/room/green-glow/calendar' component={GreenGlowCalendar} />
          <Route exact path='/room/midnight-sun/calendar' component={MidnightSunCalendar} />
          <Route exact path='/room/northern-light/calendar' component={NorthernLightCalendar} />
          <Route exact path='/room/super-moon/calendar' component={SuperMoonCalendar} />
          <Route exact path='/room/blue-hour/booking' component={BookRoomBlueHour} />
          <Route exact path='/room/equinox/booking' component={BookRoomEquinox} />
          <Route exact path='/room/green-glow/booking' component={BookRoomGreenGlow} />
          <Route exact path='/room/midnight-sun/booking' component={BookRoomMidnightSun} />
          <Route exact path='/room/northern-light/booking' component={BookRoomNorthernLight} />
          <Route exact path='/room/super-moon/booking' component={BookRoomSuperMoon} />

        <Route render = { function()
          {
            return <div>
              <br/><br/><br/>
                  <img id="logo_404" src={Logo404} class="center" alt="IBM"/>
                <br/>
                <h2>Oops — that's not right!</h2>
              <h5>Sorry, unless you really were hoping to find our 404 message, <br/>the page you were looking
                  for has been moved or deleted.</h5>
              <br/><br/>
                <div class="text-center"> <a class="btn btn-primary btn-lg active" href="/" role="button">Go Home</a>
                </div>
            </div>
          }} />
      </Switch>
    );
  }
}

export default Navigering;
