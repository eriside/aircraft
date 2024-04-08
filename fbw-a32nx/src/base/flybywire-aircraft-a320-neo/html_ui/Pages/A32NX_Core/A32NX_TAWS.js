import {
    ArraySubject, ClockEvents, ComponentProps, DisplayComponent, EventBus, FSComponent,
    MapSubject, MappedSubject, MappedSubscribable, SimVarValueType, Subject, Subscribable, Subscription, VNode,
} from '@microsoft/msfs-sdk';
import { NavigationDatabase, NavigationDatabaseBackend, NavigationDatabaseService } from '@fmgc/index';
import { AmdbAirportSearchResult, Arinc429RegisterSubject, EfisSide, FeatureType, FeatureTypeString, MathUtils, MsfsBackend, Runway } from '@flybywiresim/fbw-sdk';

class A32NX_TAWS {

    init_nearest_runwy(){


        // if above 600 feet do not start
        if (SimVar.GetSimVarValue("RADIO HEIGHT", "FEET") > 600 && SimVar.GetGameVarValue("AUTOBRAKES ACTIVE", "BOOL") == false) {
            return;
        }
        console.log('A32NX_TAWS init');
         /*
         * Nearest Part
         */
         this.nearestAirport = [];
         this.nearestRunwayList = [];
         this.savedNearestAirportId;
         this.needUpdate = false;
         this.nearestRunwayHowFarAway = 50000000;
         this.nearestRunwayId = null;

         this.shouldChangeNearestRunwayThings = true;

         this.nearestRunwayLength = null;
         this.nearestRunwayWidth = null;
         this.nearestRunwayMiddleLat = null;
         this.nearestRunwayMiddleLon = null;

         this.nearestRunwayName = null;
         this.nearestRunwayHeading = null;
         this.nearestRunwayLatitude = null;
         this.nearestRunwayLongitude = null;

         this.nearestoppositeRunwayName = null;
         this.nearestoppositeRunwayHeading = null;
         this.nearestoppositeRunwayLatitude = null;
         this.nearestoppositeRunwayLongitude = null;


     }

    update(_deltaTime) {
        const radioheight = SimVar.GetSimVarValue("RADIO HEIGHT", "FEET")

        // if above 600 feet do not start
        if (radioheight > 600) {
            return;
        }

        const gpsLat = SimVar.GetSimVarValue("A:GPS POSITION LAT", "degrees");
        const gpsLon = SimVar.GetSimVarValue("A:GPS POSITION LON", "degrees");

        // Search Nearest Airport
        this.nearestAirport = this.findNearestAirport(5, gpsLat, gpsLon);

        this.whoIsNearestRunway(gpsLat, gpsLon);
    }


    whoIsNearestRunway(gpsLat, gpsLon) {
        const db = NavigationDatabaseService.activeDatabase.backendDatabase;
        const destination = this.fmsDataStore.destination.get();

    }


}
