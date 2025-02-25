import React from 'react';
import PdpEventForm1 from './components/PdpEventForm1';
import PdpEventForm2 from './components/PdpEventForm2';
import PdpEventForm3 from './components/PdpEventForm3';
import PdpEventForm4 from './components/PdpEventForm4';
import PdpEventForm5 from './components/PdpEventForm5';

export default function PdpApp() {
    return (
        <div className="container border my-3 p-4 bg-light">
            <h1 className="text-center text-primary">Event Form - Demo</h1>
            <hr />
            <PdpEventForm1 />
            <PdpEventForm2 />
            <PdpEventForm3 />
            <PdpEventForm4 />
            <PdpEventForm5 />
        </div>
    );
}
